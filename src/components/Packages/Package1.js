import React from "react";
const Package1 = () => {
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
            LITE
          </h1>
          <img
            src="img/price-img1.png"
            alt="first img"
            style={{ width: "40%", height: "auto" }}
          />
          <h4 className="mt-3">Data Unlimited</h4>

          <h3>12 Mbps</h3>
          <span style={{ fontSize: "18px" }}>Download Speeds</span>
        </div>
        <div className="service_content">
          <ul>
            <li> 2 MONTHS FREE SELECTED AREAS </li>
            <li> FREE CALLS & FREE ROUTER</li>

            <span
              style={{
                fontSize: "2.0rem",
                paddingLeft: "15px",
                color: "white",
                marginTop: "10px",
              }}
            >
              AED 299 /Mo
            </span>
          </ul>
          <br /> <br />
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

export default Package1;
