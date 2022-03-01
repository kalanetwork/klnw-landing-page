import React, { useState } from "react";
import { Row, Col, Button } from "antd";

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const [isVisible, setIsVisible] = useState(true);

  const styles = {
    txtTitle: {
      fontFamily: "Poppins",
      fontSize: isMobile || isTablet ? "5.8vw" : "2.8vw",
      fontWeight: "600",
      color: "#FFFFFF",
      textAlign: "left",
    },
    txt: {
      fontFamily: "Inter",
      color: "#FFFFFF",
      fontSize: isMobile || isTablet ? "0.88rem" : "0.88vw",
      fontWeight: "400",
      marginBottom: 0,
    },
    headerTable: {
      backgroundImage:
        isMobile || isTablet
          ? "none"
          : "linear-gradient(to top, #1C486800, #1C4868)",
      height: 56,
      padding: isMobile || isTablet ? "16px 0" : "16px 36px",
      paddingLeft: isMobile || isTablet ? 0 : 168,
      width: isMobile || isTablet ? "128%" : "100%",
      borderRadius: 1,
      display: "block",
    },
    txtHeaderTitle: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: isMobile || isTablet ? "0.88rem" : "1rem",
      color: "white",
      width: isMobile || isTablet ? 268 : "48%",
      backgroundImage:
        isMobile || isTablet
          ? "linear-gradient(to top, #1C486800, #1C4868)"
          : "none",
      height: isMobile || isTablet ? "200%" : "100%",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
    },
    contentRow: {
      padding: isMobile || isTablet ? "4px 0" : "48px 36px",
      paddingLeft: isMobile || isTablet ? 0 : 168,
      width: isMobile || isTablet ? "128%" : "100%",
      borderBottom: isMobile || isTablet ? "none" : "1px solid #FFFFFF1A",
      display: "flex",
    },
    txtContent: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "0.88rem" : 16,
      color: "white",
      width: isMobile || isTablet ? 268 : "48%",
      paddingRight: "4px",
      letterSpacing: 0.36,
      minHeight: isMobile || isTablet ? 36 : "100%",
      borderBottom: isMobile || isTablet ? "1px solid #FFFFFF1A" : "none",
      display: "inline-block",
      padding: isMobile || isTablet ? "9px" : 0,
      whiteSpace: "break-spaces",
    },
    ulStyle: {
      color: "#FFFFFF",
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: isMobile || isTablet ? "0.88rem" : 16,
      width: isMobile || isTablet ? 268 : "100%",
      paddingRight: "4px",
      padding: isMobile || isTablet ? "9px" : 0,
      // paddingLeft: "20px",
      marginTop: -20,
    },
    img: { marginTop: isMobile || isTablet ? 0 : -20, marginRight: 12 },
  };

  const onClose = () => {
    if (isVisible) {
      setIsVisible(false);
    }
  };

  return (
    <div
      style={{
        paddingTop: isMobile || isTablet ? "18vw" : "9vw",
      }}
      id="ecosystem"
    >
      <p style={styles.txtTitle}>Kala Network Ecosystem</p>
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
          <span style={styles.txtHeaderTitle}>Feature</span>
          <span style={styles.txtHeaderTitle}>Description</span>
        </div>
        <div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>
              <img
                src={require("../../assets/images/ecosystem/ecosystem1.png")}
                alt="scroll"
                width="48px"
                style={styles.img}
              />{" "}
              Launchpad
            </span>
            <span style={styles.txtContent}>
              <ul style={styles.ulStyle}>
                <li>Support Multi-chains: fund raising on cross-chains.</li>
                <li>
                  Help to Back new projects from KALA Network Investment
                  Community
                </li>
                <li>
                  {`Forming KALA & Associates to build up partnership & expand KALA Network to wider audiences.`}
                </li>
              </ul>
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>
              <img
                src={require("../../assets/images/ecosystem/ecosystem2.png")}
                alt="scroll"
                width="48px"
                style={styles.img}
              />
              {" Social WorkDrop & Reward"}
            </span>
            <span style={styles.txtContent}>
              <ul style={styles.ulStyle}>
                <li>
                  {`KALA provides WorkDrop & Reward mechanism to support Project Owners to help users engage & promote to their projects`}
                </li>
                <li>Post Premium Content, Engage-2-Earn, Donation...</li>
                <li>
                  Building an crypto investment community where participants can
                  discuss, share analysis about a specific projects
                </li>
                <li>
                  Building followers network where the KOLs can build their
                  loyal followers can earn incentives/dividends from their
                  curated content.
                </li>
                <li>{`Guild can issue their own respective NFT and attractive, unique enough to enroll new users to join & build up their guild together. Many community, gamification & investment activities will be organized on KALA Network.`}</li>
              </ul>
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>
              <img
                src={require("../../assets/images/ecosystem/ecosystem5.png")}
                alt="scroll"
                width="48px"
                style={styles.img}
              />{" "}
              Trading
            </span>
            <span style={styles.txtContent}>
              <ul style={styles.ulStyle}>
                <li>Copy Trading via API</li>
                <li>Trade on CEXs/DEXs</li>
                <li>Providers can post newsfeed about their trading actions, plans, strategies</li>
                <li>{`Investors/Followers: Like, Share, Comment on newsfeed`}</li>
              </ul>
            </span>
          </div>
          {/* <div style={styles.contentRow}>
            <span style={styles.txtContent}>
              <img
                src={require("../../assets/images/ecosystem/ecosystem4.png")}
                alt="scroll"
                width="48px"
                style={styles.img}
              />{" "}
              DeFi services
            </span>
            <span style={styles.txtContent}>
              <ul style={styles.ulStyle}>
                <li>Staking</li>
                <li>Farming</li>
              </ul>
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>
              <img
                src={require("../../assets/images/ecosystem/ecosystem5.png")}
                alt="scroll"
                width="48px"
                style={styles.img}
              />{" "}
              Crowd Funding
            </span>
            <span style={styles.txtContent}>
              <ul style={styles.ulStyle}>
                <li>{`Crowd fund to support a specific project (not so big, just like an artist want to open a NF gallery exhibition, a singer want to back for a new NFT single album...) --> similar to Indiegogo, Kickstarter (but in KNLW Token)`}</li>
              </ul>
            </span>
          </div>
          <div style={styles.contentRow}>
            <span style={styles.txtContent}>
              <img
                src={require("../../assets/images/ecosystem/ecosystem6.png")}
                alt="scroll"
                width="48px"
                style={styles.img}
              />{" "}
              Launchpad
            </span>
            <span style={styles.txtContent}>
              <ul style={styles.ulStyle}>
                <li>
                  Help to Back new projects from KALA Network Investment
                  Community
                </li>
                <li>
                  {`Forming KALA Associates & Venture to build up & expand KALA Network to wider audiences.`}
                </li>
              </ul>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
