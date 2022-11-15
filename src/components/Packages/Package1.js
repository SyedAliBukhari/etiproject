import React from "react";

const Package1 = ({
  data,
  decreaseHeight,
  count,
  LandlineImage,
  WirelessImage,
}) => {
  const {
    oldValue,
    newValue,
    highLight,
    packageName,
    packageSummary,
    points,
    bottomHighLight,
  } = data;

  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div
          className="single_service wow fadeInLeft shadow"
          data-wow-duration="1.2s"
          data-wow-delay=".5s"
        >
          <div className="info text-center">
            <h4
              style={{
                color: "white",
                letterSpacing: "0.1rem",
                fontWeight: "bold",
              }}
              className="pt-4"
            >
              AED{" "}
              <span className="font-black old-value d-inline-block pr-2">
                {" "}
                {oldValue}{" "}
              </span>
              {newValue}* /month + 5%VAT
            </h4>

            {highLight?.map((data, i) => (
              <h6 className="package-highlight text-center" key={i}>
                {data}
              </h6>
            ))}

            <div className="d-flex flex-column align-items-center ml-3">
              <h4 className="mt-2">You get</h4>
              <h2 className="font-white">DU Home {packageName}</h2>
            </div>

            {packageSummary.map((data, i) => (
              <div className="d-flex  align-items-center ml-3" key={i}>
                <h4 className="mr-2  font-black">{data.preValue}</h4>
                <h6 className="font-white"> {data.postValue}</h6>
              </div>
            ))}

            {/* <span style={{ fontSize: "18px" }}>Download Speeds</span> */}
          </div>

          {/* service-content start */}
          <div className="service_content">
            <ul>
              {points?.map((point, i) => (
                <>
                  <li key={i} style={{ fontSize: "13px" }}>
                    {point}{" "}
                  </li>
                  {decreaseHeight && <br />}
                </>
              ))}
            </ul>

            {bottomHighLight?.map((data, i) => (
              <h6 className="package-highlight text-center" key={i}>
                {data}
              </h6>
            ))}
            {decreaseHeight && <br />}
            <div className="apply_btn">
              <a href="#contact" className="boxed-btn3 btn-block">
                Contact Us
              </a>
            </div>
          </div>

          {/* service-content end */}
        </div>
      </div>

      {decreaseHeight && count === 1 ? (
        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
          <img
            alt="Rendering Error"
            src={
              LandlineImage
                ? "img/221.png"
                : WirelessImage
                ? "img/wireless.png"
                : "img/221.png"
            }
            style={{ width: "90%", height: "auto", borderRadius: "20px" }}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Package1;
