import ReactDOM from 'react-dom'
import React from "react";

export default class Services extends React.Component {
  render() {
    return (
      <div className="services prlx_parent">
        {}
        <div
          className="services_background prlx"
          style={{
            backgroundImage: "url(images/services_background.jpg)"
          }}
        />
        <div className="services_shapes">
          <img src="images/services_shapes.png" alt="png" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
                <img src="images/icon_1.svg" alt="svg" />
              </div>
              <h3>modern design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vestibulum.
              </p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
                <img src="images/icon_2.svg" alt="svg" />
              </div>
              <h3>easy to use</h3>
              <p>
                Dolor sit amet, consectetur adipiscing elit. Phasellus
                vestibulum, quam tincidunt.
              </p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
                <img src="images/icon_3.svg" alt="svg" />
              </div>
              <h3>well documented</h3>
              <p>
                Adipiscing elit. Phasellus vestibulum, quam tincidunt venen atis
                ultrices.
              </p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
                <img src="images/icon_4.svg" alt="svg" />
              </div>
              <h3>smart structure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vestibulum.
              </p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
                <img src="images/icon_5.svg" alt="svg" />
              </div>
              <h3>elements</h3>
              <p>
                Dolor sit amet, consectetur adipiscing elit. Phasellus
                vestibulum, quam tincidunt.
              </p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
                <img src="images/icon_6.svg" alt="svg" />
              </div>
              <h3>bold colors</h3>
              <p>
                Adipiscing elit. Phasellus vestibulum, quam tincidunt venen atis
                ultrices.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <div className="button services_button">
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
    );
  }
}

if (document.getElementById('services')) {
    ReactDOM.render(<Services />, document.getElementById('services'));
}
