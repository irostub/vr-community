import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NavigationComponentCss.css";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewNews = () => {
    this.props.history.push("/news");
  };
  viewVideo = () => {
    this.props.history.push("/video");
  };
  viewGameInfo = () => {
    this.props.history.push("/gameinfo");
  };
  viewCommunity = () => {
    this.props.history.push("/community");
  };
  viewProduct = () => {
    this.props.history.push("/product");
  };
  render() {
    return (
      <div className="border-bottom">
        <nav className="container">
          <div className="navbar">
            <button onClick={this.viewNews} className="nav-btn">
              News
            </button>
            <button onClick={this.viewVideo} className="nav-btn">
              Video
            </button>
            <button onClick={this.viewGameInfo} className="nav-btn">
              GameInfo
            </button>
            <button onClick={this.viewCommunity} className="nav-btn">
              Community
            </button>
            <button onClick={this.viewProduct} className="nav-btn">
              Product
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavigationComponent);
