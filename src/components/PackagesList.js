import React, { Component } from "react";
import Package1 from "./Packages/Package1";
import Package2 from "./Packages/Package2";
import Package3 from "./Packages/Package3";
import Package4 from "./Packages/Package4";
import Package5 from "./Packages/Package5";
import Package6 from "./Packages/Package6";
class PackagesList extends Component {
  state = {};
  render() {
    return (
      <div
        className="service_area"
        id="packages"
        style={{ background: "#F5FBFF", marginTop: "-80px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center mb-90">
                <span
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                ></span>
                <h3
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  NEW INTERNET PACKAGES ARE HERE!
                </h3>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  style={{ fontSize: "1.5rem", letterSpacing: "0.3rem" }}
                >
                  Better-Than-Ever Offers
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Package1 />
            <Package2 />
            <Package3 />
            <Package4 />
            <Package5 />
            <Package6 />
          </div>
        </div>
      </div>
    );
  }
}

export default PackagesList;
