import React, { Component } from "react";
import "./spinner.css";
export class spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner mx-auto">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default spinner;
