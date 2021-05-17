import React, { useState } from "react";
import { Button, Card, Col, Row, Radio, Divider, InputNumber } from "antd";
import { RightOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "../assets/css/DatosAuto.css";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import car from "../assets/images/car_rimac.PNG";
import { useHistory } from "react-router-dom";
import Volver from "../components/Volver";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const DatosAuto = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const classes = useStyles();
  const user = useSelector((state) => state.Auth.User);
  const [auto, setAuto] = useState({
    age: "",
    marca: "",
    monto: 12500,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setAuto({
      ...auto,
      [name]: event.target.value,
    });
  };

  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const nextPage = () => {
    dispatch({ type: "SIDEBAR", payload: 1 });
    dispatch({ type: "AUTO", payload: auto });
    history.push("/arma-plan");
  };

  const plusOrMinus = (value) => {
    if (value === "plus") {
      if (auto.monto < 16500) {
        setAuto({
          ...auto,
          monto: auto.monto + 100,
        });
      }
    } else {
      if (auto.monto > 12500) {
        setAuto({
          ...auto,
          monto: auto.monto - 100,
        });
      }
    }
  };

  return (
    <>
      <Row justify="center">
        <Col xl={15} sm={24} xs={24}>
          <Card bordered={false}>
            <Volver enlace="" inicio={true} />
            <Row>
              <Col>
                <div className="label-saludo">
                  ¡Hola, <label>{user.name}!</label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="label-completar">
                  Completa los datos de tu auto
                </label>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col xl={14} sm={16}>
                <Row style={{ marginTop: "6%" }}>
                  <Col xl={24} lg={24} sm={24} xs={24}>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Año
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={auto.age}
                        onChange={handleChange}
                        name="age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col xl={24} lg={24} sm={24} xs={24}>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Marca
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={auto.marca}
                        onChange={handleChange}
                        name="marca"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="BMW">BMW</MenuItem>
                        <MenuItem value="Audi">Audi</MenuItem>
                        <MenuItem value="Ford">Ford</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
                <Row
                  justify="space-around"
                  style={{ marginTop: "7%", marginBottom: "10%" }}
                >
                  <Col>
                    <label className="label-completar">
                      ¿Tu auto es a gas?
                    </label>
                  </Col>
                  <Col>
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>Sí</Radio>
                      <Radio value={2}>No</Radio>
                    </Radio.Group>
                  </Col>
                </Row>
                <Divider />
                <Row
                  style={{ marginTop: "10%", marginBottom: "5%" }}
                  justify="space-between"
                >
                  <Col>
                    <Row>
                      <Col>
                        <label className="label-completar">
                          Indica la suma asegurada
                        </label>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: "5%" }}>
                      <Col>
                        <label className="label-numero">MIN $12,500</label>
                      </Col>
                      <Divider type="vertical" />
                      <Col>
                        <label className="label-numero">MAX $16,500</label>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Button
                      className="btn-left"
                      size="large"
                      onClick={() => plusOrMinus("minus")}
                    >
                      <MinusOutlined />
                    </Button>

                    <InputNumber
                      className="input-number"
                      formatter={(value) =>
                        `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      min={12500}
                      max={16500}
                      size="large"
                      value={auto.monto}
                      onChange={(value) => setAuto({ ...auto, monto: value })}
                    />
                    <Button
                      className="btn-right"
                      size="large"
                      onClick={() => plusOrMinus("plus")}
                    >
                      <PlusOutlined />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      className="submit"
                      style={{ marginBottom: "10%" }}
                      onClick={nextPage}
                    >
                      CONTINUAR <RightOutlined />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xl={8} sm={6}>
                <Row>
                  <Col>
                    <label className="label-ayuda">AYUDA</label>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col xl={14} sm={14}>
                    <Row>
                      <Col>
                        <label className="label-completar">
                          ¿No encuentras el modelo?
                        </label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <a>CLIC AQUÍ</a>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={10} sm={10}>
                    <img src={car} alt="car" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DatosAuto;
