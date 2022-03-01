import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Row, Col, Button } from "antd";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "5.8vw" : "2.8vw",
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "left",
    },
    cardValue: {
      backgroundColor: "#2C353D",
      borderRadius: 24,
      position: "relative",
      overflow: "hidden",
      border: "1px solid #FFFFFF40",
      boxShadow: "rgba(187, 187, 187, 0.39) 0px 0px 16px",
    },
    center: {
      display: "block",
      width: "100%",
      margin: "auto",
      padding: isTablet || isMobile ? "9vw" : 0,
      paddingTop: 0,
    },
    ulStyle: {
      color: "#BAC3CA",
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: isMobile || isTablet ? "3.9vw" : "0.99vw",
      marginLeft: -9,
      width: isMobile || isTablet ? "100%" : "150%",
    },
    title: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "5.8vw" : "2vw",
      color: "white",
      marginTop: isMobile ? 0 : 28,
      marginBottom: isMobile ? 4 : 9,
    },
  };

  return (
    <Parallax y={[18, 0]} tagOuter="figure">
      <div style={{ paddingTop: isMobile || isTablet ? "18vw" :"9vw" }} id="value">
        <p style={styles.txtTitle}>{`Our Value & Proposition`}</p>
        <div style={styles.cardValue}>
          <img
            src={require("../../assets/images/gradient1.png")}
            style={{ position: "absolute", top: 0, left: 0, opacity: 0.5 }}
            width="365px"
          />
          <img
            src={require("../../assets/images/gradient2.png")}
            style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.5 }}
            width="365px"
          />
          <Row align="middle" justify="center">
            <Col
              span={11}
              xl={11}
              md={24}
              sm={24}
              xs={24}
              style={{ padding: "3vw 5vw" }}
            >
              <img
                src={require("../../assets/images/provider.png")}
                width="268vw"
                style={styles.center}
              />
              <div>
                <p style={styles.title}>Providers</p>
                <ul style={styles.ulStyle}>
                  <li>{`Reach the huge investors & capital`}</li>
                  <li>Maximize profit</li>
                  <li>Growth support tool</li>
                  <li>Huge capital</li>
                  <li>Fund manager</li>
                </ul>
              </div>
            </Col>
            <Col
              span={1}
              xl={1}
              md={0}
              sm={1}
              xs={1}
              style={{ marginTop: isMobile || isTablet ? 0 : "2vw" }}
              align="middle"
            >
              <img
                src={require("../../assets/images/divider.png")}
                width={isMobile || isTablet ? "2px" : "3px"}
                style={{
                  transform: isMobile || isTablet ? "rotateZ(90deg)" : "none",
                  margin: isMobile || isTablet ? "-11vw" : 0,
                }}
              />
            </Col>
            <Col
              span={11}
              xl={11}
              md={24}
              sm={24}
              xs={24}
              style={{ padding: "3vw 5vw" }}
            >
              <img
                src={require("../../assets/images/user.png")}
                width="268vw"
                style={styles.center}
              />
              <div>
                <p style={styles.title}>Investors</p>
                <ul style={styles.ulStyle}>
                  <li>Earn from the mind of top traders</li>
                  <li>Utilize start money</li>
                  <li>Stress free</li>
                  <li>Proved Assessment</li>
                  <li>Level up trading skill</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Parallax>
  );
};
