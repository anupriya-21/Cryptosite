import React from "react";

const Faq = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxwidth: "500px"}}
          >
            <h1 className="display-6">FAQs</h1>
            <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="accordionExample">
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is cryptocurrency in general?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How safe is cryptocurrency?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Despite its decentralized nature, transactions on most cryptocurrency networks are very secure — as long as crypto users take precautions.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How are cryptos different from blockchain?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Cryptocurrencies are much different from blockchain. Decentralized digital currencies like Bitcoin and Ethereum run on blockchain technology. Blockchains are basically designed to use cryptos to write transactions on the network.  
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Are cryptocurrencies taxable?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Cryptocurrency taxes depend on how each government envisions the function of the crypto market in the country’s financial economy. Some cryptos are taxable, like in the US,
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What are the most popular cryptocurrencies?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Bitcoin is the most widely used and trusted cryptocurrency in the market. Along with it Ethereum, Solana, Shiba Inu, Dogecoin, and Cardano, are some of the other popular cryptos. 
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                       Is crypto a legal tender in India?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Currently, cryptocurrency is not a legal tender in India. The finance minister as well as other officials in the finance ministry has clarified that cryptocurrency will not be considered as legal tender in India.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Are cryptocurrencies energy inefficient?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Yes, some cryptocurrencies such as bitcoins requires a high amount of energy. However, advancements in technology are beginning to address this concern.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      Is cryptocurrency the future of money?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    With the evolution of technology, the definition of money is constantly changing. So, it should not come as a surprise that cryptocurrencies might be considered money in the future.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;