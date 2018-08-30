import ReactDOM from 'react-dom'
import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact prlx_parent">
        {}
        <div
          className="contact_background prlx"
          style={{
            backgroundImage: "url(images/contact_background.jpg)"
          }}
        />
        <div className="contact_shapes">
          <img src="images/contact_shape.png" alt="png" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center section_title contact_title">
              <h2>
                let's work together
                <span>z</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center contact_text">
              <p>
                Dolor sit amet, consectetur adipiscing elit. Phasellus
                vestibulum, quam tincidunt venen atis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Phasellus vestibulum, quam
                tincidunt venenatis ultrices, est libero mattis ante, ac
                consectetur diam neque eget quam.
              </p>
              <div className="button contact_button">
                <a
                  href="#"
                  className="d-flex flex-row align-items-center justify-content-center"
                >
                  contact
                  <img src="images/arrow_right.svg" alt="svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('contact')) {
    ReactDOM.render(<Contact />, document.getElementById('contact'));
}


