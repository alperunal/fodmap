import React, { Component } from "react";
import "./FoodGuide.css";
import FoodCategoryList from "../../components/FoodCategoryList/FoodCategoryList";
import FoodList from "../../components/FoodList/FoodList";
import axios from "axios";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";

class FoodGuide extends Component {
  state = {
    categories: [],
    foods: []
  };

  componentDidMount() {
    axios
      .get("/categories.json")
      .then(response => {
        const categories = [];
        for (let key in response.data) {
          categories.push(response.data[key]);
        }
        this.setState({ categories });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/foods.json")
      .then(response => {
        const foods = [];
        for (let categoryKey in response.data) {
          const categoryData = [];
          for (let foodKey in response.data[categoryKey]) {
            categoryData.push(response.data[categoryKey][foodKey]);
          }
          foods.push(categoryData);
        }
        this.setState({ foods });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const foodCategoryList = (
      <FoodCategoryList categories={this.state.categories} />
    );
    const foodList = <FoodList foods={this.state.foods} />;

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
