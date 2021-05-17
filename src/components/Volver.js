import React from "react";
import { Button, Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Volver = ({ enlace, inicio }) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const volver = () => {
    if (inicio) {
      dispatch({ type: "SIGNOUT", payload: null });
    } else {
      dispatch({ type: "SIDEBAR", payload: 0 });
      history.push(enlace);
    }
  };
  return (
    <Row>
      <Col xl={24} lg={24} sm={24} xs={24}>
        <Button
          shape="circle"
          icon={<LeftOutlined style={{ fontSize: "12px" }} />}
          size="small"
          danger
          onClick={volver}
        />
        <label className="label">VOLVER</label>
      </Col>
    </Row>
  );
};

export default Volver;
