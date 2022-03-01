import React from "react";
import { Row, Col, Button, Carousel } from "antd";

export default () => {
  const styles = {
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: 48,
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "center",
    },
    page: {
      width: "100%",
    },
    pageItem: {
      backgroundColor: "#2C353D",
      height: 522,
      borderRadius: 24,
      border: "1px solid #FFFFFF40",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    rowCenter: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    btn: {
      width: "100%",
      borderRadius: 12,
      border: "2.68px solid #FFFFFF",
      backgroundColor: "transparent",
      height: 44,
      marginTop: 24,
    },
  };

  const onChange = (a, b, c) => {
    // console.log(a, b, c);
  };

  const dataPage1 = [
    {
      image: require("../../assets/images/launchpad/launchpad1.png"),
      idoTime: "12pm, Dec 20 - 12pm, Dec 21(UTC)",
      publicSale: "30,000",
      idoPrice: "0.035 USDT",
      whitelistStart: "Dec 13th, 2021",
      whitelistEnd: "Dec 19th, 2021",
    },
    {
      image: require("../../assets/images/launchpad/launchpad2.png"),
      idoTime: "12pm, Dec 20 - 12pm, Dec 21(UTC)",
      publicSale: "30,000",
      idoPrice: "0.035 USDT",
      whitelistStart: "Dec 13th, 2021",
      whitelistEnd: "Dec 19th, 2021",
    },
    {
      image: require("../../assets/images/launchpad/launchpad2.png"),
      idoTime: "12pm, Dec 20 - 12pm, Dec 21(UTC)",
      publicSale: "30,000",
      idoPrice: "0.035 USDT",
      whitelistStart: "Dec 13th, 2021",
      whitelistEnd: "Dec 19th, 2021",
    },
  ];

  return (
    <div style={{ paddingTop: 123 }} id="ido">
      <p style={styles.txtTitle}>Launchpad</p>
      <Carousel afterChange={onChange}>
        <div>
          <Row style={styles.page} justify="space-between" align="middle">
            {dataPage1.map((data) => (
              <Col span={7} style={styles.pageItem}>
                <div style={styles.rowCenter}>
                  <img src={data.image} alt="logo" width="123px" />
                </div>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: 14,
                    textAlign: "center",
                    color: "white",
                    marginBottom: 0,
                  }}
                >
                  IDO Time
                </p>
                <p
                  style={{
                    color: "#FAA87A",
                    fontFamily: "Inter",
                    fontWeight: "700",
                    fontSize: 16,
                    marginBottom: 22,
                  }}
                >
                  {data.idoTime}
                </p>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    Public Sale
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.publicSale}
                  </span>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    IDO Price
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.idoPrice}
                  </span>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    Whitelist start
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.whitelistStart}
                  </span>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    Whitelist end
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.whitelistEnd}
                  </span>
                </Row>
                <Button style={styles.btn}>
                  <span
                    style={{
                      fontFamily: "Inter",
                      color: "white",
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    How to join IDO?
                  </span>
                </Button>
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Row style={styles.page} justify="space-between" align="middle">
            {dataPage1.map((data) => (
              <Col span={7} style={styles.pageItem}>
                <div style={styles.rowCenter}>
                  <img src={data.image} alt="logo" width="123px" />
                </div>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: 14,
                    textAlign: "center",
                    color: "white",
                    marginBottom: 0,
                  }}
                >
                  IDO Time
                </p>
                <p
                  style={{
                    color: "#FAA87A",
                    fontFamily: "Inter",
                    fontWeight: "700",
                    fontSize: 16,
                    marginBottom: 22,
                  }}
                >
                  {data.idoTime}
                </p>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    Public Sale
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.publicSale}
                  </span>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    IDO Price
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.idoPrice}
                  </span>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    Whitelist start
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.whitelistStart}
                  </span>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%", margin: "9px 0px" }}
                >
                  <span
                    style={{
                      color: "#BAC3CA",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    Whitelist end
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: 14,
                    }}
                  >
                    {data.whitelistEnd}
                  </span>
                </Row>
                <Button style={styles.btn}>
                  <span
                    style={{
                      fontFamily: "Inter",
                      color: "white",
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    How to join IDO?
                  </span>
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </Carousel>
    </div>
  );
};
