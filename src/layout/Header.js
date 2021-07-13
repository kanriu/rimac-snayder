import React from "react";
import { Layout, Row, Col } from "antd";
import logo from "../assets/images/logo_rimac.png";
import { PhoneTwoTone } from "@ant-design/icons";

const HeaderAntd = Layout.Header;

const Header = () => {
  return (
    <HeaderAntd className="content">
      <Row className="ejemplo" justify="space-between">
        <Col>
          <img className="header-left" src={logo} alt="logo" />
        </Col>
        <Col>
          <div className="header-right">
            ¿Tienes alguna duda? &nbsp;&nbsp;
            <PhoneTwoTone /> <a>(01) 411 6001</a>
          </div>
        </Col>
      </Row>
    </HeaderAntd>
  );
};

export default Header;
