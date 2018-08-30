import ReactDOM from 'react-dom'
import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row footer_content d-flex flex-sm-row flex-column align-items-center">
            <div className="col-sm-6 cr text-sm-left text-center">
              <p>
                {}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {}
              </p>
            </div>
            <div className="col-sm-6 text-sm-right text-center">
              <div className="footer_social_container">
                <ul className="footer_social">
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest trans_300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f trans_300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter trans_300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble trans_300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance trans_300" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in trans_300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}