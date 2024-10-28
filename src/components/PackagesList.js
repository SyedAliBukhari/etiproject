import React, { useState } from "react";
import Package1 from "./Packages/Package1";
import { AllPackages, homeLandline, homeWireless } from "../../src/packages";

const PackagesList = () => {
  const [packagesData] = useState(AllPackages);

  return (
    <div
      className="service_area"
      id="packages"
      style={{ background: "#F5FBFF", marginTop: "-80px" }}
    >
      <div className="container-fluid">
        {/* first */}
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
                du Home High Speed Plans
              </h3>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{ fontSize: "1.5rem", letterSpacing: "0.3rem" }}
              >
                Enjoy Free Calls & Discount
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {packagesData?.map((data, i) => (
            <Package1 data={data} key={i} />
          ))}
        </div>
        {/* first end */}

        {/* second */}
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
                du Home Internet & Landline
              </h3>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{ fontSize: "1.5rem", letterSpacing: "0.3rem" }}
              >
                Enjoy discount or 2 Months free
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {homeLandline?.map((data, i) => (
            <Package1
              data={data}
              key={i}
              decreaseHeight={true}
              count={i}
              LandlineImage={true}
            />
          ))}
        </div>
        {/* second end */}

        {/* Third */}
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
                Enjoy Internet Instantly - du Home Wireless
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
          {homeWireless?.map((data, i) => (
            <Package1
              data={data}
              key={i}
              decreaseHeight={true}
              count={i}
              WirelessImage={true}
            />
          ))}
        </div>
        {/* Third end */}
      </div>
    </div>
  );
};

export default PackagesList;
