import React from "react";
import { Row, Col, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

export default ({ width, isDesktop, isMobile, isTablet }) => {
  const styles = {
    card: {
      marginTop: 123,
      backgroundColor: "#2C353D",
      width: "100%",
      borderRadius: 24,
      position: "relative",
      border: "1px solid #5a5a5a",
      padding: "68px 48px",
      padding: isMobile ? "4px" : isTablet ? "36px 18px" : "68px 48px",
      paddingTop: 0,
      minHeight: 680,
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
      marginTop: isMobile || isTablet ? 39 : 80,
    },
    txtContent: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "1rem" : 12,
      color: "white",
      marginBottom: 4,
    },
    cardItem: {
      width: "90%",
      padding: isMobile ? "0" : isTablet ? "3vw" : "1.68vw",
      borderRadius: 9,
      paddingTop: 9,
    },
    txtName: {
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: isMobile || isTablet ? "1.3rem" : "1vw",
      color: "white",
      textAlign: "center",
      marginTop: 32,
      marginBottom: 6,
    },
    txtPosition: {
      fontFamily: "Inter",
      fontSize: isMobile || isTablet ? "1rem" : 15,
      color: "#BAC3CA",
      textAlign: "center",
    },
    center: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "50%",
      width: 128,
      height: 120,
    },
    ulStyle: {
      color: "#d7d7d7",
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: isMobile || isTablet ? "0.88rem" : "0.79vw",
      width: "100%",
      listStylePosition: "inside",
      paddingLeft: 0,
      padding: isMobile ? "0 2rem" : "0",
    },
  };

  return (
    <div style={styles.card} id="teams">
      <img
        src={require("../../assets/images/gradient1.png")}
        alt="gradient"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0.6 }}
        width="560px"
      />
      <p style={styles.txtTitle}>Our Team</p>
      {width < 1048 && !isMobile ? (
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member1.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Picard Truong</p>
                <p style={styles.txtPosition}>CEO</p>
                <ul style={styles.ulStyle}>
                  <li>Former IBM</li>
                  <li>Founder CEO of IT Software Companies</li>
                  <li>
                    16 years working with Japanese Market and others 5 years
                    working on System Development in Japan
                  </li>
                  <li>{`Big believer in Technology, Crypto & AI Trading`}</li>
                  <li>The captain at KALA Network</li>
                </ul>
              </Col>
              <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member2.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Michael Phan</p>
                <p style={styles.txtPosition}>COO</p>
                <ul style={styles.ulStyle}>
                  <li>16 Years in IT industry</li>
                  <li>10 Years as Manager in Japan IT Big Corp</li>
                  <li>
                    Product development for some startups in Silicon Valley
                  </li>
                  <li>{`Hitechmania & Natural Team Player`}</li>
                  <li>Product Chief at KALA Network</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member3.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Vu Truong</p>
                <p style={styles.txtPosition}>CTO</p>
                <ul style={styles.ulStyle}>
                  <li>20+ years in Software</li>
                  <li>Development Delivery Head of Software Company</li>
                  <li>{`Global & Big-scale Mindset`}</li>
                  <li>Chief Software Architect of the KALA Network</li>
                  <li>{`Geography & History Wikiman`}</li>
                </ul>
              </Col>
              <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member7.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Thinh Truong</p>
                <p style={styles.txtPosition}>Tech Lead</p>
                <ul style={styles.ulStyle}>
                  <li>6 Years in IT industry</li>
                  <li>4 Years as Devops, BSE in Japan</li>
                  <li>{`Tech Major in Dev team takes care all the Front & Back side of the system`}</li>
                  <li>Automation Man</li>
                </ul>
              </Col>
              {/* <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member4.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Man Ngo</p>
                <p style={styles.txtPosition}>AI Algos</p>
                <ul style={styles.ulStyle}>
                  <li>BA, Lecturer - Maths at VNUHCM-US</li>
                  <li>MA Mathematics at Université d'Orléans</li>
                  <li>Doctor of Maths - VNUHCM-US</li>
                  <li>
                    5+ years as data scientist, in AI projects with Glandore
                    System, Blueseed Digital, ATMRI-NTU, SSI.
                  </li>
                  <li>
                    Former Head of Quantitative and Computation Finance Lab -
                    John von Neumann Institute - VNU HCM
                  </li>
                </ul>
              </Col> */}
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member5.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Kiet Dao</p>
                <p style={styles.txtPosition}>CMO</p>
                <ul style={styles.ulStyle}>
                  <li>12 Years in Marketing industry</li>
                  <li>Founder of Engage – Marketing Strategy Agency</li>
                  <li>Experience in 360 degree marketing campaigns</li>
                </ul>
              </Col>
              <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member6.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Johnathan Nguyen</p>
                <p style={styles.txtPosition}>Community Growth</p>
                <ul style={styles.ulStyle}>
                  <li>Partnership and Growth Specialist</li>
                  <li>Project Manager at Trustpay Group</li>
                  <li>Project Manager at SUGA group</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={12} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member8.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Thuy Pham</p>
                <p style={styles.txtPosition}>Advisory Board Member</p>
                <ul style={styles.ulStyle}>
                  <li>{`CEO & Co- Founder of Fado Global`}</li>
                  <li>
                    Fintech Executive at blockchain companies such as TomoChain,
                    Binkabi, LATOKEN exchange
                  </li>
                  <li>Senior Manager at ANZ, HSBC</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      ) : isMobile ? (
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member1.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Picard Truong</p>
                <p style={styles.txtPosition}>CEO</p>
                <ul style={styles.ulStyle}>
                  <li>Former IBM</li>
                  <li>Founder CEO of IT Software Companies</li>
                  <li>
                    16 years working with Japanese Market and others 5 years
                    working on System Development in Japan
                  </li>
                  <li>{`Big believer in Technology, Crypto & AI Trading`}</li>
                  <li>The captain at KALA Network</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member2.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Michael Phan</p>
                <p style={styles.txtPosition}>COO</p>
                <ul style={styles.ulStyle}>
                  <li>16 Years in IT industry</li>
                  <li>10 Years as Manager in Japan IT Big Corp</li>
                  <li>
                    Product development for some startups in Silicon Valley
                  </li>
                  <li>{`Hitechmania & Natural Team Player`}</li>
                  <li>Product Chief at KALA Network</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member3.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Vu Truong</p>
                <p style={styles.txtPosition}>CTO</p>
                <ul style={styles.ulStyle}>
                  <li>20+ years in Software</li>
                  <li>Development Delivery Head of Software Company</li>
                  <li>{`Global & Big-scale Mindset`}</li>
                  <li>Chief Software Architect of the KALA Network</li>
                  <li>{`Geography & History Wikiman`}</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member7.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Thinh Truong</p>
                <p style={styles.txtPosition}>Tech Lead</p>
                <ul style={styles.ulStyle}>
                  <li>6 Years in IT industry</li>
                  <li>4 Years as Devops, BSE in Japan</li>
                  <li>{`Tech Major in Dev team takes care all the Front & Back side of the system`}</li>
                  <li>Automation Man</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member4.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Man Ngo</p>
                <p style={styles.txtPosition}>AI Algos</p>
                <ul style={styles.ulStyle}>
                  <li>BA, Lecturer - Maths at VNUHCM-US</li>
                  <li>MA Mathematics at Université d'Orléans</li>
                  <li>Doctor of Maths - VNUHCM-US</li>
                  <li>
                    5+ years as data scientist, in AI projects with Glandore
                    System, Blueseed Digital, ATMRI-NTU, SSI.
                  </li>
                  <li>
                    Former Head of Quantitative and Computation Finance Lab -
                    John von Neumann Institute - VNU HCM
                  </li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide> */}
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member5.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Kiet Dao</p>
                <p style={styles.txtPosition}>CMO</p>
                <ul style={styles.ulStyle}>
                  <li>12 Years in Marketing industry</li>
                  <li>Founder of Engage – Marketing Strategy Agency</li>
                  <li>Experience in 360 degree marketing campaigns</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member6.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Johnathan Nguyen</p>
                <p style={styles.txtPosition}>Community Growth</p>
                <ul style={styles.ulStyle}>
                  <li>Partnership and Growth Specialist</li>
                  <li>Project Manager at Trustpay Group</li>
                  <li>Project Manager at SUGA group</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row justify="space-between" align="top">
              <Col span={24} style={styles.cardItem}>
                <img
                  src={require("../../assets/images/ourTeam/member8.jpg")}
                  alt="person"
                  style={styles.center}
                />
                <p style={styles.txtName}>Thuy Pham</p>
                <p style={styles.txtPosition}>Advisory Board Member</p>
                <ul style={styles.ulStyle}>
                  <li>{`CEO & Co- Founder of Fado Global`}</li>
                  <li>
                    Fintech Executive at blockchain companies such as TomoChain,
                    Binkabi, LATOKEN exchange
                  </li>
                  <li>Senior Manager at ANZ, HSBC</li>
                </ul>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Row align="stretch" style={{ marginTop: 12 }}>
          <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member1.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Picard Truong</p>
            <p style={styles.txtPosition}>CEO</p>
            <ul style={styles.ulStyle}>
              <li>Former IBM</li>
              <li>Founder CEO of IT Software Companies</li>
              <li>
                16 years working with Japanese Market and others 5 years working
                on System Development in Japan
              </li>
              <li>{`Big believer in Technology, Crypto & AI Trading`}</li>
              <li>The captain at KALA Network</li>
            </ul>
          </Col>
          <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member2.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Michael Phan</p>
            <p style={styles.txtPosition}>COO</p>
            <ul style={styles.ulStyle}>
              <li>16 Years in IT industry</li>
              <li>10 Years as Manager in Japan IT Big Corp</li>
              <li>Product development for some startups in Silicon Valley</li>
              <li>{`Hitechmania & Natural Team Player`}</li>
              <li>Product Chief at KALA Network</li>
            </ul>
          </Col>
          <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member3.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Vu Truong</p>
            <p style={styles.txtPosition}>CTO</p>
            <ul style={styles.ulStyle}>
              <li>20+ years in Software</li>
              <li>Development Delivery Head of Software Company</li>
              <li>{`Global & Big-scale Mindset`}</li>
              <li>Chief Software Architect of the KALA Network</li>
              <li>{`Geography & History Wikiman`}</li>
            </ul>
          </Col>
          <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member7.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Thinh Truong</p>
            <p style={styles.txtPosition}>Tech Lead</p>
            <ul style={styles.ulStyle}>
              <li>6 Years in IT industry</li>
              <li>4 Years as Devops, BSE in Japan</li>
              <li>{`Tech Major in Dev team takes care all the Front & Back side of the system`}</li>
              <li>Automation Man</li>
            </ul>
          </Col>
          {/* <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member4.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Man Ngo</p>
            <p style={styles.txtPosition}>AI Algos</p>
            <ul style={styles.ulStyle}>
              <li>BA, Lecturer - Maths at VNUHCM-US</li>
              <li>MA Mathematics at Université d'Orléans</li>
              <li>Doctor of Maths - VNUHCM-US</li>
              <li>
                5+ years as data scientist, in AI projects with Glandore System,
                Blueseed Digital, ATMRI-NTU, SSI.
              </li>
              <li>
                Former Head of Quantitative and Computation Finance Lab - John
                von Neumann Institute - VNU HCM
              </li>
            </ul>
          </Col> */}
          <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member5.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Kiet Dao</p>
            <p style={styles.txtPosition}>CMO</p>
            <ul style={styles.ulStyle}>
              <li>12 Years in Marketing industry</li>
              <li>Founder of Engage – Marketing Strategy Agency</li>
              <li>Experience in 360 degree marketing campaigns</li>
            </ul>
          </Col>
          <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member6.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Johnathan Nguyen</p>
            <p style={styles.txtPosition}>Community Growth</p>
            <ul style={styles.ulStyle}>
              <li>Partnership and Growth Specialist</li>
              <li>Project Manager at Trustpay Group</li>
              <li>Project Manager at SUGA group</li>
            </ul>
          </Col>

          <Col
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            style={styles.cardItem}
            className="personCard"
          >
            <img
              src={require("../../assets/images/ourTeam/member8.jpg")}
              alt="person"
              style={styles.center}
            />
            <p style={styles.txtName}>Thuy Pham</p>
            <p style={styles.txtPosition}>Advisory Board Member</p>
            <ul style={styles.ulStyle}>
              <li>{`CEO & Co- Founder of Fado Global`}</li>
              <li>
                Fintech Executive at blockchain companies such as TomoChain,
                Binkabi, LATOKEN exchange
              </li>
              <li>Senior Manager at ANZ, HSBC</li>
            </ul>
          </Col>
        </Row>
      )}
    </div>
  );
};
