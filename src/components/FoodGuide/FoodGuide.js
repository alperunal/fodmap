import React, { Component } from "react";
import "./FoodGuide.css";
import FoodCategoryList from "./FoodCategoryList/FoodCategoryList";
import FoodList from "./FoodList/FoodList";
import axios from "axios";
import { connect } from "react-redux";
import Header from "../Header/Header";

class FoodGuide extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios
      .get("/categories.json")
      .then(response => {
        const cats = [];
        for (let key in response.data) {
          cats.push(response.data[key]);
        }
        this.setState({ categories: cats });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const foodCategoryList = (
      <FoodCategoryList categories={this.state.categories} />
    );

    const foodList = <FoodList />;

    return (
      <React.Fragment>
        <Header />
        <div className="FoodGuide">
          {!this.props.selectedCategory ? foodCategoryList : foodList}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCategory: state.selectedCategory
  };
};

export default connect(mapStateToProps)(FoodGuide);
