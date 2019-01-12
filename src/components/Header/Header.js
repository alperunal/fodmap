import React from "react";
import { Icon } from "antd";
import Logo from "../../assets/images/logo.png";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import "./Header.css";

const iconStyle = {
  fontSize: "24px",
  margin: "2px 15px"
};

const header = props => {
  const handleBack = () => {
    let type = actionTypes.DESELECT_CATEGORY;
    if (props.selectedFood) {
      type = actionTypes.DESELECT_FOOD;
    }
    props.onBack(type);
  };

  let backIcon = null;
  if (props.selectedCategory || props.selectedFood) {
    backIcon = <Icon style={iconStyle} onClick={handleBack} type="left" />;
  }

  return (
    <header>
      <div className="Icon">{backIcon}</div>
      <div>
        <img src={Logo} className="Logo" alt="Fodmap" />
      </div>
      <div className="Icon">
        <Icon style={iconStyle} type="bars" />
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    selectedCategory: state.selectedCategory,
    selectedFood: state.selectedFood
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBack: type => {
      return dispatch({
        type
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header);
