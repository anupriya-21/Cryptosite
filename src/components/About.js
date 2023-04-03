import React from "react";

const About = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid" src="img/about.png" alt="" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6">About Us</h1>
                <p className="text-primary fs-5 mb-4">
                  The Most Trusted Cryptocurrency Platform
                </p>
                <p>
                Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.
                </p>
                <p className="mb-4">
                There are thousands of cryptocurrencies. Some of the best known include:


                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Bitcoin:</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Ripple:</span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Litecoin:</span>
                </div>
                <a className="btn btn-primary py-3 px-4" href="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;