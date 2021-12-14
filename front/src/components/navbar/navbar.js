import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.pageItem = {
      width: "5%",
      minWidth: "65px",
      alignItems: "center",
      color: "white",
      display: "flex",
      textAlign: "center",
      alignContent: "center"
    };
    this.pageName = {
      width: "100%",
      fontSize: "100%",
      cursor: "pointer",
      color: "white",
    };
  }

  scrollToTop = () => {
    $("html").animate({ scrollTop: 0 }, 500);
  };

  scrollToBot = () => {
    $("html").animate({ scrollTop: 10000 }, 500);
  };

  render() {
    return (
      <div
        style={{
          alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1",
          display: "flex",
        }}
      >
        <img
          src="unknown.png"
          style={{ height: "0%", width: "0%"}}
          alt="logo"
        ></img>
        <div
          onClick={this.scrollToTop}
          style={{
            paddingLeft: "2%",
            height: "100%",
            width: "100px",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Link className="nav-link" to={"/"}>
            <span
              style={{
                cursor: "pointer",
                color: "blue",
                fontSize: "100%",
              }}
              >
              Robby
            </span>
          </Link>
        </div>
        <div
          className="page-list"
          style={{
            paddingLeft: "10%",
            height: "100%",
            width: "100%",
            display: "flex",
          }}
        >
            <div style={this.pageItem}>
              <Link className="nav-link" to={"/about"}>
                <span style={this.pageName}>About</span>
              </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Navbar;