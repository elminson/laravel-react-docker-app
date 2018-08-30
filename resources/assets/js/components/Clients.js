import ReactDOM from 'react-dom'
import React from "react";

export default class Clients extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center section_title section_title_dark">
              <h2>
                our clients
                <span>z</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vestibulum, olor sit amet, consectetur adipiscing eli
                quam tincidunt venen atis ultrices, est libero olor sit amet,
                consectetur adipiscing eli mattis ante. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Phasellus vestibulum, quam
                tincidunt venenatis ultrices, est libero mattis quam tincidun
                ante, ac consectetur diam neque eget quam.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Amet, consectetur adipiscing elit. Phasellus vestibulum, olor
                sit amet, consectetur adipiscing eli quam tincidunt venen atis
                ultrices, quam tincidunest libero olor sit amet, consectetur
                adipiscing eli mattis ante. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Phasellus vestibulum, quam
                tincidunt venenatis ultrices, est libero mattis quam tincidun
                ante, ac cquam tincidunonsectetur diam neque eget quam.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {}
              <div className="clients_slider_container">
                <div className="owl-carousel owl-theme clients_slider">
                  {}
                  <div className="owl-item clients_item">
                    <img src="images/client_1.png" alt="png" />
                  </div>
                  {}
                  <div className="owl-item clients_item">
                    <img src="images/client_2.png" alt="png" />
                  </div>
                  {}
                  <div className="owl-item clients_item">
                    <img src="images/client_3.png" alt="png" />
                  </div>
                  {}
                  <div className="owl-item clients_item">
                    <img src="images/client_4.png" alt="png" />
                  </div>
                  {}
                  <div className="owl-item clients_item">
                    <img src="images/client_5.png" alt="png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('clients')) {
    ReactDOM.render(<Clients />, document.getElementById('clients'));
}