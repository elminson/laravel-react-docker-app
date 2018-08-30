import ReactDOM from 'react-dom'
import React from "react";

export default class Testimonials extends React.Component {
  render() {
    return (
      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center section_title section_title_dark">
              <h2>
                testimonials
                <span>z</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="testimonials_container">
                <div className="testimonials_container_inner" />
                {}
                <div className="owl-carousel owl-theme testimonials_slider">
                  {}
                  <div className="owl-item testimonials_item d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="testimonials_content">
                      <div className="test_user_pic">
                        <img
                          src="images/test_user.jpg"
                          alt="https://unsplash.com/@michaeldam"
                        />
                      </div>
                      <div className="test_name">maria williams</div>
                      <div className="test_title">Company CEO</div>
                      <div className="test_quote">"</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus vestibulum, olor sit amet, consectetur
                        adipiscing eli quam tincidunt venen atis ultrices, est
                        libero olor sit amet, consectetur adipiscing eli mattis
                        ante.
                      </p>
                    </div>
                  </div>
                  {}
                  <div className="owl-item testimonials_item d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="testimonials_content">
                      <div className="test_user_pic">
                        <img
                          src="images/test_user.jpg"
                          alt="jpg"
                        />
                      </div>
                      <div className="test_name">maria williams</div>
                      <div className="test_title">Company CEO</div>
                      <div className="test_quote">"</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus vestibulum, olor sit amet, consectetur
                        adipiscing eli quam tincidunt venen atis ultrices, est
                        libero olor sit amet, consectetur adipiscing eli mattis
                        ante.
                      </p>
                    </div>
                  </div>
                  {}
                  <div className="owl-item testimonials_item d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="testimonials_content">
                      <div className="test_user_pic">
                        <img
                          src="images/test_user.jpg"
                          alt="https://unsplash.com/@michaeldam"
                        />
                      </div>
                      <div className="test_name">maria williams</div>
                      <div className="test_title">Company CEO</div>
                      <div className="test_quote">"</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus vestibulum, olor sit amet, consectetur
                        adipiscing eli quam tincidunt venen atis ultrices, est
                        libero olor sit amet, consectetur adipiscing eli mattis
                        ante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="test_slider_nav test_slider_nav_left d-flex flex-column justify-content-center align-items-center trans_200">
              <i className="fas fa-chevron-left trans_200" />
            </div>
            <div className="test_slider_nav test_slider_nav_right d-flex flex-column justify-content-center align-items-center trans_200">
              <i className="fas fa-chevron-right trans_200" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('testimonials')) {
    ReactDOM.render(<Testimonials />, document.getElementById('testimonials'));
}