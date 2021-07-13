import React, { useState } from "react";
import {
  Button as ButtonAntd,
  Card,
  Col,
  Divider,
  Row,
  Collapse,
  Space,
} from "antd";
import { useHistory } from "react-router-dom";
import Volver from "../components/Volver";
import { useDispatch, useSelector } from "react-redux";
import empleado from "../assets/images/empleado_rimac.PNG";
import vehicular from "../assets/images/veh_flex_rimac.PNG";
import { CheckOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import { setFinal } from "../redux/actions/global";

const { Panel } = Collapse;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ArmaPlan = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const auto = useSelector((state) => state.global.auto);
  const user = useSelector((state) => state.auth.user);
  const [value, setValue] = React.useState(0);
  const [coberturas, setCoberturas] = useState({
    robo: "",
    choque: "",
    atropello: "",
    monto: 20,
  });

  const [estado, setEstado] = useState({
    robo: true,
    choque: true,
    atropello: true,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const customExpandIcon = (props) => {
    if (props.isActive) {
      return (
        <IconButton color="default" className="icon-caret">
          <ExpandMore />
        </IconButton>
      );
    } else {
      return (
        <IconButton color="default" className="icon-caret">
          <ExpandLess />
        </IconButton>
      );
    }
  };
  const ItemPlusMinus = ({ condition, name }) => {
    if (condition === "plus") {
      return (
        <div onClick={() => agregarQuitar("agregar", name)}>
          <ButtonAntd
            type="default"
            shape="circle"
            icon={
              <PlusOutlined style={{ color: "#6F7DFF", fontSize: "16px" }} />
            }
          />
          <label className="label-icon ml-1 pointer">AGREGAR</label>
        </div>
      );
    } else {
      return (
        <div onClick={() => agregarQuitar("quitar", name)}>
          <ButtonAntd
            type="default"
            shape="circle"
            icon={
              <MinusOutlined style={{ color: "#6F7DFF", fontSize: "16px" }} />
            }
          />
          <label className="label-icon ml-1 pointer">QUITAR</label>
        </div>
      );
    }
  };

  const agregarQuitar = (value, name) => {
    if (value === "agregar") {
      switch (name) {
        case "robo":
          setCoberturas({
            ...coberturas,
            robo: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona)",
            monto: coberturas.monto + 15,
          });
          setEstado({
            ...estado,
            robo: false,
          });
          break;
        case "choque":
          setCoberturas({
            ...coberturas,
            choque:
              "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona)",
            monto: coberturas.monto + 20,
          });
          setEstado({
            ...estado,
            choque: false,
          });
          break;
        case "atropello":
          setCoberturas({
            ...coberturas,
            atropello:
              "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona)",
            monto: coberturas.monto + 50,
          });
          setEstado({
            ...estado,
            atropello: false,
          });
          break;
        default:
          break;
      }
    } else {
      switch (name) {
        case "robo":
          setCoberturas({
            ...coberturas,
            robo: "",
            monto: coberturas.monto - 15,
          });
          setEstado({
            ...estado,
            robo: true,
          });
          break;
        case "choque":
          setCoberturas({
            ...coberturas,
            choque: "",
            monto: coberturas.monto - 20,
          });
          setEstado({
            ...estado,
            choque: true,
          });
          break;
        case "atropello":
          setCoberturas({
            ...coberturas,
            atropello: "",
            monto: coberturas.monto - 50,
          });
          setEstado({
            ...estado,
            atropello: true,
          });
          break;
        default:
          break;
      }
    }
  };

  const nextPage = () => {
    dispatch(setFinal());
    history.push("/bienvenida");
  };
  return (
    <>
      <Row justify="center">
        <Col xl={18} sm={24} xs={24}>
          <Card bordered={false}>
            <Volver enlace="/datos-auto" inicio={false} />
            <Space direction="vertical" size={15}>
              <Row>
                <Col>
                  <div className="label-saludo">Mira las coberturas</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="label-completar">
                    Conoce las coberturas para tu plan
                  </label>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col xl={13} lg={14} sm={14}>
                  <PerfectScrollbar style={{ height: "400px" }}>
                    <Row>
                      <Col xl={24} lg={24} sm={24} xs={24}>
                        <Card className="card-car">
                          <Row align="middle" justify="space-between">
                            <Col xl={14} sm={14} xs={13}>
                              <div className="label-placa">
                                Placa: {user.placa}
                              </div>
                              <div className="label-marca">
                                {auto.marca} {auto.age}
                              </div>
                              <div>
                                <a>EDITAR</a>
                              </div>
                            </Col>
                            <Col>
                              <img
                                className="img-empleado"
                                src={empleado}
                                alt="empleado"
                              />
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="label-precio">
                          Agrega o quita coberturas
                        </div>

                        <AppBar style={{ boxShadow: "none" }} position="static">
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                            variant="fullWidth"
                            className="tabs-head"
                          >
                            <Tab
                              style={{ fontSize: "10px", fontWeight: "700" }}
                              label="PROTEGE A TU AUTO"
                              {...a11yProps(0)}
                            />
                            <Tab
                              style={{ fontSize: "10px", fontWeight: "700" }}
                              label="PROTEGE A LOS QUE TE RODEAN"
                              {...a11yProps(1)}
                            />
                            <Tab
                              style={{ fontSize: "10px", fontWeight: "700" }}
                              label="MEJORA TU PLAN"
                              {...a11yProps(2)}
                            />
                          </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                          <Collapse
                            defaultActiveKey={["1"]}
                            expandIconPosition="right"
                            expandIcon={(props) => customExpandIcon(props)}
                            ghost
                          >
                            <Panel
                              className="label-precio"
                              header="Llanta robada"
                              key="1"
                            >
                              <Row>
                                <Col>
                                  {estado.robo ? (
                                    <ItemPlusMinus
                                      condition="plus"
                                      name="robo"
                                    />
                                  ) : (
                                    <ItemPlusMinus
                                      condition="minus"
                                      name="robo"
                                    />
                                  )}
                                </Col>
                              </Row>
                              <Row className="mt-1">
                                <Col>{coberturas.robo}</Col>
                              </Row>
                            </Panel>
                            <Panel
                              className="label-precio"
                              header="Choque y/o pasarte la luz roja"
                              key="2"
                            >
                              <Row>
                                <Col>
                                  {estado.choque ? (
                                    <ItemPlusMinus
                                      condition="plus"
                                      name="choque"
                                    />
                                  ) : (
                                    <ItemPlusMinus
                                      condition="minus"
                                      name="choque"
                                    />
                                  )}
                                </Col>
                              </Row>
                              <Row className="mt-1">
                                <Col> {coberturas.choque}</Col>
                              </Row>
                            </Panel>
                            <Panel
                              className="label-precio"
                              header="Atropello en la vía Evitamiento"
                              key="3"
                            >
                              <Row>
                                <Col>
                                  {estado.atropello ? (
                                    <ItemPlusMinus
                                      condition="plus"
                                      name="atropello"
                                    />
                                  ) : (
                                    <ItemPlusMinus
                                      condition="minus"
                                      name="atropello"
                                    />
                                  )}
                                </Col>
                              </Row>
                              <Row className="mt-1">
                                <Col> {coberturas.atropello}</Col>
                              </Row>
                            </Panel>
                          </Collapse>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          Item Three
                        </TabPanel>
                      </Col>
                    </Row>
                  </PerfectScrollbar>
                </Col>
                <Col xl={8} lg={8} sm={8}>
                  <Row align="middle" justify="space-between">
                    <Col>
                      <div className="label-number-mensual">
                        $ {coberturas.monto.toFixed(2)}
                      </div>
                      <div className="label-text-mensual">mensuales</div>
                    </Col>
                    <Col>
                      <img
                        className="img-vehicular"
                        src={vehicular}
                        alt="vehicular"
                      />
                    </Col>
                  </Row>
                  <Divider />
                  <Row>
                    <div className="label-precio">El precio incluye:</div>
                    <div className="label-check">
                      <CheckOutlined className="check-precio" /> Llanta de
                      respuesto
                    </div>
                    <div className="label-check">
                      <CheckOutlined className="check-precio" /> Analisis de
                      motor&nbsp;&nbsp;
                    </div>
                    <div className="label-check">
                      <CheckOutlined className="check-precio" /> Aros gratis
                    </div>
                  </Row>
                  <Row className="mt-2">
                    <Col xl={24} lg={24} sm={24} xs={24}>
                      <Button
                        variant="contained"
                        color="primary"
                        className="btn-primary"
                        size="large"
                        fullWidth
                        onClick={nextPage}
                      >
                        Lo quiero
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ArmaPlan;
