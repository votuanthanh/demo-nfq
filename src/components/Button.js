import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    const { btnClass, iconName, text, ...attributes } = this.props;

    const iconElement = !iconName ? null : (
      <span className={`c-button__icon glyphicon glyphicon-${iconName}`} />
    );

    return (
      <button
        className={btnClass}
        disabled={this.props.disabled}
        {...attributes}
      >
        {iconElement}
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  btnClass: PropTypes.string,
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string
};

Button.defaultProps = {
  btnClass: "c-button c-button_default",
  disabled: false,
  text: "",
  iconName: ""
};
