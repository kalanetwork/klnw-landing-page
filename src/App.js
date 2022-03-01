import "./App.css";
// import { Affix } from "antd";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Carousel from "./Core/Components/Carousel";
import FundRaising from "./Core/Components/FundRaising";
import Navbar from "./Core/Components/Navbar";
import Tokennomic from "./Core/Components/Tokennomic";
import UseCase from "./Core/Components/UseCase";
import Value from "./Core/Components/Value";
// import LaunchPad from "./Core/Components/LaunchPad";
import Roadmap from "./Core/Components/Roadmap";
import OurTeam from "./Core/Components/OurTeam";
import Backer from "./Core/Components/Backer";
import Overview from "./Core/Components/Overview";
import Documents from "./Core/Components/Documents";
import GetInTouch from "./Core/Components/GetInTouch";
import Footer from "./Core/Components/Footer";
import Ecosystem from "./Core/Components/Ecosystem";
// import AnimatedCursor from "react-animated-cursor";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { animateScroll as scroll } from "react-scroll";
import ReactLoading from "react-loading";
import YouTube from "react-youtube";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("resize", handleWindowResize);
    timeoutLoading();
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const listenScrollEvent = () => {
    window.scrollY > 680 ? setShowButton(true) : setShowButton(false);
  };

  const timeoutLoading = async () => {
    await setTimeout(() => {
      setFirstLoading(false);
    }, 1680);
  };

  if (firstLoading) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#373a42",
          minHeight: window.innerHeight + 1,
          backgroundImage:
            "linear-gradient(to bottom right,rgb(18, 28, 56), rgba(0, 0, 0, 0.9), rgba(51, 56, 106, 0.8)",
        }}
      >
        <ReactLoading
          type="spinningBubbles"
          color="#FFFFFF"
          height={68}
          width={68}
        />
      </div>
    );
  }

  return (
    <ParallaxProvider>
      <div className="App">
        <div className="container">
          {/* <AnimatedCursor
        innerSize={18}
        outerSize={36}
        color="225, 225, 225"
        // outerAlpha={0.2}
        innerScale={0.88}
        outerScale={2}
        trailingSpeed={1.68}
      /> */}
          <Navbar
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />

          <Carousel
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <Overview
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <Ecosystem
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          {/* <AnimationOnScroll animateIn=" animate__fadeInUp" animateOnce>
            <Value
              width={width}
              isDesktop={isDesktop}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn=" animate__fadeInUp" animateOnce>
            <UseCase
              width={width}
              isDesktop={isDesktop}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </AnimationOnScroll> */}
          <Tokennomic
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <FundRaising
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          {/* <AnimationOnScroll animateIn=" animate__fadeInUp" animateOnce>
        <LaunchPad />
      </AnimationOnScroll> */}
          <Roadmap
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <OurTeam
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <Backer
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <Documents
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          {/* <div
            style={{
              width: "100%",
              marginTop: 123,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <YouTube videoId="TLKNLzueXdc" />
          </div> */}
          <GetInTouch
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <Footer
            width={width}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
          />
          <img
            src={require("./assets/images/gototop.png")}
            alt="gototop"
            width={isMobile ? "56vw" : "79vw"}
            style={{
              position: "fixed",
              bottom: "68px",
              right: isMobile ? "0.5vw" : "3vw",
              zIndex: 99,
              cursor: "pointer",
              paddingRight: 20,
            }}
            onClick={scrollToTop}
            className={showButton ? "goToTopBtnShow" : "goToTopBtnHide"}
          />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
