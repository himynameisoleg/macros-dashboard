import React, { Component } from "react";

export default class CreateMacro extends Component {
  constructor(props) {
    super(props);

    this.props = {
      protein: "",
      carbs: "",
      fat: "",
      sugar: "",
      saturatedfat: "",
      calories: "",
      date: new Date()
    };
  }

  render() {
    return (
      <div className="row">
        <h1 className="ui header">Create Macro</h1>
      </div>
    );
  }
}
