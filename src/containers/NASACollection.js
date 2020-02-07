import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import Item from "../components/Item";

class NASACollection extends Component {
  render() {
    return (
      <div className="container">
        <div className="collection-container">
          <div className="collection-header">
            <h1 className="c-title">NASA Collection</h1>
            <Button
              text="Add new item"
              btnClass="c-button c-button_rectangle c-button_secondary"
              iconName="plus"
            />
          </div>
          <div className="collection-body">
            <Item text="" />
            <Item text="" />
            <Item text="" />
          </div>
        </div>
      </div>
    );
  }
}

export default NASACollection;
