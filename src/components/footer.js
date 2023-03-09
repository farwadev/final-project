import React from "react";
// import img gif
import img from "../images/logo1.GIF";


function footer(props) {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fa fa-map-marker"></i>
                  {/* location */}
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>Ras AL Khor Industrial Area -2 ,Dubai ,UAE</span>
                  </div>
                </div>
              </div>
              {/* number */}
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fa fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+971 55 567 5375</span>
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fa fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>adilsaeed.hhh@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* logo gif */}
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={img}></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ms-auto">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Adil's Auto Service Center</h3>
                  </div>
                  {/* text */}
                  <div className="footer-text">
                    <p>
                      All types of Jetski , Bikes services are privided in our
                      Garage. We also provide you home service.All mechanical
                      and electrical work of cars is also provided.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* social icons */}
              <div className="col-xl-4 col-lg-4 col-md-6 mx-auto">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Follow us</h3>
                  </div>
                  <div className="footer-social-icon">
                    <a href="#">
                      <i className="fa fa-facebook facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google google-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram instagram-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-whatsapp whatsapp-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
