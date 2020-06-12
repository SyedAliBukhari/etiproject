import React from "react";
const Slider = () => {
  return (
    <div className="slider_area" id="fillform">
      <div className="single_slider  d-flex align-items-center slider_bg_1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-md-6">
              <div className="slider_text">
                <h5
                  className="wow fadeInRight text-white"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  ELIFE BROADBAND INTERNET
                </h5>
                <h3
                  className="wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  GET SUPER FAST ELIFE HOME INTERNET
                </h3>
                <h4
                  className="wow fadeInRight text-white"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                  style={{ fontSize: "2.2rem" }}
                >
                  GET 50% DISCOUNT FOR 3 MONTHS
                </h4>
                <p
                  className="wow fadeInRight text-white"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                  style={{ fontWeight: "100", fontSize: "1.5rem" }}
                >
                  Surf, stream, chat and game with fast speeds. ☑ Up to 1Gbps
                  Ultra-fast with Etisalat Home Wifi Connection
                </p>
                <div
                  className="sldier_btn wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <a href="tel:054-7731481" className="boxed-btn3">
                    Call Us
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
