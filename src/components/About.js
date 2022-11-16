import React from "react";
const About = () => {
  return (
    <div className="about_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div
              className="about_img wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <img src="img/etisalat_about.png" alt="dulogo2" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about_info pl-68 my-5">
              <div
                className="section_title wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-delay=".3s"
              >
                <h3>Prices starting from 199 AED/month*</h3>
                <h4>Want To Go Faster? You Got It.</h4>
              </div>
              <div className="about_list">
                <span>
                  Get 15% Monthly Discount & Free Installation, We use Advance
                  Wi-Fi router for more coverage.
                </span>

                <ul>
                  <li
                    className="wow fadeInRight mt-3"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    Get your du Home Internet Connection within same day
                  </li>
                  <li
                    className="wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".6s"
                  >
                    Enjoy free amazon prime for 1 year
                    <span
                      style={{
                        marginLeft: "0.3rem",
                        fontSize: "12px",
                        padding: "0px 10px 2px 10px",
                        borderRadius: "20px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="package-highlight"
                    >
                      Limited Time Offer
                    </span>
                  </li>
                  <li
                    className="wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".7s"
                  >
                    Free Calls Landline to Landlines Within UAE
                  </li>
                  <li
                    className="wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".7s"
                  >
                    Order today & save on deposit
                    <span
                      style={{
                        marginLeft: "0.3rem",
                        fontSize: "12px",
                        padding: "0px 10px 2px 10px",
                        borderRadius: "20px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="package-highlight"
                    >
                      Online exclusive
                    </span>
                  </li>

                  <li
                    className="wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".7s"
                  >
                    Fast Processing
                  </li>
                </ul>
              </div>
              <div
                className="about_btn wow fadeInRight"
                data-wow-duration="1.3s"
                data-wow-delay=".5s"
              >
                <a className="boxed-btn3" href="tel:054-7731481">
                  Call US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
