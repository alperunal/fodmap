import React, { Component } from "react";
import { List, Avatar } from "antd";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";
import "./FoodCategoryList.css";

class foodCategoryList extends Component {
  handleSelectCategory = category => {
    this.props.onSelectCategory(category.id, category.title);
  };

  render() {
    return (
      <div className="FoodCategoryList">
        <List
          itemLayout="horizontal"
          dataSource={this.props.categories.filter(category => category.active)}
          renderItem={item => {
            const list = (
              <List.Item onClick={() => this.handleSelectCategory(item)}>
                <List.Item.Meta
                  avatar={<Avatar src={item.icon} />}
                  title={item.title}
                  description={item.subtitle}
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

export const mapDispatchToProps = dispatch => {
  return {
    onSelectCategory: (id, name) =>
      dispatch({
        type: actionTypes.SELECT_CATEGORY,
        payload: { id, name }
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(foodCategoryList);
