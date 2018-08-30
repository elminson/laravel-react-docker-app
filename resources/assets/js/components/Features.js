import ReactDOM from 'react-dom'
import React from "react";

export default class Features extends React.Component {
  render() {
    return (
      <div className="features">
        <div className="container">
          <div className="row align-items-end">
            {}
            <div className="col-lg-4 features_col">
              <div className="features_item d-flex flex-column align-items-center justify-content-end text-center">
                {}
                <div className="icon_container d-flex flex-column justify-content-end">
                  <img src="images/icon_1.svg" alt ="icon"/>
                </div>
                <h3>modern design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vestibulum, quam tincidunt venen atis ultrices.
                </p>
              </div>
            </div>
            {}
            <div className="col-lg-4 features_col">
              <div className="features_item d-flex flex-column align-items-center justify-content-center text-center">
                {}
                <div className="icon_container d-flex flex-column justify-content-end">
                  <img src="images/icon_2.svg" alt="icon" />
                </div>
                <h3>easy to use</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vestibulum, quam tincidunt venen atis ultrices.
                </p>
              </div>
            </div>
            {}
            <div className="col-lg-4 features_col">
              <div className="features_item d-flex flex-column align-items-center justify-content-center text-center">
                {}
                <div className="icon_container d-flex flex-column justify-content-end">
                  <img src="images/icon_3.svg" alt="icon" />
                  </div>
                <h3>well documented</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vestibulum, quam tincidunt venen atis ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('features')) {
    ReactDOM.render(<Features />, document.getElementById('features'));
}

