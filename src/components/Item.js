import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default class Item extends Component {
  render() {
    const {} = this.props;

    return (
      <div className="c-item">
        <a className="c-item__image">
          <img src="https://images-assets.nasa.gov/image/201105240004HQ/201105240004HQ~thumb.jpg" />
        </a>
        <div className="c-item__info">
          <span>NASA/Bill Ingalls</span>
          <span>12 Feb, 2018</span>
        </div>
        <h3 className="c-item__title">Apollo 11 Overview</h3>
        <p className="c-item__content">
          The total phase of the July 27 lunar eclipse lasted for an impressive
          103 minutes. That makes it the longest total lunar eclipse of the…
        </p>
        <div className="c-item__action">
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    );
  }
}

Item.propTypes = {};

Item.defaultProps = {};
