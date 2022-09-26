import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../assets/forest_mint.png";
import Img2 from "../assets/ice_mint.png";
import Img3 from "../assets/nether_mint.png";
import Img4 from "../assets/sand_mint.png";
import Img5 from "../assets/volcano_mint.png";
import Btn1 from "../assets/6.png";
import Btn2 from "../assets/1.png";
import Btn3 from "../assets/4.png";
import Btn4 from "../assets/2.png";
import Btn5 from "../assets/5.png";
import Btn6 from "../assets/3.png";

export const Features = () => {
  const settings_img = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 603,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div id="features" className="text-center">
        <div className="container">
          <h3>
            Be part of our ever-growing community, create your own world within
            the Metaverse along side 3,000+ holders.
          </h3>
          <h5>See more below 👇</h5>
          <div className="row">
            <div className="features-plots">
              <div>32,000km² Area</div>
              <div>20,000 Plots</div>
              <div>3,000+ Holders</div>
            </div>
            <div className="features-buttons">
              <a
                className="register"
                href="https://unrealkingdoms.com/PlayerLogin/registration.php"
                target="_blank"
                rel="noreferrer"
              >
                Register now
              </a>
              <a
                className="login"
                href="https://unrealkingdoms.com/PlayerLogin/login.php"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
              <a href="#plots">See Plot options</a>
            </div>
          </div>
        </div>
        <div id="plots">
          <div className="container">
            <div className="section-title">
              <h2>Available Plots</h2>
            </div>
            <div className="row">
              <div className="images col-md-12">
                <Slider {...settings_img}>
                  <div>
                    <div className="plot-img1">
                      <img src={Img1} />
                      <div>
                        <div className="mint-btn mint-btn1">
                          <div className="NFT-type type1">
                            <img src={Btn1} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=0"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn2} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn2">
                          <div className="NFT-type type1">
                            <img src={Btn3} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn4} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn3">
                          <div className="NFT-type type1">
                            <img src={Btn5} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=10"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn6} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  <div className="plot-img1">
                      <img src={Img2} />
                      <div>
                        <div className="mint-btn mint-btn1">
                          <div className="NFT-type type1">
                            <img src={Btn1} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn2} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn2">
                          <div className="NFT-type type1">
                            <img src={Btn3} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=6"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn4} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn3">
                          <div className="NFT-type type1">
                            <img src={Btn5} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=11"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn6} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  <div className="plot-img1">
                      <img src={Img3} />
                      <div>
                        <div className="mint-btn mint-btn1">
                          <div className="NFT-type type1">
                            <img src={Btn1} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn2} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn2">
                          <div className="NFT-type type1">
                            <img src={Btn3} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=7"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn4} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn3">
                          <div className="NFT-type type1">
                            <img src={Btn5} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=12"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn6} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  <div className="plot-img1">
                      <img src={Img4} />
                      <div>
                        <div className="mint-btn mint-btn1">
                          <div className="NFT-type type1">
                            <img src={Btn1} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=3"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn2} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn2">
                          <div className="NFT-type type1">
                            <img src={Btn3} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=8"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn4} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn3">
                          <div className="NFT-type type1">
                            <img src={Btn5} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=13"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn6} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  <div className="plot-img1">
                      <img src={Img5} />
                      <div>
                        <div className="mint-btn mint-btn1">
                          <div className="NFT-type type1">
                            <img src={Btn1} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=4"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn2} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn2">
                          <div className="NFT-type type1">
                            <img src={Btn3} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=9"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn4} />
                          </a>
                        </div>
                        <div className="mint-btn mint-btn3">
                          <div className="NFT-type type1">
                            <img src={Btn5} />
                          </div>
                          <a
                            className="mint-now type1"
                            href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=14"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={Btn6} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
