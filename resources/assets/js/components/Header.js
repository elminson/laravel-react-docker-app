import ReactDOM from 'react-dom'
import React from "react";
import Logo from "./Logo";
import MenuNav from "./MenuNav";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header d-flex flex-row justify-content-end align-items-center">
        {}
        <Logo />
        {}
        <MenuNav />
        {}
        <div className="hamburger_container">
          <span className="hamburger_text">Menu</span>
          <span className="hamburger_icon" />
        </div>
      </header>
    );
  }
}


if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
