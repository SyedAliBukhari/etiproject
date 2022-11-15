import React from "react";
import {
  FaCloudUploadAlt,
  FaDownload,
  FaMobileAlt,
  FaRegCheckSquare,
} from "react-icons/fa";

const Chooseus = () => {
  return (
    <div className="works_area" id="whychooseetisalat">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center mb-90">
              <span
                className="wow lightSpeedIn"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              ></span>
              <h3
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                Why Choose Etisalat?
              </h3>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                INTERNET, TELEPHONE & TV PACKAGES WITH OUR BEST OFFERS
              </p>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                Get 2 Months Free In Some Selected Locations OR 3 Months 50%
                Discount In SPORTS Plan
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div
              className="single_works wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <center>
                <FaDownload
                  style={{
                    width: "25%",
                    height: "auto",
                    color: "#0C99CA",
                  }}
                ></FaDownload>

                <h3>Best Downloading speed</h3>
              </center>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="single_works wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <center>
                <FaCloudUploadAlt
                  style={{
                    width: "25%",
                    height: "auto",
                    color: "#0C99CA",
                  }}
                ></FaCloudUploadAlt>

                <h3>Free Routing</h3>
              </center>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="single_works wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <center>
                <FaMobileAlt
                  style={{
                    width: "25%",
                    height: "auto",
                    color: "#0C99CA",
                  }}
                ></FaMobileAlt>

                <h3>Free Calls</h3>
              </center>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="single_works wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <center>
                <FaRegCheckSquare
                  style={{
                    width: "25%",
                    height: "auto",
                    color: "#0C99CA",
                  }}
                ></FaRegCheckSquare>

                <h3>FREE INSTALLATION</h3>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
