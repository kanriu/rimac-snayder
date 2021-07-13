import React, { useState } from "react";
import {
  Button as ButtonAntd,
  Card,
  Col,
  Row,
  Divider,
  InputNumber,
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import ChevronRight from "@material-ui/icons/ChevronRight";
import car from "../assets/images/car_rimac.PNG";
import { useHistory } from "react-router-dom";
import Volver from "../components/Volver";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { setSidebar, setAutoGlobal } from "../redux/actions/global";

const DatosAuto = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      year: "",
      marca: "",
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);
  const [auto, setAuto] = useState({
    monto: 12500,
  });
  const [value, setValue] = React.useState(1);

  const handleChange = ({ target }) => {
    setValue(parseInt(target.value));
  };

  //const [value, setValue] = React.useState(1);

  // const onChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setValue(e.target.value);
  // };

  const onSubmit = (data) => {
    const dataAuto = {
      ...auto,
      year: data.year,
      marca: data.marca,
    };

    dispatch(setAutoGlobal(dataAuto));
    dispatch(setSidebar(1));
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
            <Col xl={14} sm={16} xs={24}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mt-2 mb-1">
                  <Col xl={24} lg={24} sm={24} xs={24}>
                    <Controller
                      control={control}
                      name="year"
                      {...register("year", { required: true })}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={errors.year ? true : false}
                          helperText={
                            errors.year
                              ? "Por favor, seleccione el año del carro"
                              : ""
                          }
                          select
                          variant="outlined"
                          value={errors.year}
                          fullWidth
                          label="Año"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={2021}>2021</MenuItem>
                          <MenuItem value={2020}>2020</MenuItem>
                          <MenuItem value={2019}>2019</MenuItem>
                        </TextField>
                      )}
                    />
                  </Col>
                </Row>
                <Row className="mt-1 mb-1">
                  <Col xl={24} lg={24} sm={24} xs={24}>
                    <Controller
                      control={control}
                      name="marca"
                      {...register("marca", {
                        required: true,
                      })}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={errors.marca ? true : false}
                          helperText={
                            errors.marca
                              ? "Por favor, seleccione la marca del carro"
                              : ""
                          }
                          select
                          variant="outlined"
                          value={errors.marca}
                          fullWidth
                          label="Marca"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="BMW">BMW</MenuItem>
                          <MenuItem value="Audi">Audi</MenuItem>
                          <MenuItem value="Ford">Ford</MenuItem>
                        </TextField>
                      )}
                    />
                  </Col>
                </Row>
                <Row justify="space-around" align="middle" className="mt-2">
                  <Col>
                    <label className="label-completar">
                      ¿Tu auto es a gas?
                    </label>
                  </Col>
                  <Col>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <Row align="middle">
                        <Col>
                          <FormControlLabel
                            value={1}
                            control={
                              <Radio
                                color="default"
                                className="radio-success"
                              />
                            }
                            label="Sí"
                          />
                        </Col>
                        <Col>
                          <FormControlLabel
                            value={0}
                            control={
                              <Radio
                                color="default"
                                className="radio-success"
                              />
                            }
                            label="No"
                          />
                        </Col>
                      </Row>
                    </RadioGroup>
                  </Col>
                </Row>

                <Divider />
                <Row
                  style={{ marginTop: "10%", marginBottom: "5%" }}
                  justify="space-between"
                >
                  <Col md={12} xs={24}>
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
                  <Col md={12} xs={24}>
                    <Row justify="center">
                      <Col>
                        <ButtonAntd
                          className="btn-left"
                          size="large"
                          onClick={() => plusOrMinus("minus")}
                        >
                          <MinusOutlined />
                        </ButtonAntd>

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
                          onChange={(value) =>
                            setAuto({ ...auto, monto: value })
                          }
                        />
                        <ButtonAntd
                          className="btn-right"
                          size="large"
                          onClick={() => plusOrMinus("plus")}
                        >
                          <PlusOutlined />
                        </ButtonAntd>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={24}>
                    <Button
                      variant="contained"
                      color="primary"
                      className="btn-primary"
                      type="submit"
                      size="large"
                      fullWidth
                      endIcon={<ChevronRight />}
                    >
                      Continuar
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col xl={8} sm={6} xs={24}>
              <Row justify="center">
                <Col>
                  <label className="label-ayuda">AYUDA</label>
                </Col>
              </Row>
              <Divider />
              <Row justify="center">
                <Col xl={14} sm={14} xs={19}>
                  <Row>
                    <Col>
                      <label className="label-completar">
                        ¿No encuentras el modelo?
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <a href="#">CLIC AQUÍ</a>
                    </Col>
                  </Row>
                </Col>
                <Col xl={10} sm={10} xs={5}>
                  <img src={car} alt="car" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default DatosAuto;
