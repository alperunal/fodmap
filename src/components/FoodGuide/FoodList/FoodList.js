import React, { Component } from "react";
import { List, Avatar, Tag } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import "./FoodList.css";
import * as actionTypes from "../../../store/actions";

class FoodList extends Component {
  state = {
    foods: []
  };

  handleSelectFood = food => {
    console.log(food);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("/foods.json")
      .then(response => {
        const foods = [];
        const categoryId = this.props.categoryId;
        for (let key in response.data[categoryId]) {
          foods.push(response.data[categoryId][key]);
        }
        this.setState({ foods: foods });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getTag(type) {
    const danger = <Tag color="red">danger</Tag>;
    const warning = <Tag color="gold">warning</Tag>;
    const safe = <Tag color="green">safe</Tag>;
    const unknown = <Tag color="blue">unknown</Tag>;

    switch (type) {
      case 0:
        return safe;
      case 1:
        return warning;
      case 2:
        return danger;
      default:
        return unknown;
    }
  }

  render() {
    return (
      <div className="FoodList">
        <h3>{this.props.categoryName}</h3>
        <List
          itemLayout="horizontal"
          dataSource={this.state.foods.filter(food => food.active)}
          renderItem={item => {
            const list = (
              <List.Item onClick={() => this.handleSelectFood(item)}>
                <List.Item.Meta
                  avatar={<Avatar src={item.icon} />}
                  title={item.name}
                  description={this.getTag(item.status)}
                />
              </List.Item>
            );

            return list;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryId: state.selectedCategory.id,
    categoryName: state.selectedCategory.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectFood: food =>
      dispatch({
        type: actionTypes.SELECT_FOOD,
        payload: { ...food }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
