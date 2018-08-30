import ReactDOM from 'react-dom'
import React from "react";

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="fs_menu_nav">
        <ul className="fs_menu_list">
          <li>
            <a href="#">
              <span>
                <span>H</span>
                Home
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span>S</span>
                Services
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span>E</span>
                Elements
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span>B</span>
                Blog
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span>C</span>
                Contact
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}