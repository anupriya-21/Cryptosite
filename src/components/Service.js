import React from "react";

const Service = () => {
  return (
    <>
      <div class="container-xxl bg-light py-5 my-5">
        <div class="container py-5">
          <div
            class="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxwidth: "500px" }}
          >
            <h1 class="display-6">Services</h1>
            <p class="text-primary fs-5 mb-5">
              Buy, Sell And Exchange Cryptocurrency
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-white p-5">
                <img class="img-fluid mb-4" src="img/icon-7.png" alt="" />
                <h5 class="mb-3">Currency Wallet</h5>
                <p>
                  Cryptocurrency wallets store users' public and private keys,
                  while providing an easy-to-use interface to manage crypto
                  balances. They also support cryptocurrency transfers through
                  the blockchain.
                </p>
                <a href="https://crypto.com/university/">
                  Read More <i class="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-white p-5">
                <img class="img-fluid mb-4" src="img/icon-3.png" alt="" />
                <h5 class="mb-3">Currency Transaction</h5>
                <p>
                  a cryptocurrency transaction is a transfer of information made
                  between blockchain addresses. These transfers have to be
                  signed with a private key that corresponds to its address.
                </p>
                <a href="https://www.bitstamp.net/learn/crypto-101/how-do-cryptocurrency-transactions-work/">
                  Read More <i class="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-white p-5">
                <img class="img-fluid mb-4" src="img/icon-9.png" alt="" />
                <h5 class="mb-3">Bitcoin Investment</h5>
                <p>
                  AInvesting in Bitcoin and other cryptocurrencies is a great
                  way to diversify your investments, but it also involves high
                  risk.
                </p>
                <a href="https://academy.binance.com/en/articles/">
                  Read More <i class="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-white p-5">
                <img class="img-fluid mb-4" src="img/icon-5.png" alt="" />
                <h5 class="mb-3">Currency Exchange</h5>
                <p>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
                <a href="">
                  Read More <i class="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-white p-5">
                <img class="img-fluid mb-4" src="img/icon-2.png" alt="" />
                <h5 class="mb-3">Bitcoin Escrow</h5>
                <p>
                  A cryptocurrency exchange, or a digital currency exchange
                  (DCE), is a business that allows customers to trade
                  cryptocurrencies or digital currencies for other assets, such
                  as conventional fiat money
                </p>
                <a href="https://en.wikipedia.org/wiki/Cryptocurrency_exchange">
                  Read More <i class="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-white p-5">
                <img class="img-fluid mb-4" src="img/icon-8.png" alt="" />
                <h5 class="mb-3">Token Sale</h5>
                <p>
                  A Token Sale — also commonly referred to as a initial coin
                  offering (ICO)* — is a limited period of sale of a predefined
                  number of crypto tokens to the public, typically in exchange
                  for major crypto-currencies (mainly Bitcoin and Ether)
                </p>
                <a href="https://coinmarketcap.com/alexandria/glossary/token-sale">
                  Read More <i class="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
