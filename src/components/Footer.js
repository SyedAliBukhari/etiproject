import React from "react";
const Footer = () => {
  return (
    <div className="apply_loan overlay" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-7">
            <div
              className="loan_text wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <a href="tel:054-7731481">
                <h3 className="text-center">Call us today on 052-6317200</h3>
              </a>
              <a href="mailto:duonlineae@gmail.com">
                <h3 className="text-center">Or Email Duonlineae@gmail.com</h3>
              </a>
              <h5 className="font-white text-center mt-3">
                To GET SUPER FAST DU HOME INTERNET
              </h5>
              <center>
                {/* <img
                  src="img/rt.png"
                  alt="etisalat logo"
                  className="mt-3"
                  style={{
                    width: "150px",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                /> */}
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
