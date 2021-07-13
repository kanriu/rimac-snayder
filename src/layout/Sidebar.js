import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Layout, Steps, Row, Col } from "antd";
import { UiContext } from "../context/UiContext";
const { Sider } = Layout;
const { Step } = Steps;

const Sidebar = () => {
  const { ocultarMenu } = useContext(UiContext);
  const stepGlobal = useSelector((state) => state.global.stepGlobal);

  return (
    <Sider
      className="sidebar"
      width="380"
      collapsedWidth="0"
      breakpoint="md"
      hidden={ocultarMenu}
    >
      <Row justify="center">
        <Col>
          <Steps direction="vertical" current={stepGlobal}>
            <Step className="step" title="Datos del auto" />
            <Step className="step" title="Arma tu plan" />
          </Steps>
        </Col>
      </Row>
    </Sider>
  );
};

export default Sidebar;
