import React from "react";
// import videos
import video from "../images/video1.MP4";
import video1 from "../images/video3.MP4";
import video2 from "../images/video2.MP4";
import video3 from "../images/video4.MP4";

import "../pages/style/info.css";

function cards(props) {
  return (
    <div>
      {/* section1 */}
      <section id="about-me">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="about-me-box">
                <div className="row">
                  <div className="col-ms-6 col-xs-12">
                    <div className="text-center">
                      <h1>About Me</h1>
                    </div>
                    <p>
                      Welcome to our Garage! My name is ADIL SAEED,and I'm the
                      head mechanic here.I have been working and providing
                      different services in automotive industry since 2002.I
                      have work experience of 21 Years and can do all types of
                      repairs and maintenance.At our Garage, we offer a range of
                      services to keep your vehicle running smoothly, from oil
                      changes and tire rotations to more complex engine repairs
                      .We specialize in working with both domestic and foreign
                      vehicles and have the latest diagnostic tools and
                      equipment to ensure accurate ans efficient repairs.{" "}
                    </p>
                  </div>
                  <div className="col-md-12 col-xs-12">
                    <video
                      className="max-width-xs"
                      autoPlay
                      loop
                      muted
                      src={video}
                    ></video>
                    <video
                      className="max-width-xs"
                      autoPlay
                      loop
                      muted
                      src={video1}
                    ></video>
                    <video
                      className="max-width-xs"
                      autoPlay
                      loop
                      muted
                      src={video3}
                    ></video>
                    <video
                      className="max-width-xs"
                      autoPlay
                      loop
                      muted
                      src={video2}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 2 */}
      </section>
      <section id="about-me">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="about-me-box">
                <div className="row">
                  <div className="col-ms-6 col-xs-12">
                    <p>
                      Our approach to customer service is simple: we treat every
                      vehicle as if it were our own and strive to provide
                      high-quality work and excellent communication throughout
                      the repair process.We know that car troubles can be
                      stressful , so we d our best to make the experience as
                      hassle-free as possible.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default cards;
