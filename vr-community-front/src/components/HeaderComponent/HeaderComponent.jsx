import React, { Component } from "react";
import "./HeaderComponentStyle.css";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="row d-flex flex-row justify-content-between align-items-center text-center border-bottom mr-0">
        <div className="col-4"></div>
        <div className="col-4 header-logo">VR COMMUNITY</div>
        <div className="col-4 d-flex justify-content-end">
          <button type="button" className="btn btn-outline-dark mx-2 my-4">
            Login
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 my-4">
            Modify
          </button>
          <button type="button" className="btn btn-outline-dark ml-2 mr-2 my-4">
            Logout
          </button>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
