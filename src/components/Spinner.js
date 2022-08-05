import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    let height = this.props.height;
    console.log(height);
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        // className="text-center"
        // style={{ height: "100vh" }}
        style={{ height: `${height}`, overflow: "hidden" }}
      >
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
