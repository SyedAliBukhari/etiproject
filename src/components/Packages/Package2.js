import React from "react";
const Package2 = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="single_service wow fadeInLeft shadow"
        data-wow-duration="1.2s"
        data-wow-delay=".5s"
      >
        <div className="info text-center">
          <h1
            style={{ color: "white", letterSpacing: "0.5rem" }}
            className="pt-3"
          >
            STARTER
          </h1>
          <img
            src="img/price-img2.png"
            alt="first img"
            style={{ width: "40%", height: "auto" }}
          />
          <div className="row mt-3">
            <div className="col-md-6">
              <h4>Data Unlimited</h4>

              <h3>250 Mbps</h3>
              <span style={{ fontSize: "18px" }}>Download Speeds</span>
            </div>
            <div className="col-md-6" style={{ borderLeft: "1px solid grey" }}>
              <h4>HD TV</h4>

              <h3>200+</h3>
              <span style={{ fontSize: "18px" }}>Chanels</span>
            </div>
          </div>
        </div>
        <div className="service_content">
          <ul>
            <li> 1 MONTH FREE IN SELECTED AREA </li>
            <li> FREE CALLS & FREE ROUTER</li>
            <li> FREE INSTALLATION</li>
            <span
              style={{
                fontSize: "2.0rem",
                paddingLeft: "15px",
                color: "white",
                marginTop: "10px",
              }}
            >
              AED 389 /Mo
            </span>
          </ul>

          <div className="apply_btn">
            <a href="#contact" className="boxed-btn3 btn-block">
              Contact Us
            </a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Package2;
