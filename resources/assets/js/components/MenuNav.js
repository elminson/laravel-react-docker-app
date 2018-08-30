import React from "react";

class MenuNav extends React.Component {
  render() {
    return (
      <nav className="main_nav justify-self-end">
        <ul className="nav_items">
          <li className="active">
            <a href="#">
              <span>home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>services</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>elements</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>blog</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>contact</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MenuNav;
