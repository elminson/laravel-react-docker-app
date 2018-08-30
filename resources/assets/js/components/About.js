import ReactDOM from 'react-dom'
import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="about prlx_parent">
        {}
        <div
          className="about_background prlx"
          style={{
            backgroundImage: "url(images/about_background.jpg)"
          }}
        />
        <div className="about_shapes">
          <img src="images/about_shapes.png" alt="png" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center section_title">
              <h2>
                about our project
                <span>z</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vestibulum, quam tincidunt venenatis ultrices, est
                  libero mattis ante, ac consectetur diam neque eget quam. Etiam
                  feugiat augue et varius blandit. Praesent mattis, eros a
                  sodales commodo, justo ipsum rutrum mauris, sit amet egestas
                  metus.
                </p>
                <img src="images/signiture.png" alt="png" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skills_container">
                <ul className="progress_bar_container col_12 clearfix">
                  <li className="pb_item">
                    <div
                      id="skill_1_pbar"
                      className="skill_bars"
                      data-perc="0.85"
                      data-name="skill_1_pbar"
                    />
                    <h5>management</h5>
                  </li>
                  <li className="pb_item">
                    <div
                      id="skill_2_pbar"
                      className="skill_bars"
                      data-perc={1}
                      data-name="skill_2_pbar"
                    />
                    <h5>design</h5>
                  </li>
                  <li className="pb_item">
                    <div
                      id="skill_3_pbar"
                      className="skill_bars"
                      data-perc="0.75"
                      data-name="skill_3_pbar"
                    />
                    <h5>projects</h5>
                  </li>
                  <li className="pb_item">
                    <div
                      id="skill_4_pbar"
                      className="skill_bars"
                      data-perc="0.95"
                      data-name="skill_4_pbar"
                    />
                    <h5>inspiration</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}