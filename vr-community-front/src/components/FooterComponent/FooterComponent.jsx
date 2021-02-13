import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="container-fluid bg-light text-center border-top">
        <p className="pt-2 mb-2">
          Copyright 2019. irostub All pictures cannot be copied without permission
        </p>
        <a href="#!">Back to top</a>
      </footer>
    );
  }
}

export default FooterComponent;
