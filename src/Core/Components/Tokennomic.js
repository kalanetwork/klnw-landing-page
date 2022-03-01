import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { Parallax } from "react-scroll-parallax";
import ReactTooltip from "react-tooltip";

const Tokennomic = ({ width, isDesktop, isMobile, isTablet }) => {
  const [copied, setCopied] = useState(false);
  const styles = {
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "5.8vw" : "2.8vw",
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "left",
    },
    card: {
      backgroundImage: "linear-gradient(to bottom, #767DFF, #BDA9F3)",
      height: isMobile ? "44vw" : "32vw",
      width: isMobile ? "100%" : "36vw",
      borderRadius: 24,
      position: "relative",
      zIndex: 6,
      boxShadow: "rgba(225, 225, 225, 0.48) 0px 0px 16px",
    },
    cardOverride: {
      backgroundImage: "linear-gradient(to bottom, #20262BCC, #20262B)",
      height: isMobile ? "44vw" : "32vw",
      width: isMobile ? "93%" : "34vw",
      borderRadius: 16,
      border: "1px solid #6c6c6c",
      position: "absolute",
      top: 14,
      left: 14,
      zIndex: 9,
    },
    cardOverrideBlack: {
      backgroundImage: "linear-gradient(to bottom, #1C1D23CC, #1C1D23)",
      height: isMobile ? "43.6vw" : "31.8vw",
      width: isMobile ? "48vw" : "21.9vw",
      borderRadius: 16,
      position: "absolute",
      top: 15,
      right: isMobile ? 9 : 21,
      zIndex: 10,
      borderTopLeftRadius: 0,
    },
    leftCard: {
      width: "100%",
      padding: isMobile ? "5vw 4vw" : "5vw 2vw",
    },
    rightCard: {
      width: "100%",
      padding: isMobile ? "5vw 4vw" : "5vw 2vw",
    },
    txtLeftCard: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "1rem" : "0.96vw",
      color: "#BAC3CA",
      padding: "0.5vw 0",
      marginBottom: isMobile || isTablet ? 0 : "0.99em",
      fontWeight: isMobile || isTablet ? "600" : "500",
    },
    txtRightCard: {
      fontFamily: "Inter",
      fontSize: isMobile ? "0.5rem" : "0.96vw",
      color: "#FFFFFF",
      padding: "0.5vw 0",
    },
    contractAddress: {
      height: isMobile || isTablet ? "8vw" : "2.1vw",
      backgroundColor: "#2E2F38",
      width: isMobile ? "100%" : isTablet ? "48%" : "100%",
      borderRadius: 68,
      padding: isMobile || isTablet ? "3vw" : "0.3vw 0.5vw",
      marginBottom: "1.3vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      wordWrap: "break-word",
      position: "relative",
    },
    txtCoinRight: {
      fontFamily: "Inter",
      fontSize: "1vw",
      color: "#BAC3CA",
      paddingRight: "4vw",
      marginTop: "-3vw",
    },
    btnBuyToken: {
      backgroundImage:
        "linear-gradient(to bottom right, rgb(130 91 137), #7024ED)",
      boxShadow: "rgba(168, 168, 168, 0.2) 0px 7px 29px 0px",
      borderRadius: 10,
      borderColor: "#7024ED",
      width: "9vw",
      height: "3.68vw",
    },
    cardOverrideMobile: {
      backgroundImage: "linear-gradient(to bottom, #1C1D23CC, #1C1D23)",
      width: "100%",
      zIndex: 9,
      padding: 11,
      boxShadow: "rgba(225, 225, 225, 0.48) 0px 0px 16px",
      borderRadius: 24,
    },
    txtValue: {
      fontFamily: "Inter",
      fontSize: "0.89rem",
      color: "#BAC3CA",
      padding: "0.5vw 0",
    },
  };

  if (isMobile || isTablet) {
    return (
      <div style={{ paddingTop: 123 }} id="tokennomic">
        <p style={styles.txtTitle}>Tokenomics</p>
        <div
          style={styles.cardOverrideMobile}
          className="border-gradient border-gradient-purple"
        >
          <div style={styles.leftCard}>
            <p style={styles.txtLeftCard}>Token name:</p>
            <p style={styles.txtValue}>KALA NETWORK</p>
            <p style={styles.txtLeftCard}>Token Symbol:</p>
            <p style={styles.txtValue}>KLNW</p>
            <p style={styles.txtLeftCard}>Token Network:</p>
            <Row align="middle" style={{ marginLeft: -4, marginBottom: 16 }}>
              <img
                src={require("../../assets/icons/binance.png")}
                alt="binance"
                style={{
                  marginRight: 0,
                  width: isMobile ? "8vw" : "4.68vw",
                  cursor: "initial",
                }}
              />
              <img
                src={require("../../assets/icons/solana.png")}
                alt="solana"
                style={{
                  marginRight: isMobile ? "2vw" : "1.2vw",
                  width: isMobile ? "5.8vw" : "2.68vw",
                  cursor: "initial",
                }}
              />
            </Row>
            <p style={styles.txtLeftCard}>Contract Address:</p>
            <a
              href="https://bscscan.com/token/0x65df3b6fe7a5384b61d8757e40684e858418f402"
              target="_blank"
            >
              <div
                // data-tip
                // data-for="copied"
                style={styles.contractAddress}
                // onClick={() => {
                //   navigator.clipboard.writeText(
                //     "ChRue6J1bajbXtG1wXZKZsmsZ9S3a4zFEnVBKiG9Npio"
                //   );
                //   setCopied(true);
                // }}
              >
                <img
                  src={require("../../assets/icons/binance.png")}
                  alt="binance"
                  style={{
                    width: isMobile ? "8vw" : "4.68vw",
                    display: "inline-block",
                  }}
                />
                <span style={styles.txtValue}>0x65d...18f402</span>

                <img
                  src={require("../../assets/icons/next.png")}
                  alt="copy"
                  width={isMobile || isTablet ? "14px" : "16px"}
                  style={{ display: "inline" }}
                />
              </div>
            </a>
            <a
              href="https://solscan.io/token/ENGUzXs1xoYxHm3NtvZL26NLwAWr2zkswnTNevfEUYqp"
              target="_blank"
            >
              <div
                // data-tip
                // data-for="copied"
                style={styles.contractAddress}
                // onClick={() => {
                //   navigator.clipboard.writeText(
                //     "ChRue6J1bajbXtG1wXZKZsmsZ9S3a4zFEnVBKiG9Npio"
                //   );
                //   setCopied(true);
                // }}
              >
                <img
                  src={require("../../assets/icons/solana.png")}
                  alt="solana"
                  style={{
                    width: isMobile ? "5.8vw" : "2.68vw",
                    display: "inline-block",
                    marginLeft: "0.68vw",
                  }}
                />
                <span style={styles.txtValue}>ENGUz...fEUYqp</span>

                <img
                  src={require("../../assets/icons/next.png")}
                  alt="copy"
                  width={isMobile || isTablet ? "14px" : "16px"}
                  style={{ display: "inline" }}
                />
              </div>
            </a>

            <p style={styles.txtLeftCard}>Total Supply:</p>
            <p style={styles.txtValue}>1,000,000,000</p>
            <p style={styles.txtLeftCard}>IDO</p>
            <p style={styles.txtValue}>TBD</p>
          </div>
        </div>
        <ReactTooltip
          id="copied"
          type="info"
          event="click"
          afterShow={(e) => {
            navigator.clipboard.writeText(
              "ChRue6J1bajbXtG1wXZKZsmsZ9S3a4zFEnVBKiG9Npio"
            );
            setCopied(true);
            console.log(e);
          }}
        >
          <span>Copied to clipboard</span>
        </ReactTooltip>
      </div>
    );
  } else {
    return (
      <div style={{ paddingTop: 123 }} id="tokennomic">
        <p style={styles.txtTitle}>Tokenomics</p>
        <Row align="middle" justify="space-between">
          <Col span={14} xs={24} sm={24} md={14} lg={14} xl={14}>
            <div style={styles.card}>
              <img
                src={require("../../assets/images/tokennomic/Cube.png")}
                alt="decoration"
                width={isMobile ? "0px" : "123vw"}
                style={{
                  position: "absolute",
                  left: -123,
                  top: "49%",
                  zIndex: 12,
                }}
              />
              <img
                src={require("../../assets/images/tokennomic/Sphere.png")}
                alt="decoration"
                width={isMobile ? "48vw" : "96vw"}
                style={{
                  position: "absolute",
                  left: 39,
                  bottom: isMobile ? -36 : -55,
                  zIndex: 12,
                }}
              />
              <div style={styles.cardOverride}>
                <div style={styles.leftCard}>
                  <p style={styles.txtLeftCard}>Token name</p>
                  <p style={styles.txtLeftCard}>Token Symbol</p>
                  <p style={styles.txtLeftCard}>Token Network</p>
                  <p style={styles.txtLeftCard}>Contract Address</p>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: isMobile || isTablet ? "1rem" : "0.96vw",
                      color: "#BAC3CA",
                      padding: "0.5vw 0",
                      marginBottom: width > 1700 ? "0.99em" : "1.68em",
                      fontWeight: isMobile || isTablet ? "600" : "500",
                      opacity: 0,
                    }}
                  >
                    Contract Address
                  </p>
                  <p style={styles.txtLeftCard}>Total Supply</p>
                  {/* <p style={styles.txtLeftCard}>Audit by</p> */}
                  {/* <p style={styles.txtLeftCard}>Pre-IDO</p> */}
                  <p style={styles.txtLeftCard}>IDO</p>
                </div>
              </div>
              <div style={styles.cardOverrideBlack}>
                <div style={styles.rightCard}>
                  <p style={styles.txtRightCard}>KALA NETWORK</p>
                  <p style={styles.txtRightCard}>KLNW</p>
                  <Row
                    align="middle"
                    style={{ marginLeft: -16, marginBottom: 24 }}
                  >
                    <img
                      src={require("../../assets/icons/binance.png")}
                      alt="binance"
                      style={{
                        marginRight: 0,
                        width: "3.68vw",
                        cursor: "initial",
                      }}
                    />
                    <img
                      src={require("../../assets/icons/solana.png")}
                      alt="solana"
                      style={{
                        marginRight: isMobile ? "2vw" : "1.2vw",
                        width: "1.68vw",
                        cursor: "initial",
                      }}
                    />
                  </Row>
                  <a
                    href="https://bscscan.com/token/0x65df3b6fe7a5384b61d8757e40684e858418f402"
                    target="_blank"
                  >
                    <div
                      // data-tip
                      // data-for="copied"
                      style={styles.contractAddress}
                      // onClick={() => {
                      //   navigator.clipboard.writeText(
                      //     "ChRue6J1bajbXtG1wXZKZsmsZ9S3a4zFEnVBKiG9Npio"
                      //   );
                      //   setCopied(true);
                      // }}
                    >
                      <img
                        src={require("../../assets/icons/binance.png")}
                        alt="binance"
                        style={{
                          width: "2.68vw",
                          display: "inline-block",
                        }}
                      />
                      <span style={styles.txtRightCard}>
                        0x65dF3b6FE7...18f402
                      </span>
                      <img
                        src={require("../../assets/icons/next.png")}
                        alt="copy"
                        width={isMobile ? "9px" : "16px"}
                        style={{ display: "inline" }}
                      />
                    </div>
                  </a>

                  <a
                    href="https://solscan.io/token/ENGUzXs1xoYxHm3NtvZL26NLwAWr2zkswnTNevfEUYqp"
                    target="_blank"
                  >
                    <div
                      // data-tip
                      // data-for="copied"
                      style={styles.contractAddress}
                      // onClick={() => {
                      //   navigator.clipboard.writeText(
                      //     "ChRue6J1bajbXtG1wXZKZsmsZ9S3a4zFEnVBKiG9Npio"
                      //   );
                      //   setCopied(true);
                      // }}
                    >
                      <img
                        src={require("../../assets/icons/solana.png")}
                        alt="solana"
                        style={{
                          width: "1.28vw",
                          display: "inline-block",
                          marginLeft: 11,
                        }}
                      />
                      <span style={styles.txtRightCard}>
                        ENGUzXs1xoYx...fEUYqp
                      </span>
                      <img
                        src={require("../../assets/icons/next.png")}
                        alt="copy"
                        width={isMobile ? "9px" : "16px"}
                        style={{ display: "inline" }}
                      />
                    </div>
                  </a>

                  <p style={styles.txtRightCard}>1,000,000,000</p>
                  {/* <img
                    src="https://www.genshards.com/img/footer-logotype.svg"
                    alt="backer"
                    width={isMobile ? "68vw" : "36px"}
                    style={{
                      display: "block",
                    }}
                  /> */}
                  <p style={styles.txtRightCard}>TBD</p>
                  {/* <img
                    src={require("../../assets/images/tokennomic/certik.png")}
                    alt="certik"
                    width={isMobile ? "68vw" : "111px"}
                    style={{ marginTop: "0.4vw" }}
                  />
                  <br /> */}
                </div>
              </div>
            </div>
          </Col>
          <Col
            span={10}
            xs={0}
            sm={0}
            md={10}
            lg={10}
            xl={10}
            style={{ marginBottom: 99 }}
          >
            <Parallax y={[-9, 12]} tagOuter="figure">
              <img
                src={require("../../assets/images/tokennomic/coins.png")}
                alt="coin"
                width="90%"
              />
              <p style={styles.txtCoinRight}>
                {`KALA Network token ($KLNW) is issued on SOLANA blockchain & Binance Smart Chain (BEP20)`}
              </p>
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
                    fontSize: "1.068vw",
                  }}
                >
                  Join us
                </span>
              </Button>
            </Parallax>
          </Col>
        </Row>
        <ReactTooltip
          id="copied"
          type="info"
          event="click"
          afterShow={(e) => {
            navigator.clipboard.writeText(
              "ChRue6J1bajbXtG1wXZKZsmsZ9S3a4zFEnVBKiG9Npio"
            );
            setCopied(true);
            console.log(e);
          }}
        >
          <span>Copied to clipboard</span>
        </ReactTooltip>
      </div>
    );
  }
};

export default Tokennomic;
