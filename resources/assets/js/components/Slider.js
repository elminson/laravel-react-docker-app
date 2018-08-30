import ReactDOM from 'react-dom'
import React from "react";

export default class Slider extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="hero_slider_container slider_prlx">
          <div className="owl-carousel owl-theme hero_slider">
            {}
            <div className="owl-item main_slider_item">
              <div
                className="main_slider_item_bg"
                style={{
                  backgroundImage: "url(images/main_slider_1.jpg)"
                }}
              />
              <div className="main_slider_shapes">
                <img
                  src="images/main_slider_shapes.png"
                  alt="png"
                  style={{
                    width: "100% !important"
                  }}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col slider_content_col">
                    <div className="main_slider_content">
                      <h1>Do you need</h1>
                      <h1>
                        a <span>modern</span> website?
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur leo est, feugiat nec elementum id, suscipit id
                        nulla.{" "}
                      </p>
                      <div className="button discover_button">
                        <a
                          href="#"
                          className="d-flex flex-row align-items-center justify-content-center"
                        >
                          discover
                          <img src="images/arrow_right.svg" alt="svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="owl-item main_slider_item">
              <div
                className="main_slider_item_bg"
                style={{
                  backgroundImage: "url(images/main_slider_1.jpg)"
                }}
              />
              <div className="main_slider_shapes">
                <img
                  src="images/main_slider_shapes.png"
                  alt="png"
                  style={{
                    width: "100% !important"
                  }}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col slider_content_col">
                    <div className="main_slider_content">
                      <h1>Do you need</h1>
                      <h1>
                        a <span>modern</span> website?
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur leo est, feugiat nec elementum id, suscipit id
                        nulla.{" "}
                      </p>
                      <div className="button discover_button">
                        <a
                          href="#"
                          className="d-flex flex-row align-items-center justify-content-center"
                        >
                          discover
                          <img src="images/arrow_right.svg" alt="svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="owl-item main_slider_item">
              <div
                className="main_slider_item_bg"
                style={{
                  backgroundImage: "url(images/main_slider_1.jpg)"
                }}
              />
              <div className="main_slider_shapes">
                <img
                  src="images/main_slider_shapes.png"
                  alt="png"
                  style={{
                    width: "100% !important"
                  }}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col slider_content_col">
                    <div className="main_slider_content">
                      <h1>Do you need</h1>
                      <h1>
                        a <span>modern</span> website?
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur leo est, feugiat nec elementum id, suscipit id
                        nulla.{" "}
                      </p>
                      <div className="button discover_button">
                        <a
                          href="#"
                          className="d-flex flex-row align-items-center justify-content-center"
                        >
                          discover
                          <img src="images/arrow_right.svg" alt="svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="main_slider_dots">
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul
                    id="main_slider_custom_dots"
                    className="main_slider_custom_dots"
                  >
                    <li className="main_slider_custom_dot active">01.</li>
                    <li className="main_slider_custom_dot">02.</li>
                    <li className="main_slider_custom_dot">03.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="main_slider_nav_left main_slider_nav">
            <i className="fas fa-chevron-left trans_300" />
          </div>
          <div className="main_slider_nav_right main_slider_nav">
            <i className="fas fa-chevron-right trans_300" />
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('slider')) {
    ReactDOM.render(<Slider />, document.getElementById('slider'));
}

