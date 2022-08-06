import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    let height = this.props.height;

    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: `${height}`, overflow: "hidden" }}
      >
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
