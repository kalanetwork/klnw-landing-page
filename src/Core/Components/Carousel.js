import React from "react";
import { Row, Col, Button } from "antd";
import { Parallax } from "react-scroll-parallax";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    carouselTxtBold: {
      color: "#11CABE",
      fontSize: isMobile ? "2rem" : "3.9vw",
      fontFamily: "Poppins",
      fontWeight: "700",
      textAlign: "left",
      marginBottom: "0.3vw",
    },
    carouselTxt: {
      color: "#FFFFFF",
      fontSize: isMobile ? "1.6rem" : "2.48vw",
      fontFamily: "Poppins",
      fontWeight: "600",
      textAlign: "left",
      marginBottom: 0,
      lineHeight: "123%",
    },
    carouselTxtSpec: {
      color: "#FFFFFF",
      fontSize: isMobile ? "1.6rem" : "3vw",
      fontFamily: "Poppins",
      fontWeight: "700",
      textAlign: "left",
      marginBottom: 0,
      color: "#11CABE",
      lineHeight: "123%",
    },
    carouselTxtSmall: {
      color: "#BAC3CA",
      fontSize: isMobile ? "1rem" : "1.2rem",
      fontFamily: "Inter",
      fontWeight: "400",
      textAlign: "left",
      marginTop: "0.5vw",
    },
    btnBuyToken: {
      // backgroundColor: "#7024ED",
      // backgroundImage: "linear-gradient(to bottom right, rgb(130 91 137), #7024ED)",
      borderRadius: 10,
      borderColor: "#7024ED",
      border: "none",
      width: "100%",
      height: isMobile ? "3.2rem" : "3vw",
      boxShadow: "rgba(168, 168, 168, 0.2) 0px 7px 29px 0px",
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    btnTokennomic: {
      backgroundColor: "transparent",
      borderRadius: 10,
      borderColor: "#BAC3CA",
      width: "100%",
      height: isMobile ? "3.2rem" : "3vw",
      border: "2px solid #BAC3CA",
      // boxShadow: "rgba(255, 255, 255, 0.2) 0px 7px 29px 0px",
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    iconSocial: {
      marginRight: isMobile ? "2vw" : "1.2vw",
      width: isMobile ? "8.8vw" : "2.68vw",
      cursor: "pointer",
    },
  };

  return (
    <Row
      align="middle"
      justify="space-between"
      style={{ paddingTop: isMobile ? "2vw" : "6vw" }}
    >
      {isMobile && (
        <Col span={6} xl={6} md={6} sm={24} xs={24}>
          <Parallax y={[0, 18]} tagOuter="figure">
            <img
              src={require("../../assets/images/carousel.png")}
              alt="carousel"
              width="100%"
              style={{ marginBottom: 68 }}
            />
          </Parallax>
        </Col>
      )}
      <Col
        span={12}
        xl={12}
        md={12}
        sm={24}
        xs={24}
        style={{ paddingTop: isMobile || isTablet ? "12vw" : "6vw" }}
      >
        <Parallax y={[-18, 18]} tagOuter="figure">
          {/* <p style={styles.carouselTxtBold}></p> */}
          <p style={styles.carouselTxt}>Next Generation</p>
          <p style={styles.carouselTxtSpec}>Web3 SocialFi</p>
          <p style={styles.carouselTxt}>Investment Platform</p>
          <p style={styles.carouselTxtSmall}>
            {`Be the pioneer that creates a one-stop accessible socialfi investment platform and let the mass audience access crypto investment and build wealth in the very smart usable way.`}
          </p>
          <Row style={{ margin: isMobile ? "24px 0" : "40px 0" }}>
            <Col span={6} sm={9} xs={9} md={6} lg={6} xl={6}>
              <Button
                style={styles.btnBuyToken}
                className="btnBuyToken"
                onClick={() => {
                  window.open("https://t.me/kala_network", "_blank");
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    color: "white",
                    fontWeight: "700",
                    fontSize: isMobile ? "1rem" : "1vw",
                  }}
                >
                  Join us
                </span>
              </Button>
            </Col>
            <Col
              span={6}
              sm={9}
              xs={9}
              md={6}
              lg={6}
              xl={6}
              style={{ marginLeft: 24 }}
            >
              <Button
                style={styles.btnTokennomic}
                className="tokennomicBtn"
                onClick={() => {
                  window.open(
                    "https://gleam.io/competitions/boSFl-100000-klnw-airdrop-2nd-round",
                    "_blank"
                  );
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    color: "#BAC3CA",
                    fontWeight: "700",
                    fontSize: isMobile ? "1rem" : "1vw",
                  }}
                >
                  Airdrop
                </span>
              </Button>
            </Col>
          </Row>
          <Row align="middle" style={{ marginLeft: -16, marginBottom: 16 }}>
            <img
              src={require("../../assets/icons/binance.png")}
              alt="binance"
              style={{
                marginRight: 0,
                width: isMobile ? "9vw" : "2.68vw",
                cursor: "initial",
              }}
            />
            <img
              src={require("../../assets/icons/solana.png")}
              alt="solanaaa"
              style={{
                marginRight: isMobile ? "2vw" : "1.2vw",
                width: isMobile ? "6.8vw" : "1.23vw",
                cursor: "initial",
              }}
            />
          </Row>
          <Row align="middle" style={{ marginLeft: -4 }}>
            <img
              src={require("../../assets/icons/telegram.png")}
              alt="telegram"
              style={styles.iconSocial}
              onClick={() => {
                window.open("https://t.me/kala_network", "_blank");
              }}
            />
            <img
              src={require("../../assets/icons/twitter.png")}
              alt="twitter"
              style={styles.iconSocial}
              onClick={() => {
                window.open("https://twitter.com/kala_network", "_blank");
              }}
            />
            <img
              src={require("../../assets/icons/facebook.png")}
              alt="facebook"
              style={styles.iconSocial}
              onClick={() => {
                window.open("https://www.facebook.com/kala.network", "_blank");
              }}
            />
            <img
              src={require("../../assets/icons/instagram.png")}
              alt="instagram"
              style={styles.iconSocial}
              onClick={() => {
                window.open(
                  "https://www.instagram.com/kala_network/",
                  "_blank"
                );
              }}
            />

            {/* <img
              src={require("../../assets/icons/youtube.png")}
              alt="youtube"
              style={styles.iconSocial}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCmymfgvOslzN3KsYKWsttSA",
                  "_blank"
                )
              }
            />
            <img
              src={require("../../assets/icons/tiktok.png")}
              alt="tiktok"
              style={styles.iconSocial}
              onClick={() =>
                window.open("https://www.tiktok.com/@kalanetwork", "_blank")
              }
            />
            <img
              src={require("../../assets/icons/reddit.png")}
              alt="reddit"
              style={styles.iconSocial}
              onClick={() =>
                window.open("https://www.reddit.com/r/kalanetwork/", "_blank")
              }
            /> */}
            {/* <img
              src={require("../../assets/icons/linkedin.png")}
              alt="linkedin"
              style={styles.iconSocial}
            />
            <img
              src={require("../../assets/icons/medium-square.png")}
              alt="medium"
              style={styles.iconSocial}
            /> */}
          </Row>
        </Parallax>
      </Col>
      {!isMobile && (
        <Col span={10} xl={10} lg={10} md={10} sm={24} xs={24}>
          <Parallax y={[0, 18]} tagOuter="figure">
            <img
              src={require("../../assets/images/carousel.png")}
              alt="carousel"
              width="100%"
            />
          </Parallax>
        </Col>
      )}
    </Row>
  );
};
