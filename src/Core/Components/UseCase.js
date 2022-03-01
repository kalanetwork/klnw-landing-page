import React from "react";
import { Row, Col, Button } from "antd";
import { Parallax } from "react-scroll-parallax";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "5.8vw" : "2.8vw",
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "left",
    },
    useCaseItem: {
      backgroundColor: "#2C353D",
      border: "1px solid #FFFFFF40",
      borderRadius: 24,
      height: isMobile || isTablet ? "44vw" : "100%",
      padding: isMobile || isTablet ? "1vw 2rem" : "0.68vw 1.68vw",
      boxShadow:
        "rgba(172, 172, 172, 0.2) 5px 5px, rgba(172, 172, 172, 0.1) 10px 10px, rgba(172, 172, 172, 0.05) 15px 15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    txt: {
      fontFamily: "Poppins",
      color: "#BAC3CA",
      fontSize: isMobile || isTablet ? "1rem" : "1vw",
      // paddingRight: "2vw",
      marginTop: "1vw",
      height: "3vw",
      textAlign: "center",
    },
    img: {
      width: isMobile || isTablet ? "19vw" : "100px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  return (
    <Parallax y={[6, -2]} tagOuter="figure">
      <div style={{ marginTop: "9vw" }}>
        <p style={styles.txtTitle}>Token Use Cases</p>
        <div>
          <Row justify="space-between" align="top" gutter={[16, 24]}>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase1.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>

                <p style={styles.txt}>Pay the platform service cost</p>
              </div>
            </Col>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase2.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>

                <p style={styles.txt}>Pay commission to the Providers</p>
              </div>
            </Col>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase3.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>
                <p style={styles.txt}>{`Cashback & reward on the ecosystem`}</p>
              </div>
            </Col>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase4.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>
                <p style={styles.txt}>Affiliate Campaign Rewards</p>
              </div>
            </Col>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase5.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>
                <p style={styles.txt}>Join the exclusive Investment Pool</p>
              </div>
            </Col>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase6.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>
                <p style={styles.txt}>Reward, airdrop, partnership</p>
              </div>
            </Col>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase7.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>
                <p style={styles.txt}>Membership Tier Reward</p>
              </div>
            </Col>
            <Col
              span={6}
              xl={6}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              className="useCaseItem"
            >
              <div style={styles.useCaseItem}>
                <Parallax y={[-6, 6]} tagOuter="figure">
                  <img
                    src={require("../../assets/images/usecase/usecase8.png")}
                    style={styles.img}
                    alt="usecase"
                  />
                </Parallax>

                <p style={styles.txt}>Staking-to-Earn</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Parallax>
  );
};
