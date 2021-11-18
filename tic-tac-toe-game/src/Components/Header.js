import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Header extends Component {
  componentDidMount() {
    $(".game-type a").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
    });
  }

  render() {
    return (
      <div className="header">
        <h1 style={{ fontSize: "3rem" }}>Tic Tac Toe</h1>
        <ul className="game-type">
          <Link to="/" className="active">
            <li>2 players</li>
          </Link>
          <Link to="/vs-computer">
            <li>VS Computer</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
