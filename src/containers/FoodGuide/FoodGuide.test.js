import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FoodGuide } from "./FoodGuide";
import FoodCategoryList from "../../components/FoodCategoryList/FoodCategoryList";
import FoodList from "../../components/FoodList/FoodList";

configure({ adapter: new Adapter() });

describe("<FoodGuide />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FoodGuide />);
  });

  it("should render <FoodCategoryList /> when no category selected", () => {
    wrapper.setProps({ selectedCategory: null, selectedFood: null });
    expect(wrapper.find(FoodCategoryList)).toHaveLength(1);
  });

  it("should render <FoodList /> when a category selected", () => {
    wrapper.setProps({ selectedCategory: 1, selectedFood: null });
    expect(wrapper.find(FoodList)).toHaveLength(1);
  });
});
