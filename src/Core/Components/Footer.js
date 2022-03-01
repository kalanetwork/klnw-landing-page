import React from "react";
import { Row, Col, Button } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    navTxt: {
      fontSize: isMobile || isTablet ? "0.88rem" : "0.92rem",
      fontFamily: "Inter",
      fontWeight: "600",
      letterSpacing: 0.68,
      textAlign: "right",
      marginLeft: isMobile || isTablet ? 0 : 24,
      marginRight: isMobile || isTablet ? 12 : 0,
      cursor: "pointer",
    },
    iconSocial: {
      marginLeft: width < 576 ? 0 : 9,
      marginRight: width < 576 ? 9 : 0,
      marginTop: width < 576 ? 9 : 0,
      cursor: "pointer",
    },
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="kalaNavbar" style={{ marginTop: 68 }}>
      <Row
        align="middle"
        style={{
          marginTop: 79,
          borderBottom: "2px solid #748FB521",
          paddingBottom: 12,
        }}
      >
        <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6}>
          <img
            src={require("../../assets/icons/logo.png")}
            alt="logo"
            width={isMobile || isTablet ? "79rem" : "144px"}
          />
        </Col>
        <Col span={18} xs={24} sm={24} md={18} lg={18} xl={18}>
          <Row
            style={{ width: "100%", height: "100%", paddingTop: 9 }}
            align="middle"
            justify={isTablet || isMobile ? "start" : "end"}
          >
            <p
              onClick={scrollToTop}
              style={styles.navTxt}
              className="kalaNavLink"
            >
              Home
            </p>
            {/* <Link
              to="value"
              spy={true}
              smooth={true}
              // offset={-150}
              duration={500}
            >
              <p style={styles.navTxt} className="kalaNavLink">
                Value
              </p>
            </Link> */}
            <Link
              to="tokennomic"
              spy={true}
              smooth={true}
              // offset={-150}
              duration={500}
            >
              <p style={styles.navTxt} className="kalaNavLink">
                Tokenomics
              </p>
            </Link>
            <Link
              to="distribution"
              spy={true}
              smooth={true}
              // offset={-150}
              duration={500}
            >
              <p style={styles.navTxt} className="kalaNavLink">
                Distribution
              </p>
            </Link>
            <Link
              to="roadmap"
              spy={true}
              smooth={true}
              // offset={-150}
              duration={500}
            >
              <p style={styles.navTxt} className="kalaNavLink">
                Roadmap
              </p>
            </Link>
            {/* 
              <Link
                to="ido"
                spy={true}
                smooth={true}
                // offset={-150}
                duration={500}
              >
                <p style={styles.navTxt} className="kalaNavLink">
                  IDO
                </p>
              </Link>
           */}

            <Link
              to="teams"
              spy={true}
              smooth={true}
              // offset={-150}
              duration={500}
            >
              <p
                style={styles.navTxt}
                className="kalaNavLink"
              >{`Team & Partners`}</p>
            </Link>

            <Link
              to="documents"
              spy={true}
              smooth={true}
              // offset={-150}
              duration={500}
            >
              <p style={styles.navTxt} className="kalaNavLink">
                Documents
              </p>
            </Link>
          </Row>
        </Col>
      </Row>

      <Row
        align="middle"
        justify="space-between"
        style={{ marginTop: 9 }}
        gutter={[9]}
      >
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <span
            style={{
              color: "#BAC3CA",
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: isMobile || isTablet ? "0.88rem" : 13,
              marginBottom: isMobile || isTablet ? 9 : 0,
            }}
          >
            © KALA Network
          </span>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row align="middle" justify={width < 576 ? "start" : "end"}>
            <img
              src={require("../../assets/icons/telegram.png")}
              width="24px"
              alt="telegram"
              style={styles.iconSocial}
              onClick={() => {
                window.open("https://t.me/kala_network", "_blank");
              }}
            />
            <img
              src={require("../../assets/icons/twitter.png")}
              width="24px"
              alt="twitter"
              style={styles.iconSocial}
              onClick={() => {
                window.open("https://twitter.com/kala_network", "_blank");
              }}
            />
            <img
              src={require("../../assets/icons/facebook.png")}
              width="24px"
              alt="facebook"
              style={styles.iconSocial}
              onClick={() => {
                window.open("https://www.facebook.com/kala.network", "_blank");
              }}
            />
            <img
              src={require("../../assets/icons/instagram.png")}
              width="24px"
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
                          width="24px"
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
                          width="24px"
              alt="tiktok"
              style={styles.iconSocial}
              onClick={() =>
                window.open("https://www.tiktok.com/@kalanetwork", "_blank")
              }
            />
            <img
              src={require("../../assets/icons/reddit.png")}
                          width="24px"
              alt="reddit"
              style={styles.iconSocial}
              onClick={() =>
                window.open("https://www.reddit.com/r/kalanetwork/", "_blank")
              }
            /> */}
            {/* <img
              src={require("../../assets/icons/linkedin.png")}
                          width="24px"
              alt="linkedin"
              style={styles.iconSocial}
            />
            <img
              src={require("../../assets/icons/medium-square.png")}
                          width="24px"
              alt="medium"
              style={styles.iconSocial}
            /> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
