import React from "react";
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
      minHeight: 200,
      padding: isMobile || isTablet ? "5vw" : "3vw",
    },
    txt: {
      fontFamily: "Inter",
      color: "#FFFFFF",
      fontSize: isMobile || isTablet ? "0.88rem" : "0.88vw",
      fontWeight: "400",
      marginBottom: 0,
    },
    overviewItem: {
      backgroundImage:
        "linear-gradient(to bottom, #2CA6FF00, #0C619F6B,#2CA6FF00)",
      width: isMobile || isTablet ? "88%" : "79%",
      padding: isMobile || isTablet ? "9vw 3vw" : "3vw 1.4vw",
    },
    alignRight: {
      display: "flex",
      justifyContent: "flex-end",
    },
    title: {
      fontFamily: "Inter",
      color: "#FFFFFF",
      fontSize: isMobile || isTablet ? "1.2rem" : "1.2vw",
      fontWeight: "700",
      marginBottom: 0,
    },
    ulStyle: {
      color: "#FFFFFF",
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: isMobile || isTablet ? "0.88rem" : "0.79vw",
      width: "100%",
      padding: 20,
      paddingTop: 10,
    },
    lgTitle: {
      fontFamily: "Inter",
      color: "#FFFFFF",
      fontSize: isMobile || isTablet ? "1.4rem" : "1.4vw",
      fontWeight: "700",
      marginBottom: 9,
    },
  };

  return (
    <div
      style={{
        paddingTop: isMobile || isTablet ? "18vw" : "9vw",
      }}
      id="overview"
    >
      <p style={styles.txtTitle}>Kala Network Overview</p>
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
        {/* <p style={styles.lgTitle}>Web3 SocialFi Network</p>
        <p
          style={styles.txt}
        >{`Reward Protocol for SocialFi Network Contribution & Engagement`}</p>
        <p
          style={styles.txt}
        >{`Providing various tools for participants to invest into crypto`}</p> */}
        <Row
          justify="space-between"
          align="stretch"
          style={{ marginTop: "3vw" }}
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #2CFFD900, #0C979F6B,#2CFFD900)",
              width: isMobile || isTablet ? "88%" : "48%",
              padding: isMobile || isTablet ? "9vw 3vw" : "3vw 1.4vw",
            }}
          >
            <div
              style={{
                width: "96%",
              }}
            >
              <p style={styles.title}>Launchpad</p>
              <ul style={styles.ulStyle}>
                <li>{`Analyzed, verified by Community`}</li>
                <li>{`Multichain Support`}</li>
              </ul>
            </div>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={10}
            xl={10}
            style={{ position: "relative" }}
          >
            <img
              src={require("../../assets/images/overview.png")}
              style={{
                width: "122%",
                position: "absolute",
                top: "12%",
                left: "-13.5%",
              }}
            />
            <img
              src={require("../../assets/images/overview2.png")}
              style={{
                width: "20%",
                position: "absolute",
                top: "99%",
                left: "39%",
              }}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #A175FE00, #9767FD6B,#A175FE00)",
              width: isMobile || isTablet ? "88%" : "48%",
              padding: isMobile || isTablet ? "9vw 3vw" : "3vw 1.4vw",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ width: "96%" }}>
              <p style={styles.title}>Earn</p>
              <ul style={styles.ulStyle}>
                <li>Create-2-earn</li>
                <li>Engage-2-earn</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row
          justify="space-between"
          align="stretch"
          style={{ marginTop: "2vw" }}
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #FF782C00, #9F410C6B,#FF782C00)",
              width: isMobile || isTablet ? "88%" : "48%",
              padding: isMobile || isTablet ? "9vw 3vw" : "3vw 1.4vw",
            }}
          >
            <div
              style={{
                width: "96%",
              }}
            >
              <p style={styles.title}>Trade</p>
              <ul style={styles.ulStyle}>
                <li>Non-custodial fund</li>
                <li>Trade on Cex (API)</li>
                <li>Trade on Dex (Serum Shared Liquidity)</li>
              </ul>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={7}
            xl={7}
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #0C3E9F00, #0C3E9F6B,#0C3E9F00)",
              width: isMobile || isTablet ? "88%" : "48%",
              padding: isMobile || isTablet ? "9vw 3vw" : "3vw 1.4vw",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "96%",
              }}
            >
              <p style={styles.title}>{`Fund Tool & Growth Hack`}</p>

              <ul style={styles.ulStyle}>
                <li>{`Social WorkDrop & Reward `}</li>
                <li>Distribution Support</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
