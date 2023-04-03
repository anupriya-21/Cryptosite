import React from "react";

const Body = () => {
  return (
    <>
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">
                Make Better Life With Trusted CryptoCoin
              </h1>
              <p className="animated slideInDown">
              A cryptocurrency is not a type of currency that can be used in the real world. It can be used to perform transactions only in the digital world. So in order to buy/sell using a cryptocurrency, it has to be converted from a digital form to some existing currency that is used in the real world.
              </p>
              <a
                href="https://www.geeksforgeeks.org/what-is-a-cryptocurrency/"
                className="btn btn-primary py-3 px-4 animated slideInDown"
              >
                Explore More
              </a>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img
                className="img-fluid animated pulse infinite"
                style={{ animationDuration: "3s" }}
                src="img/hero-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
