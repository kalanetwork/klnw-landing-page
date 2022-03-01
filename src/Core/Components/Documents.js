import React from "react";
import { Row, Col, Button } from "antd";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "5.8vw" : "2.8vw",
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "center",
    },
    txtHeader: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "1.2rem" : "1.2vw",
      color: "white",
      fontWeight: "600",
      marginTop: 9,
      marginBottom: 4,
      textAlign: isMobile || isTablet ? "center" : "left",
    },
    txtReadmore: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : "0.68vw",
      color: "#BAC3CA",
      textAlign: isMobile || isTablet ? "center" : "left",
    },
    card: {
      backgroundColor: "#2C353D",
      border: "1px solid #FFFFFF40",
      borderRadius: 24,
      width: "100%",
      padding: isMobile || isTablet ? "4vw 3vw" : "2vw 3vw",
      boxShadow: "rgba(187, 187, 187, 0.39) 0px 0px 16px",
      margin: isMobile || isTablet ? "1.68vw" : "0 1.68vw",
      cursor: "pointer",
    },
  };

  return (
    <div style={{ paddingTop: 123 }} id="documents">
      <p style={styles.txtTitle}>Documents</p>
      <Row
        style={{ marginTop: 24 }}
        align="middle"
        justify="center"
        gutter={[16]}
      >
        <Col span={8} xs={24} sm={24} md={24} lg={8} xl={8}>
          <div
            style={styles.card}
            className="imgHoverScale"
            onClick={() => {
              window.open("https://bit.ly/kala_pitchdeck", "_blank");
            }}
          >
            <Row align="middle" style={{ flex: 1 }} justify="space-between">
              <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                <img
                  src={require("../../assets/images/documents/document1.png")}
                  alt="document"
                  width="100px"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Col>
              <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                <p style={styles.txtHeader}>Pitch Deck</p>
                <p style={styles.txtReadmore}>Read more</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={8} xs={24} sm={24} md={24} lg={8} xl={8}>
          <div
            style={styles.card}
            className="imgHoverScale"
            onClick={() => {
              window.open("https://docs.kala.network", "_blank");
            }}
          >
            <Row align="middle" justify="space-between">
              <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                <img
                  src={require("../../assets/images/documents/document2.png")}
                  alt="document"
                  width="100px"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Col>
              <Col span={11} xs={24} sm={24} md={24} lg={11} xl={11}>
                <p style={styles.txtHeader}>Whitepaper</p>
                <p style={styles.txtReadmore}>Read more</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
