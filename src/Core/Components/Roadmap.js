import React from "react";
import { Row, Col, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    card: {
      marginTop: 123,
      backgroundColor: "#2C353D",
      width: "100%",
      borderRadius: 24,
      position: "relative",
      border: "1px solid #5a5a5a",
      padding: isMobile || isTablet ? "12px" : "0 68px",
      boxShadow: "rgba(187, 187, 187, 0.39) 0px 0px 16px",
      minHeight: isMobile || isTablet ? 0 : 1199,
    },
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "5.8vw" : "2.8vw",
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "center",
      letterSpacing: 0.68,
      marginTop: 80,
    },
    txtContent: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.93rem" : 12,
      color: "#BAC3CA",
      marginBottom: isMobile || isTablet ? 6 : 4,
      textAlign: isMobile || isTablet ? "center" : "left",
    },
    center: {
      display: "block",
      margin: "auto",
    },
  };

  return (
    <div style={styles.card} id="roadmap">
      <img
        src={require("../../assets/images/gradient1.png")}
        alt="gradient"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.6,
          display: isMobile || isTablet ? "none" : "block",
        }}
        width="560px"
      />

      <p style={styles.txtTitle}>Roadmap</p>
      {isMobile || isTablet ? (
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{
                height: "100%",
                width: "100%",
                padding: 9,
              }}
            >
              <img
                src={require("../../assets/images/roadmap/roadmap1.png")}
                alt="roadmap"
                width="68%"
                style={styles.center}
              />
              <p style={styles.txtContent}>{`R&D`}</p>
              <p
                style={styles.txtContent}
              >{`Building Trading Support Software`}</p>
              <p style={styles.txtContent}>
                Architecting platform for future platform
              </p>
              <p style={styles.txtContent}>
                {`Build Trading Copy Platform
            Integrated Tradfi Trading Copy with API & MT4 Support Preparation
            for future Cefi & Defi Copy Trading`}
              </p>
              <p style={styles.txtContent}>{`Recruit Team & Traders`}</p>
              <p style={styles.txtContent}>KALA Network Foundation</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                height: "100%",
                width: "100%",
                padding: 9,
              }}
              
            >
              <img
                src={require("../../assets/images/roadmap/roadmap2.png")}
                alt="roadmap"
                width="68%"
                style={styles.center}
              />
              <p style={styles.txtContent}>Website Launch</p>
              <p style={styles.txtContent}>IDO Landing Page</p>
              <p style={styles.txtContent}>Community Building</p>
              <p style={styles.txtContent}>Limited Promotion</p>
              <p style={styles.txtContent}>Whitepaper Creation</p>
              <p style={styles.txtContent}>
                Limited Strategy Providers Recruitment
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                height: "100%",
                width: "100%",
                padding: 9,
              }}
              
            >
              <img
                src={require("../../assets/images/roadmap/roadmap3.png")}
                alt="roadmap"
                width="68%"
                style={styles.center}
              />
              <p style={styles.txtContent}>Whitelist</p>
              <p style={styles.txtContent}>Airdrop</p>
              <p style={styles.txtContent}>Seed</p>
              <p style={styles.txtContent}>Private Sales</p>
              <p style={styles.txtContent}>{`Ordinary Promotion`}</p>
              <p style={styles.txtContent}>{`Integrate Crypto Exchanges`}</p>
              <p
                style={styles.txtContent}
              >{`Strategy Providers Recruitment`}</p>
              <p style={styles.txtContent}>{`Build Partnership`}</p>
              <p style={styles.txtContent}>Coinmarketcap</p>
              <p style={styles.txtContent}>IDO Public Sale</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                height: "100%",
                width: "100%",
                padding: 9,
              }}
              
            >
              <img
                src={require("../../assets/images/roadmap/roadmap4.png")}
                alt="roadmap"
                width="68%"
                style={styles.center}
              />
              <p style={styles.txtContent}>DEX/CEX Listing</p>
              <p style={styles.txtContent}>Mobile App Release</p>
              <p style={styles.txtContent}>Retroactive</p>
              <p style={styles.txtContent}>Strategy Providers Recruitment</p>
              <p style={styles.txtContent}>Aggressive Promotion</p>
              <p style={styles.txtContent}>Integrate Crypto Exchanges</p>
              <p style={styles.txtContent}>New features Deployment</p>
              <p style={styles.txtContent}>Affiliate Function</p>
              <p style={styles.txtContent}>Gamification Activities</p>
              <p style={styles.txtContent}>Traders Recruitment</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                height: "100%",
                width: "100%",
                padding: 9,
              }}
              
            >
              <img
                src={require("../../assets/images/roadmap/roadmap5.png")}
                alt="roadmap"
                width="68%"
                style={styles.center}
              />
              <p style={styles.txtContent}>More DEX/CEX Listing</p>
              <p style={styles.txtContent}>Launch Social Investment App</p>
              <p style={styles.txtContent}>Bigger Exchanges Partnership</p>
              <p style={styles.txtContent}>Trading Academy Establishment</p>
              <p style={styles.txtContent}>
                Loyal Strategy Providers Recruitment
              </p>
              <p style={styles.txtContent}>Massive Promotion</p>
              <p style={styles.txtContent}>Integrated Cross Chain Exchanges</p>
              <p style={styles.txtContent}>Strengthen Affiliates Strategies</p>
              <p style={styles.txtContent}>Traders Aggressive Recruitment</p>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div
          style={{
            display: isMobile || isTablet ? "block" : "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              height: isMobile || isTablet ? 1280 : 999,
              marginBottom: -360,
              width: isMobile || isTablet ? "100%" : "20%",
            }}
            className="roadmapItem"
          >
            <img
              src={require("../../assets/images/roadmap/roadmap1.png")}
              alt="roadmap"
              width={isMobile || isTablet ? "68%" : "100%"}
              style={styles.center}
            />
            <p style={styles.txtContent}>{`R&D`}</p>
            <p
              style={styles.txtContent}
            >{`Building Trading Support Software`}</p>
            <p style={styles.txtContent}>
              Architecting platform for future platform
            </p>
            <p style={styles.txtContent}>
              {`Build Trading Copy Platform
            Integrated Tradfi Trading Copy with API & MT4 Support Preparation
            for future Cefi & Defi Copy Trading`}
            </p>
            <p style={styles.txtContent}>{`Recruit Team & Traders`}</p>
            <p style={styles.txtContent}>KALA Network Foundation</p>
          </div>
          <div
            style={{
              height: isMobile || isTablet ? 1280 : 999,
              marginBottom: -270,
              width: isMobile || isTablet ? "100%" : "20%",
            }}
            className="roadmapItem"
          >
            <img
              src={require("../../assets/images/roadmap/roadmap2.png")}
              alt="roadmap"
              width={isMobile || isTablet ? "68%" : "100%"}
              style={styles.center}
            />
            <p style={styles.txtContent}>Website Launch</p>
            <p style={styles.txtContent}>IDO Landing Page</p>
            <p style={styles.txtContent}>Community Building</p>
            <p style={styles.txtContent}>Limited Promotion</p>
            <p style={styles.txtContent}>Whitepaper Creation</p>
            <p style={styles.txtContent}>
              Limited Strategy Providers Recruitment
            </p>
          </div>
          <div
            style={{
              height: isMobile || isTablet ? 1280 : 999,
              marginBottom: -180,
              width: isMobile || isTablet ? "100%" : "20%",
            }}
            className="roadmapItem"
          >
            <img
              src={require("../../assets/images/roadmap/roadmap3.png")}
              alt="roadmap"
              width={isMobile || isTablet ? "68%" : "100%"}
              style={styles.center}
            />
            <p style={styles.txtContent}>Whitelist</p>
            <p style={styles.txtContent}>Airdrop</p>
            <p style={styles.txtContent}>Seed</p>
            <p style={styles.txtContent}>Private Sales</p>
            <p style={styles.txtContent}>{`Ordinary Promotion`}</p>
            <p style={styles.txtContent}>{`Integrate Crypto Exchanges`}</p>
            <p style={styles.txtContent}>{`Strategy Providers Recruitment`}</p>
            <p style={styles.txtContent}>{`Build Partnership`}</p>
            <p style={styles.txtContent}>Coinmarketcap</p>
            <p style={styles.txtContent}>IDO Public Sale</p>
          </div>
          <div
            style={{
              height: isMobile || isTablet ? 1280 : 999,
              marginBottom: -90,
              width: isMobile || isTablet ? "100%" : "20%",
            }}
            className="roadmapItem"
          >
            <img
              src={require("../../assets/images/roadmap/roadmap4.png")}
              alt="roadmap"
              width={isMobile || isTablet ? "68%" : "100%"}
              style={styles.center}
            />
            <p style={styles.txtContent}>DEX/CEX Listing</p>
            <p style={styles.txtContent}>Mobile App Release</p>
            <p style={styles.txtContent}>Retroactive</p>
            <p style={styles.txtContent}>Strategy Providers Recruitment</p>
            <p style={styles.txtContent}>Aggressive Promotion</p>
            <p style={styles.txtContent}>Integrate Crypto Exchanges</p>
            <p style={styles.txtContent}>New features Deployment</p>
            <p style={styles.txtContent}>Affiliate Function</p>
            <p style={styles.txtContent}>Gamification Activities</p>
            <p style={styles.txtContent}>Traders Recruitment</p>
          </div>
          <div
            style={{
              height: isMobile || isTablet ? 1280 : 999,
              marginBottom: 0,
              width: isMobile || isTablet ? "100%" : "20%",
            }}
            className="roadmapItem"
          >
            <img
              src={require("../../assets/images/roadmap/roadmap5.png")}
              alt="roadmap"
              width={isMobile || isTablet ? "68%" : "100%"}
              style={styles.center}
            />
            <p style={styles.txtContent}>More DEX/CEX Listing</p>
            <p style={styles.txtContent}>Launch Social Investment App</p>
            <p style={styles.txtContent}>Bigger Exchanges Partnership</p>
            <p style={styles.txtContent}>Trading Academy Establishment</p>
            <p style={styles.txtContent}>
              Loyal Strategy Providers Recruitment
            </p>
            <p style={styles.txtContent}>Massive Promotion</p>
            <p style={styles.txtContent}>Integrated Cross Chain Exchanges</p>
            <p style={styles.txtContent}>Strengthen Affiliates Strategies</p>
            <p style={styles.txtContent}>Traders Aggressive Recruitment</p>
          </div>
        </div>
      )}
    </div>
  );
};
