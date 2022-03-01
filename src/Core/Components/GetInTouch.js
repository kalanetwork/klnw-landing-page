import React from "react";
import { Row, Col, Button, Input } from "antd";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    card: {
      marginTop: 123,
      backgroundColor: "#2C353D",
      width: "100%",
      borderRadius: 24,
      position: "relative",
      border: "1px solid #5a5a5a",
      padding: width < 1240 ? "0 12px" : "0 48px",
      overflow: "hidden",
      boxShadow: "rgba(187, 187, 187, 0.39) 0px 0px 16px",
    },
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: width < 1240 ? "1.2rem" : "2vw",
      fontWeight: "600",
      color: "#FFFFFF",
      letterSpacing: 0.68,
      marginBottom: 20,
      textAlign: width < 1240 ? "center" : "left",
      marginTop: width < 1240 ? 24 : 0,
    },
    txtBlue: {
      color: "#11CABE",
      fontSize: 16,
      fontFamily: "Inter",
      textAlign: width < 1240 ? "center" : "left",
    },
    input: {
      backgroundColor: "#1F252B",
      borderRadius: 10,
      padding: "12px 24px",
      fontFamily: "Inter",
      fontSize: 16,
      color: "#4f5458",
      border: "none",
      fontWeight: "600",
    },
    btnSubscribe: {
      backgroundColor: "#11CABE",
      padding: "12px 24px",
      height: 48,
      borderRadius: 10,
      border: "none",
    },
    center: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 32,
    },
  };

  return (
    <div style={styles.card}>
      <img
        src={require("../../assets/images/gradient1.png")}
        alt="gradient"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.6,
        }}
        width={width < 1240 ? "365px" : "560px"}
      />
      <img
        src={require("../../assets/images/gradient2.png")}
        alt="gradient"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          opacity: 0.48,
        }}
        width={width < 1240 ? "165px" : "389px"}
      />
      <Row align="middle">
        {width > 1240 && (
          <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
            <img
              src={require("../../assets/images/getInTouch.png")}
              alt="kala"
              height="568px"
              style={{ marginTop: 32 }}
            />
          </Col>
        )}

        <Col
          span={14}
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={14}
          style={{ padding: width > 1240 ? "0 80px" : "0 12px" }}
        >
          <p style={styles.txtTitle}>Get in touch with us</p>
          <p style={styles.txtBlue}>info@kala.network</p>
          <Row justify={width > 1240 ? "start" : "center"}>
            <Col
              span={isMobile || isTablet ? 3 : 2}
              style={{ cursor: "pointer" }}
              className="imgHoverScale"
              onClick={() => {
                window.open("https://t.me/kala_network", "_blank");
              }}
            >
              <img
                src={require("../../assets/images/getInTouch/socialMedia2.png")}
                alt="socialMedia"
                width="100%"
              />
            </Col>
            <Col
              span={isMobile || isTablet ? 3 : 2}
              className="imgHoverScale"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://twitter.com/kala_network", "_blank");
              }}
            >
              <img
                src={require("../../assets/images/getInTouch/twitter3D.png")}
                alt="socialMedia"
                width="100%"
              />
            </Col>
            <Col
              span={isMobile || isTablet ? 3 : 2}
              className="imgHoverScale"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.facebook.com/kala.network", "_blank");
              }}
            >
              <img
                src={require("../../assets/images/getInTouch/socialMedia1.png")}
                alt="socialMedia"
                width="100%"
              />
            </Col>
            <Col
              span={isMobile || isTablet ? 3 : 2}
              className="imgHoverScale"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://www.instagram.com/kala_network/",
                  "_blank"
                );
              }}
            >
              <img
                src={require("../../assets/images/getInTouch/instagram3D.png")}
                alt="socialMedia"
                width="100%"
              />
            </Col>
            {/* <Col
              span={isMobile || isTablet ? 3 : 2}
              className="imgHoverScale"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCmymfgvOslzN3KsYKWsttSA",
                  "_blank"
                )
              }
            >
              <img
                src={require("../../assets/images/getInTouch/youtube3D.png")}
                alt="socialMedia"
                width="100%"
              />
            </Col>
            <Col
              span={isMobile || isTablet ? 3 : 2}
              className="imgHoverScale"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.tiktok.com/@kalanetwork", "_blank")
              }
            >
              <img
                src={require("../../assets/images/getInTouch/tiktok3D.png")}
                alt="socialMedia"
                width="100%"
              />
            </Col>
            <Col
              span={isMobile || isTablet ? 3 : 2}
              className="imgHoverScale"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.reddit.com/r/kalanetwork/", "_blank")
              }
            >
              <img
                src={require("../../assets/images/getInTouch/reddit3D.png")}
                alt="socialMedia"
                width="100%"
              />
            </Col> */}
          </Row>
          <p
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontSize: 14,
              marginTop: 12,
              textTransform: "uppercase",
              textAlign: width > 1240 ? "left" : "center",
              fontWeight: "600",
            }}
          >
            Available on the
          </p>
          <Row
            align="stretch"
            justify={width > 1240 ? "flex-start" : "center"}
            style={{ marginTop: 4 }}
          >
            <Col span={6} xs={6} sm={6} md={6} lg={6} xl={6}>
              <img
                src={require("../../assets/images/getInTouch/qrCode.png")}
                alt="apple"
                style={{ width: "100%", borderRadius: 4 }}
              />
            </Col>
            <Col
              span={9}
              xs={9}
              sm={9}
              md={9}
              lg={9}
              xl={9}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginLeft: 12,
              }}
            >
              <a href="https://apple.co/3ABuD5J" target="_blank">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/appleStore.0ca159be.png"
                  alt="apple"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </a>

              <a href="https://bit.ly/3tY4j4D" target="_blank">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/googlePlay.df026781.png"
                  alt="apple"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </a>
            </Col>
          </Row>
          {/* <Row justify="space-between" style={{ marginTop: 48, width: "100%" }}>
            <Col span={18}>
              <Input placeholder="Enter your email" style={styles.input} />
            </Col>
            <Col span={5}>
              <Button style={styles.btnSubscribe} className="btnSubscribe">
                <span
                  style={{
                    fontFamily: "Inter",
                    color: "white",
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  Subscribe
                </span>
              </Button>
            </Col>
          </Row> */}
        </Col>

        {width <= 1240 && (
          <Col span={10} xs={24} sm={24} md={24} lg={24} xl={10}>
            <img
              src={require("../../assets/images/getInTouch.png")}
              alt="kala"
              height="333rem"
              style={styles.center}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};
