import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="ui borderless pointing menu">
        <div className="ui container">
          <Link to="/" className="header item">
            {/* <img
              className="logo"
              src={require("../assets/images/android-chrome-192x192.png")}
            /> */}
            macro's dashboard
          </Link>
          <Link to="/create" className="item">
            create
          </Link>
        </div>
      </div>
    );
  }
}
