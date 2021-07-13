import React, { useLayoutEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import logo from "../assets/images/logo_rimac.png";
import Phone from "@material-ui/icons/Phone";

const HeaderAntd = Layout.Header;

const Header = () => {
  const [headerMovil, setHeaderMovil] = useState(false);

  const mql = window.matchMedia("(min-width:451px)");

  const applyMatchMedia = (mql) => {
    mql.matches ? setHeaderMovil(true) : setHeaderMovil(false);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", () => applyMatchMedia(mql));
    applyMatchMedia(mql);
    return () =>
      window.removeEventListener("resize", () => applyMatchMedia(mql));
  }, []);

  return (
    <HeaderAntd className="content">
      <Row className="ejemplo" justify="space-between">
        <Col md={4} sm={10} xs={16}>
          <img className="header-left" src={logo} alt="logo" />
        </Col>
        <Col xxl={5} xl={6} lg={8} md={11} sm={14} xs={8}>
          {headerMovil ? (
            <Row>
              <Col className="header-text"> ¿Tienes alguna duda? </Col>
              <Col>
                <Row className="header-link pointer ml-5">
                  <Col className="header-col">
                    <Phone />
                  </Col>
                  <Col>&nbsp;(01) 411 6001</Col>
                </Row>
              </Col>
            </Row>
          ) : (
            <div className="header-link pointer">
              <Row>
                <Col className="header-col">
                  <Phone />
                </Col>
                <Col className="ml-1">Llámanos</Col>
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </HeaderAntd>
  );
};

export default Header;
