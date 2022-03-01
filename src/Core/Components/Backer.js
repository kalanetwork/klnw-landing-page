import React from "react";
import { Row, Col, Button } from "antd";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    card: {
      marginTop: 123,
      backgroundColor: "#2C353D",
      width: "100%",
      borderRadius: 24,
      position: "relative",
      border: "1px solid #5a5a5a",
      padding: "4vw",
      paddingBottom: isMobile ? "6.8vw" : "4vw",
      overflow: "hidden",
      boxShadow: "rgba(187, 187, 187, 0.39) 0px 0px 16px",
    },
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "5.8vw" : "2.8vw",
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "center",
      letterSpacing: 0.68,
      marginBottom: "2vw",
    },
    txtContent: {
      fontFamily: "Inter",
      fontSize: 12,
      color: "white",
      marginBottom: 4,
    },
    center: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "79%",
    },
    mg9: {
      marginTop: 9,
    },
  };

  return (
    <div style={styles.card}>
      <img
        src={require("../../assets/images/gradient1.png")}
        alt="gradient"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0.6 }}
        width="560px"
      />

      <p style={styles.txtTitle}>Backers / Partners</p>
      <Row>
        <Col
          span={6}
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="imgHoverScale"
          style={styles.mg9}
        >
          <img
            src={require("../../assets/images/backer/backer1.png")}
            alt="backer"
            width="148px"
            style={styles.center}
          />
        </Col>
        <Col
          span={6}
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="imgHoverScale"
          style={styles.mg9}
        >
          <img
            src={require("../../assets/images/backer/backer2.png")}
            alt="backer"
            width="148px"
            style={styles.center}
          />
        </Col>
        <Col
          span={6}
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="imgHoverScale"
          style={{
            marginTop: 9,
            backgroundColor: "white",
            borderRadius: 12,
            paddingTop: 4,
          }}
        >
          <img
            src="https://supraoracles.com/wp-content/uploads/2021/11/SupraOracles-Red-Light-Horz.png"
            alt="backer"
            width="123px"
            style={styles.center}
          />
        </Col>
        <Col
          span={6}
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="imgHoverScale"
          style={styles.mg9}
        >
          <div
            style={{
              backgroundColor: "#112e3c",
              borderRadius: 14,
              width: "79%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: 12,
              paddingLeft: 0,
            }}
          >
            <img
              src={require("../../assets/images/backer/backer3.png")}
              alt="backer"
              width="123px"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "33%",
              }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                color: "white",
                paddingRight: 9,
                fontSize: isDesktop ? "1rem" : 12,
              }}
            >
              Wolf Ventures
            </span>
          </div>
        </Col>
        <Col
          span={6}
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="imgHoverScale"
          style={styles.mg9}
        >
          <div
            style={{
              backgroundColor: "black",
              borderRadius: 14,
              width: "79%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: 12,
              paddingLeft: 0,
            }}
          >
            <img
              src="https://www.genshards.com/img/footer-logotype.svg"
              alt="backer"
              width="123px"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "26%",
              }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                color: "white",
                fontSize: isDesktop ? "1rem" : 12,
              }}
            >
              Genesis Shards
            </span>
          </div>
        </Col>
       
      </Row>
    </div>
  );
};
