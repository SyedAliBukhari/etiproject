import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid ">
            <div className="header_bottom_border">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <a href="/">
                      <img
                        src="img/rt.png"
                        alt="etisalat logo"
                        style={{
                          width: "15%",
                          height: "auto",
                          borderRadius: "10px",
                        }}
                      />
                      {/* <h2
                        style={{
                          background: "#0C99CA",
                          color: "white",
                          display: "inline",
                          padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                          border: "none",
                          borderRadius: "",
                          letterSpacing: "0.3rem",
                        }}
                      >
                        <span style={{ color: "" }}>E</span>tisalat |
                        <span style={{ color: "black" }}>اتصالات</span>
                      </h2> */}
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="#whychooseetisalat">Why choose etisalat?</a>
                        </li>

                        <li>
                          <a href="#packages">Wifi & TV Packages</a>
                        </li>

                        <li>
                          <a href="#contact">Contact us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="Appointment">
                    <div className="phone_num d-none d-xl-block">
                      <a href="tel:052-6317200">
                        {" "}
                        <i className="fa fa-phone"></i> 052-6317200
                      </a>
                    </div>
                    <div className="phone_num d-none d-xl-block">
                      <a href="mailto:duonlineae@gmail.com">
                        {" "}
                        <i className="fa fa-envelope"></i> Duonlineae@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
