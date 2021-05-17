import React from "react";
import { Button, Col, Row, Space } from "antd";
import bienvenida from "../assets/images/bienvenida.PNG";
import "../assets/css/Bienvenida.css";
import { useSelector } from "react-redux";

const Bienvenida = () => {
  const user = useSelector((state) => state.Auth.User);

  return (
    <Row align="middle" style={{ backgroundColor: "white" }}>
      <Col>
        <img src={bienvenida} alt="bienvenida" style={{ width: "80%" }} />
      </Col>
      <Col xl={8} lg={8} style={{ padding: "5%" }}>
        <Space direction="vertical" size={11}>
          <Row>
            <Col>
              <label className="final-title">¡Te damos la bienvenida!</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="final-subtitle">
                Cuenta con nosotros para proteger tu vehículo
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="final-mensaje">
                Enviaremos la confirmación de compra de tu Plan Vehícular
                Tracking a tu correo:
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="final-correo">{user.email}</label>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Button className="submit">CÓMO USAR MI SEGURO</Button>
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default Bienvenida;
