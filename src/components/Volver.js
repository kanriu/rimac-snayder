import React from "react";
import { Button, Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { startSignOut } from "../redux/actions/auth";

const Volver = ({ enlace, inicio }) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const volver = () => {
    if (inicio) {
      dispatch(startSignOut());
    } else {
      dispatch({ type: "SIDEBAR", payload: 0 });
      history.push(enlace);
    }
  };
  return (
    <Row align="middle">
      <Col>
        <Button
          shape="circle"
          icon={<LeftOutlined style={{ fontSize: "12px" }} />}
          size="small"
          danger
          onClick={volver}
        />
      </Col>
      <Col>
        <label className="label">VOLVER</label>
      </Col>
    </Row>
  );
};

export default Volver;
