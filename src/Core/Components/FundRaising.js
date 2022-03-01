import React, { useState } from "react";
import { Row, Col } from "antd";
import DonutChart from "react-donut-chart";
import "../styles/index.scss";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const data = [
    {
      label: "Reserve Fund",
      value: 10,
    },
    {
      label: "Products",
      value: 25,
    },
    {
      label: "Liquidity",
      value: 25,
    },
    {
      label: "Operation",
      value: 15,
    },
    {
      label: "Marketing",
      value: 25,
    },
  ];
  const colors = ["#48E5E5", "#FF8A65", "#E289F2", "#2B8EF3", "#3CD495"];

  const [selectedLabel, setSelectedLabel] = useState(data[0]);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  const styles = {
    card: {
      marginTop: 123,
      backgroundColor: "#2C353D",
      width: "100%",
      borderRadius: 24,
      position: "relative",
      border: "1px solid #5a5a5a",
      padding: isMobile || isTablet ? "0 2vw" : "0 3vw",
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
      marginTop: isMobile || isTablet ? "9vw" : 80,
    },
    btnBuyToken: {
      backgroundImage:
        "linear-gradient(to bottom right, rgb(130 91 137), #7024ED)",
      boxShadow: "rgba(168, 168, 168, 0.2) 0px 7px 29px 0px",
      borderRadius: 10,
      borderColor: "#7024ED",
      width: 133,
      height: 48,
    },
    headerTable: {
      backgroundImage:
        isMobile || isTablet
          ? "none"
          : "linear-gradient(to top, #1C486800, #1C4868)",
      height: 56,
      padding: isMobile || isTablet ? "16px 0" : "16px 24px",
      width: "100%",
      borderRadius: 1,
      display: "block",
    },
    txtHeaderTitle: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "0.88rem" : "1rem",
      color: "white",
      width: isMobile || isTablet ? 111 : "14%",
      backgroundImage:
        isMobile || isTablet
          ? "linear-gradient(to top, #1C486800, #1C4868)"
          : "none",
      height: isMobile || isTablet ? "200%" : "100%",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
    },
    txtHeaderPhase: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "0.88rem" : "1rem",
      color: "white",
      width: isMobile || isTablet ? 222 : "14%",
      backgroundImage:
        isMobile || isTablet
          ? "linear-gradient(to top, #1C486800, #1C4868)"
          : "none",
      height: isMobile || isTablet ? "200%" : "100%",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
    },
    txtHeaderInvestingPeriod: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "0.88rem" : "0.9rem",
      color: "white",
      width: isMobile || isTablet ? 790 : "14%",
      paddingRight: isMobile || isTablet ? "24vw" : "0",
      backgroundImage:
        isMobile || isTablet
          ? "linear-gradient(to top, #1C486800, #1C4868)"
          : "none",
      height: isMobile || isTablet ? "200%" : "100%",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
    },
    contentRow: {
      padding: isMobile || isTablet ? "4px 0" : "39px 24px",
      width: "100%",
      borderBottom: isMobile || isTablet ? "none" : "1px solid #FFFFFF1A",
      display: "block",
    },
    txtContent: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : 14,
      color: "white",
      width: isMobile || isTablet ? 111 : "14%",
      paddingRight: "4px",
      letterSpacing: 0.36,
      minHeight: isMobile || isTablet ? 36 : "100%",
      borderBottom: isMobile || isTablet ? "1px solid #FFFFFF1A" : "none",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
      whiteSpace: "break-spaces",
    },
    txtContentPhase: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : 14,
      color: "white",
      width: isMobile || isTablet ? 222 : "14%",
      paddingRight: "4px",
      letterSpacing: 0.36,
      minHeight: isMobile || isTablet ? 36 : "100%",
      borderBottom: isMobile || isTablet ? "1px solid #FFFFFF1A" : "none",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
      whiteSpace: "break-spaces",
    },
    txtPropotion: {
      color: "#30E0A1",
      fontWeight: "600",
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : 14,
      width: isMobile || isTablet ? 111 : "14%",
      wordWrap: "break-word",
      letterSpacing: 0.36,
      minHeight: isMobile || isTablet ? 36 : "100%",
      borderBottom: isMobile || isTablet ? "1px solid #FFFFFF1A" : "none",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
    },
    txtStatus: {
      color: "#11CABE",
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : 14,
      width: isMobile || isTablet ? 111 : "14%",
      paddingRight: "4px",
      wordWrap: "break-word",
      letterSpacing: 0.36,
      minHeight: isMobile || isTablet ? 36 : "100%",
      borderBottom: isMobile || isTablet ? "1px solid #FFFFFF1A" : "none",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
    },
    txtTGE: {
      color: "#7B82FF",
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : 14,
      width: isMobile || isTablet ? 111 : "14%",
      paddingRight: "4px",
      wordWrap: "break-word",
      letterSpacing: 0.36,
      minHeight: isMobile || isTablet ? 36 : "100%",
      borderBottom: isMobile || isTablet ? "1px solid #FFFFFF1A" : "none",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
    },
    txtVestingPeriod: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : 14,
      color: "white",
      width: isMobile || isTablet ? 790 : "39%",
      paddingRight: "4px",
      wordWrap: "break-word",
      letterSpacing: 0.36,
      minHeight: isMobile || isTablet ? 36 : "100%",
      borderBottom: isMobile || isTablet ? "1px solid #FFFFFF1A" : "none",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
      whiteSpace: "break-spaces",
    },
    txtInitialTitle: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "0.88rem" : 24,
      color: "white",
      letterSpacing: 0.68,
      marginBottom: 0,
    },
    txtNumberToken: {
      color: "#11CABE",
      letterSpacing: 1,
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "2rem" : 64,
      fontFamily: "Poppins",
      marginBottom: 22,
    },
    txtNumberMarket: {
      color: "#F2AA68",
      letterSpacing: 1,
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "2rem" : 64,
      fontFamily: "Poppins",
    },
    txtDollar: {
      color: "#F2AA68",
      fontSize: isMobile || isTablet ? "0.88rem" : 24,
      fontFamily: "Poppins",
      display: "inline-block",
      verticalAlign: "top",
      lineHeight: 2.5,
      marginRight: 2,
    },
    break: {
      whiteSpace: "break-spaces",
    },
  };

  const onClose = () => {
    if (isVisible) {
      setIsVisible(false);
    }
  };
  const onClose2 = () => {
    if (isVisible2) {
      setIsVisible2(false);
    }
  };

  return (
    <div style={styles.card} id="distribution">
      <img
        src={require("../../assets/images/gradient1.png")}
        alt="gradient"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.6,
          display: isMobile || isTablet ? "none" : "block",
        }}
        width="560px"
      />
      <img
        src={require("../../assets/images/fundRaising/gradient2.png")}
        alt="gradient"
        style={{
          position: "absolute",
          top: "34%",
          right: 0,
          opacity: 0.28,
          display: isMobile || isTablet ? "none" : "block",
        }}
        width="300px"
      />
      <p style={styles.txtTitle}>Fundraising</p>
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
        onScroll={(e) => {
          if (!e.scrollX) {
            onClose();
          }
        }}
      >
        {isVisible && (
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              backgroundColor: "black",
              opacity: 0.8,
              padding: "8px 12px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              display: isMobile || isTablet ? "flex" : "none",
            }}
          >
            <img
              src={require("../../assets/icons/scroll-hand.png")}
              alt="scroll"
              width="24px"
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "0.79rem",
                color: "white",
                marginTop: 9,
                fontFamily: "Inter",
              }}
            >
              You can scroll
            </p>
          </div>
        )}

        <div style={styles.headerTable}>
          <span style={styles.txtHeaderTitle}>Phase</span>
          <span style={styles.txtHeaderTitle}>Proportion</span>
          <span style={styles.txtHeaderTitle}>Amount</span>
          <span style={styles.txtHeaderTitle}>Price</span>
          <span style={styles.txtHeaderTitle}>Fund</span>
          <span style={styles.txtHeaderTitle}>End</span>
          <span style={styles.txtHeaderTitle}>Status</span>
        </div>
        <div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>Seed Sale</span>
            <span style={styles.txtPropotion}>4%</span>
            <span style={styles.txtContent}>40,000,000</span>
            <span style={styles.txtContent}>$0.010</span>
            <span style={styles.txtContent}>$400,000</span>
            <span style={styles.txtContent}>2022 Mar</span>
            <span style={styles.txtStatus}>Open</span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>Private Sale</span>
            <span style={styles.txtPropotion}>12%</span>
            <span style={styles.txtContent}>120,000,000</span>
            <span style={styles.txtContent}>$0.015</span>
            <span style={styles.txtContent}>$1,800,000</span>
            <span style={styles.txtContent}>2022 Mar</span>
            <span style={styles.txtStatus}>Open</span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>Public Sale</span>
            <span style={styles.txtPropotion}>4%</span>
            <span style={styles.txtContent}>40,000,000</span>
            <span style={styles.txtContent}>$0.020</span>
            <span style={styles.txtContent}>$800,000</span>
            <span style={styles.txtContent}>2022 April</span>
            <span style={styles.txtContent}>Planned</span>
          </div>
        </div>
      </div>

      <p style={styles.txtTitle}>Raised Fund Usage</p>
      <Row
        style={{ position: "relative", width: "100%" }}
        justify="space-between"
        align="middle"
      >
        <Col
          span={17}
          xs={24}
          sm={24}
          md={24}
          lg={17}
          xl={17}
          style={{
            paddingLeft: isMobile || isTablet ? "0px" : "2vw",
            display: isMobile || isTablet ? "flex" : "block",
            justifyContent: "center",
          }}
        >
          {!isMobile && (
            <DonutChart
              responsive
              onMouseEnter={(item) => {
                setSelectedLabel(item);
                return item;
              }}
              onClick={(item, toggled) => {
                if (toggled) {
                  console.log(`selecting: ${item.label}`);
                  setSelectedLabel(item);
                } else {
                  console.log(`unselecting: ${item.label}`);
                  setSelectedLabel({});
                }
                return item;
              }}
              data={data}
              colors={colors}
              strokeColor="transparent"
              selectedOffset={0.05}
              style={{ color: "white" }}
              legend={false}
              height={isMobile ? 168 : 368}
              width={isMobile ? 168 : 368}
              formatValues={(values, total) =>
                `${((values / total) * 100).toFixed(0)}%`
              }
            />
          )}
        </Col>
        <Col span={7} xs={24} sm={24} md={24} lg={7} xl={7}>
          {data.map((item, ind) => (
            <div
              onMouseEnter={() => setSelectedLabel(item)}
              // onMouseLeave={() => setSelectedLabel({})}
              style={{
                padding: isMobile || isTablet ? "12px 1rem" : "12px 0",
                borderBottom: "3px solid #748fb538",
                marginBottom: 4,
                width: "100%",
              }}
            >
              <Row align="middle">
                <Col span={8}>
                  <span
                    style={{
                      color: colors[ind],
                      fontFamily: "Poppins",
                      fontSize: isMobile || isTablet ? "1.2rem" : 28,
                      fontWeight: "600",
                    }}
                  >{`${item.value}%`}</span>
                </Col>
                <Col span={16}>
                  <span
                    style={{
                      color: "#E5E6ED",
                      fontFamily: "Inter",
                      fontSize: isMobile || isTablet ? "1rem" : 22,
                      fontWeight: "500",
                    }}
                  >
                    {item.label}
                  </span>
                </Col>
              </Row>
            </div>
          ))}
        </Col>

        {/* {Object.keys(selectedLabel).length ? (
          <div
            style={{
              position: "absolute",
              top: "36%",
              left: 88,
              width: "16vw",
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "600",
                fontFamily: "Inter",
                fontSize: 32,
                textAlign: "center",
                marginBottom: 9,
              }}
            >
              {`${selectedLabel.value}%`}
            </p>
            <p
              style={{
                color: "white",
                fontFamily: "Inter",
                fontSize: 14,
                textAlign: "center",
                overflowWrap: "break-word",
              }}
            >
              {selectedLabel.label}
            </p>
          </div>
        ) : null} */}

        <div
          style={{
            position: "absolute",
            bottom: 88,
            left: 368,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: isMobile || isTablet ? "none" : "flex",
          }}
        >
          <div
            style={{
              width: 39,
              height: 2,
              backgroundColor: colors[0],
              transform: "rotate(45deg)",
            }}
          ></div>
          <span
            style={{
              color: colors[0],
              fontFamily: "Poppins",
              fontSize: 15,
            }}
          >
            {`${data[0].label}: `}
            <span
              style={{ fontWeight: "700", fontSize: 16 }}
            >{`${data[0].value}%`}</span>
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 268,
            display: isMobile || isTablet ? "none" : "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              width: 28,
              height: 2,
              backgroundColor: colors[1],
              transform: "rotate(68deg)",
            }}
          ></div>
          <span
            style={{
              color: colors[1],
              fontFamily: "Poppins",
              fontSize: 15,
            }}
          >
            {`${data[1].label}: `}
            <span
              style={{ fontWeight: "700", fontSize: 16 }}
            >{`${data[1].value}%`}</span>
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 39,
            left: -28,
            display: isMobile || isTablet ? "none" : "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              color: colors[2],
              fontFamily: "Poppins",
              fontSize: 15,
            }}
          >
            {`${data[2].label}: `}
            <span
              style={{ fontWeight: "700", fontSize: 16 }}
            >{`${data[2].value}%`}</span>
          </span>
          <div
            style={{
              width: 39,
              height: 2,
              backgroundColor: colors[2],
              transform: "rotate(-45deg)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 18,
            display: isMobile || isTablet ? "none" : "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              color: colors[3],
              fontFamily: "Poppins",
              fontSize: 15,
            }}
          >
            {`${data[3].label}: `}
            <span
              style={{ fontWeight: "700", fontSize: 16 }}
            >{`${data[3].value}%`}</span>
          </span>
          <div
            style={{
              width: 39,
              height: 2,
              backgroundColor: colors[3],
              transform: "rotate(45deg)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 268,
            display: isMobile || isTablet ? "none" : "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: 28,
              height: 2,
              backgroundColor: colors[4],
              transform: "rotate(-45deg)",
            }}
          ></div>
          <span
            style={{
              color: colors[4],
              fontFamily: "Poppins",
              fontSize: 15,
            }}
          >
            {`${data[4].label}: `}
            <span
              style={{ fontWeight: "700", fontSize: 16 }}
            >{`${data[4].value}%`}</span>
          </span>
        </div>
      </Row>

      <p style={styles.txtTitle}>Vesting Schedule</p>
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
        onScroll={(e) => {
          if (!e.scrollX) {
            onClose2();
          }
        }}
      >
        {isVisible2 && (
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "20%",
              backgroundColor: "black",
              opacity: 0.8,
              padding: "8px 12px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              display: isMobile || isTablet ? "flex" : "none",
            }}
          >
            <img
              src={require("../../assets/icons/scroll-hand.png")}
              alt="scroll"
              width="24px"
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "0.88rem",
                color: "white",
                marginTop: 9,
                fontFamily: "Inter",
              }}
            >
              You can scroll
            </p>
          </div>
        )}

        <div style={styles.headerTable}>
          <span style={styles.txtHeaderPhase}>Phase</span>
          <span style={styles.txtHeaderTitle}>Proportion</span>
          <span style={styles.txtHeaderTitle}>Amount</span>
          <span style={styles.txtHeaderTitle}>TGE</span>
          <span style={styles.txtHeaderInvestingPeriod}>Vesting Period</span>
        </div>
        <div>
          <div style={styles.contentRow}>
            <span style={styles.txtContentPhase}>Seed Sale</span>
            <span style={styles.txtPropotion}>4%</span>
            <span style={styles.txtContent}>40,000,000</span>
            <span style={styles.txtTGE}>5%</span>
            <span style={styles.txtVestingPeriod}>
              5% release at TGE, 3 months cliff, linear vesting in 18 months
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContentPhase}>Private sale</span>
            <span style={styles.txtPropotion}>12%</span>
            <span style={styles.txtContent}>120,000,000</span>
            <span style={styles.txtTGE}>5%</span>
            <span style={styles.txtVestingPeriod}>
              5% release at TGE, 3 months cliff, linear vesting in 15 months
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContentPhase}>Public Sale</span>
            <span style={styles.txtPropotion}>4%</span>
            <span style={styles.txtContent}>40,000,000</span>
            <span style={styles.txtTGE}>25%</span>
            <span style={styles.txtVestingPeriod}>
              25% release at TGE, linear vesting in 3 months
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContentPhase}>Community Incentives</span>
            <span style={styles.txtPropotion}>25%</span>
            <span style={styles.txtContent}>250,000,000</span>
            <span style={styles.txtTGE}>0%</span>
            <span style={styles.txtVestingPeriod}>
              3 months cliff, linear vesting in 36 months
            </span>
          </div>
          <div style={styles.contentRow}>
            <span
              style={styles.txtContentPhase}
            >{`Ecosystem & Development`}</span>
            <span style={styles.txtPropotion}>20%</span>
            <span style={styles.txtContent}>200,000,000</span>
            <span style={styles.txtTGE}>0.5%</span>
            <span style={styles.txtVestingPeriod}>
              0.5% release at TGE, cliff 3 months, linear vesting in 36 months
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContentPhase}>Liquidity</span>
            <span style={styles.txtPropotion}>10%</span>
            <span style={styles.txtContent}>100,000,000</span>
            <span style={styles.txtTGE}>10%</span>
            <span style={styles.txtVestingPeriod}>
              10% release at TGE, linear vesting in 12 months
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContentPhase}>Team</span>
            <span style={styles.txtPropotion}>20%</span>
            <span style={styles.txtContent}>200,000,000</span>
            <span style={styles.txtTGE}>0%</span>
            <span style={styles.txtVestingPeriod}>
              12 months cliff, linear vesting in 36 months
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContentPhase}>Advisors</span>
            <span style={styles.txtPropotion}>5%</span>
            <span style={styles.txtContent}>50,000,000</span>
            <span style={styles.txtTGE}>0%</span>
            <span style={styles.txtVestingPeriod}>
              5% release at TGE, 12 months cliff, linear vesting in 24 months
            </span>
          </div>
        </div>
      </div>

      <Row
        style={{
          marginTop: isMobile || isTablet ? 12 : 80,
          padding: isMobile || isTablet ? "18px" : "0px",
        }}
      >
        <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
          <p style={styles.txtInitialTitle}>
            Initial Circulating Supply (Token)
          </p>
          <p style={styles.txtNumberToken}>29,000,000</p>
          {/* <Button style={styles.btnBuyToken} className="btnBuyToken">
            <span
              style={{
                fontFamily: "Inter",
                color: "white",
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Join us
            </span>
          </Button> */}
        </Col>
        <Col span={10} span={10} xs={24} sm={24} md={24} lg={10} xl={10}>
          <p style={styles.txtInitialTitle}>Initial Market Cap</p>
          <p style={styles.txtNumberMarket}>
            <span style={styles.txtDollar}>$</span>580,000
          </p>
        </Col>
      </Row>
    </div>
  );
};
