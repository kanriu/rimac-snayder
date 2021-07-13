import React from "react";
import { Col, Row, Space } from "antd";
import bienvenida from "../assets/images/bienvenida.PNG";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

const Bienvenida = () => {
  const user = useSelector((state) => state.auth.user);

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
          <Row className="mt-2">
            <Col>
              <Button
                variant="contained"
                color="primary"
                className="btn-primary"
                size="large"
                fullWidth
              >
                Cómo usar mi seguro
              </Button>
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default Bienvenida;
