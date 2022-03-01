import React, { useEffect, useState } from "react";
import { Row, Col, Drawer } from "antd";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

const Navbar = ({ width, isDesktop, isMobile, isTablet }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const styles = {
    navTxtActive: {
      color: "white",
      fontSize: 16,
      fontFamily: "Inter",
      fontWeight: "600",
      letterSpacing: 0.68,
      textAlign: "right",
    },
    navTxt: {
      // color: "#A5ADCF",
      fontSize: "0.96rem",
      fontFamily: "Inter",
      fontWeight: "600",
      letterSpacing: 0.68,
      textAlign: "right",
      cursor: "pointer",
      marginLeft: 24,
    },
    navMobileTxt: {
      color: "#A5ADCF",
      fontSize: "17px",
      fontFamily: "Inter",
      cursor: "pointer",
    },
  };

  return (
    <div
      className="kalaNavbar"
      style={{
        paddingTop: 36,
      }}
    >
      <Row align="middle">
        <Col span={6}>
          <img
            src={require("../../assets/icons/logo.png")}
            alt="logo"
            width="123vw"
          />
        </Col>
        <Col span={18}>
          <Row
            style={{ width: "100%", height: "100%" }}
            align="middle"
            justify="end"
          >
            {width < 1316 ? (
              <img
                alt="menu"
                width="32px"
                src={require("../../assets/icons/nav-mobile.png")}
                onClick={showDrawer}
              />
            ) : (
              <>
                <p
                  onClick={scrollToTop}
                  style={styles.navTxt}
                  className="kalaNavLink"
                >
                  Home
                </p>
                {/* <Link
                  to="value"
                  spy={true}
                  smooth={true}
                  // offset={-150}
                  duration={500}
                >
                  <p style={styles.navTxt} className="kalaNavLink">
                    Value
                  </p>
                </Link> */}
                <Link
                  to="tokennomic"
                  spy={true}
                  smooth={true}
                  // offset={-150}
                  duration={500}
                >
                  <p style={styles.navTxt} className="kalaNavLink">
                    Tokenomics
                  </p>
                </Link>
                <Link
                  to="distribution"
                  spy={true}
                  smooth={true}
                  // offset={-150}
                  duration={500}
                >
                  <p style={styles.navTxt} className="kalaNavLink">
                    Distribution
                  </p>
                </Link>
                <Link
                  to="roadmap"
                  spy={true}
                  smooth={true}
                  // offset={-150}
                  duration={500}
                >
                  <p style={styles.navTxt} className="kalaNavLink">
                    Roadmap
                  </p>
                </Link>
                {/* 
              <Link
                to="ido"
                spy={true}
                smooth={true}
                // offset={-150}
                duration={500}
              >
                <p style={styles.navTxt} className="kalaNavLink">
                  IDO
                </p>
              </Link>
           */}

                <Link
                  to="teams"
                  spy={true}
                  smooth={true}
                  // offset={-150}
                  duration={500}
                >
                  <p
                    style={styles.navTxt}
                    className="kalaNavLink"
                  >{`Team & Partners`}</p>
                </Link>

                <Link
                  to="documents"
                  spy={true}
                  smooth={true}
                  // offset={-150}
                  duration={500}
                >
                  <p style={styles.navTxt} className="kalaNavLink">
                    Documents
                  </p>
                </Link>
              </>
            )}
          </Row>
        </Col>
      </Row>
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        closable={false}
        bodyStyle={{ backgroundColor: "#1b1f2a" }}
        headerStyle={{ backgroundColor: "#1b1f2a" }}
      >
        <p
          onClick={scrollToTop}
          style={styles.navMobileTxt}
          className="kalaNavLink"
        >
          Home
        </p>
        {/* <Link
          to="value"
          spy={true}
          smooth={true}
          // offset={-150}
          duration={500}
          onClick={onClose}
        >
          <p style={styles.navMobileTxt} className="kalaNavLink">
            Value
          </p>
        </Link> */}
        <Link
          to="tokennomic"
          spy={true}
          smooth={true}
          // offset={-150}
          duration={500}
          onClick={onClose}
        >
          <p style={styles.navMobileTxt} className="kalaNavLink">
            Tokenomics
          </p>
        </Link>
        <Link
          to="distribution"
          spy={true}
          smooth={true}
          // offset={-150}
          duration={500}
          onClick={onClose}
        >
          <p style={styles.navMobileTxt} className="kalaNavLink">
            Distribution
          </p>
        </Link>
        <Link
          to="roadmap"
          spy={true}
          smooth={true}
          // offset={-150}
          duration={500}
          onClick={onClose}
        >
          <p style={styles.navMobileTxt} className="kalaNavLink">
            Roadmap
          </p>
        </Link>
        <Link
          to="teams"
          spy={true}
          smooth={true}
          // offset={-150}
          duration={500}
          onClick={onClose}
        >
          <p
            style={styles.navMobileTxt}
            className="kalaNavLink"
          >{`Team & Partners`}</p>
        </Link>
        <Link
          to="documents"
          spy={true}
          smooth={true}
          // offset={-150}
          duration={500}
          onClick={onClose}
        >
          <p style={styles.navMobileTxt} className="kalaNavLink">
            Documents
          </p>
        </Link>
      </Drawer>
    </div>
  );
};

export default Navbar;
