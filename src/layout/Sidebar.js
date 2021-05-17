import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Layout, Steps, Row, Col } from "antd";
import { UiContext } from "../context/UiContext";
import "../assets/css/Sidebar.css";
const { Sider } = Layout;
const { Step } = Steps;

const Sidebar = () => {
  const { ocultarMenu } = useContext(UiContext);
  const StepGlobal = useSelector((state) => state.Global.StepGlobal);

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
          <Steps direction="vertical" current={StepGlobal}>
            <Step className="step" title="Datos del auto" />
            <Step className="step" title="Arma tu plan" />
          </Steps>
        </Col>
      </Row>
    </Sider>
  );
};

export default Sidebar;
