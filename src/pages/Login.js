import React, { useState, useEffect } from "react";
import { Col, Row, Form, Input, Select, Checkbox, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import login from "../assets/images/login.png";
import "../assets/css/Login.css";
import { PhoneTwoTone } from "@ant-design/icons";
import Axios from "axios";
import { Url } from "../website/Url";

const { Option } = Select;

const Login = () => {
  const dispatch = useDispatch();
  const AuthStatus = useSelector((state) => state.Auth.AuthStatus);
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState({
    doc: "",
    celular: "",
    tipoDoc: "DNI",
    terminos: false,
    email: "",
    placa: "",
    name: "",
  });
  const [enable, setEnable] = useState(true);
  const getConnect = async () => {
    setLoading(true);
    try {
      let res = await Axios.get(Url + "?nat=es");
      let response = await res.data;
      console.log(response);

      setPersona({
        ...persona,
        doc: response.results[0].id.value.split("-")[0],
        celular:
          response.results[0].phone.split("-")[0] +
          response.results[0].phone.split("-")[1] +
          response.results[0].phone.split("-")[2],
        email: response.results[0].email,
        name: response.results[0].name.first,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const onFinish = (values) => {
    console.log(persona);
    dispatch({ type: "SIGNIN", payload: persona });
  };

  const onTipoDocChange = (value) => {
    setPersona({
      ...persona,
      tipoDoc: value,
    });
  };

  const onChecked = (e) => {
    setEnable(!e.target.checked);
  };

  const alreadyLogin = () => {
    return <Redirect to="/datos-auto" />;
  };

  const handleChange = (e) => {
    setPersona({
      ...persona,
      placa: e.target.value,
    });
  };

  useEffect(() => {
    getConnect();
  }, []);

  if (AuthStatus) {
    return alreadyLogin();
  }

  return (
    <>
      <Row>
        <Col xl={9} lg={11} sm={13} xs={24}>
          <img className="img-responsive" src={login} alt="login" />
        </Col>
        <Col xl={15} lg={13} sm={11} xs={24}>
          <Row className="header" justify="end">
            <Col>
              ¿Tienes alguna duda? &nbsp;&nbsp;
              <PhoneTwoTone /> <a>(01) 411 6001</a>
            </Col>
          </Row>
          <Row className="title" justify="center">
            <Col>
              <div>Déjanos tus datos</div>
            </Col>
          </Row>
          <Row className="body" justify="center">
            <Col xl={7} md={11} sm={24} xs={19}>
              {!loading && (
                <Form
                  className="login-form"
                  size="large"
                  onFinish={onFinish}
                  initialValues={{
                    doc: { tipo: persona.tipoDoc, nro: persona.doc },
                    celular: persona.celular,
                  }}
                >
                  <Form.Item>
                    <Input.Group compact>
                      <Form.Item name={["doc", "tipo"]} noStyle>
                        <Select
                          onChange={onTipoDocChange}
                          style={{ width: "30%" }}
                        >
                          <Option value="DNI">DNI</Option>
                          <Option value="RUC">RUC</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name={["doc", "nro"]}
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Por favor, ingrese su nro. de doc.",
                          },
                        ]}
                      >
                        <Input
                          style={{ width: "70%" }}
                          placeholder="Nro. de doc"
                        />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>
                  <Form.Item
                    name="celular"
                    rules={[
                      {
                        required: true,
                        message: "Por favor, ingrese su número de celular",
                      },
                    ]}
                  >
                    <Input type="number" placeholder="Celular" />
                  </Form.Item>
                  <Form.Item
                    name="placa"
                    rules={[
                      {
                        required: true,
                        message: "Por favor, ingrese su número de placa",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Placa"
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="terminos" valuePropName="checked" noStyle>
                      <Checkbox onChange={onChecked}>
                        <div className="terminos">
                          Acepto la{" "}
                          <a href="#">
                            Política de Protección de Datos Personales
                          </a>{" "}
                          y los <a href="#">Términos y Condiciones</a>
                        </div>
                      </Checkbox>
                    </Form.Item>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="submit"
                      htmlType="submit"
                      disabled={enable}
                    >
                      COTÍZALO
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
