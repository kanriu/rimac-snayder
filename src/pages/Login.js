import React, { useState, useEffect, useLayoutEffect, useMemo } from "react";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Phone from "@material-ui/icons/Phone";
import { useForm, Controller } from "react-hook-form";
import {
  MenuItem,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
  Checkbox,
} from "@material-ui/core";
import { startInitial, startSignin } from "../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const authStatus = useSelector((state) => state.auth.authStatus);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      doc: "",
      celular: "",
      placa: "",
    },
  });
  const [persona, setPersona] = useState({
    tipoDoc: "DNI",
    terminos: false,
    celular: "",
    doc: "",
    email: "",
    name: "",
  });
  const [enable, setEnable] = useState(false);

  const onSubmit = (data) => {
    const dataPersona = {
      ...persona,
      placa: data.placa,
    };
    dispatch(startSignin(dataPersona));
  };

  const handleChange = ({ target }) => {
    setPersona({
      ...persona,
      [target.name]: target.value,
    });
  };

  const handleChecked = ({ target }) => {
    setEnable(target.checked);
  };

  const alreadyLogin = () => {
    return <Redirect to="/datos-auto" />;
  };

  useEffect(() => {
    dispatch(startInitial());
  }, []);

  // useEffect(() => {
  //   console.log(mql);
  // }, [mql]);
  const [headerMovil, setHeaderMovil] = useState(false);

  const mql = window.matchMedia("(min-width:401px)");

  const applyMatchMedia = (mql) => {
    mql.matches ? setHeaderMovil(true) : setHeaderMovil(false);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", () => applyMatchMedia(mql));
    applyMatchMedia(mql);
    return () =>
      window.removeEventListener("resize", () => applyMatchMedia(mql));
  }, []);

  useEffect(() => {
    if (user) {
      setPersona({
        ...persona,
        celular: user.celular,
        doc: user.doc,
        email: user.email,
        name: user.name,
      });
    }
  }, [user]);

  if (authStatus) {
    return alreadyLogin();
  }

  return (
    <>
      <Row>
        <Col xl={9} lg={11} sm={13} xs={24}>
          {!headerMovil && (
            <div className="header-link-movil pointer">
              <Row align="center">
                <Col>
                  <Phone />
                </Col>
                <Col>&nbsp;Llámanos</Col>
              </Row>
            </div>
          )}
          <div className="img-responsive" />
        </Col>
        <Col xl={15} lg={13} sm={11} xs={24}>
          {headerMovil && (
            <Row className="header" justify="end">
              <Col className="header-text"> ¿Tienes alguna duda? </Col>
              <Col>
                <Row className="header-link pointer ml-5">
                  <Col>
                    <Phone />
                  </Col>
                  <Col>&nbsp;(01) 411 6001</Col>
                </Row>
              </Col>
            </Row>
          )}

          <Row className="title" justify="center">
            <Col>
              <div>Déjanos tus datos</div>
            </Col>
          </Row>
          <Row className="body" justify="center">
            <Col xl={8} md={11} sm={22} xs={22}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mt-1 mb-1">
                  <Col md={8} xs={8}>
                    <TextField
                      select
                      variant="outlined"
                      value={persona.tipoDoc}
                      onChange={handleChange}
                      fullWidth
                      name="tipoDoc"
                    >
                      <MenuItem value="DNI">DNI</MenuItem>
                      <MenuItem value="RUC">RUC</MenuItem>
                    </TextField>
                  </Col>
                  <Col md={16} xs={16}>
                    <Controller
                      control={control}
                      name="doc"
                      {...register("doc", {
                        required: persona.doc === "" ? true : false,
                      })}
                      render={() => (
                        <TextField
                          value={persona.doc}
                          onChange={handleChange}
                          error={errors.doc ? true : false}
                          helperText={
                            errors.doc ? "Por favor, ingrese su doc." : ""
                          }
                          variant="outlined"
                          placeholder="Nro. de doc"
                          fullWidth
                          name="doc"
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row className="mt-1 mb-1">
                  <Col md={24} xs={24}>
                    <Controller
                      control={control}
                      name="celular"
                      {...register("celular", {
                        required: persona.celular === "" ? true : false,
                      })}
                      render={() => (
                        <TextField
                          value={persona.celular}
                          onChange={handleChange}
                          error={errors.celular ? true : false}
                          helperText={
                            errors.celular
                              ? "Por favor, ingrese su número de celular"
                              : ""
                          }
                          variant="outlined"
                          placeholder="Celular"
                          fullWidth
                          name="celular"
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row className="mt-1 mb-1">
                  <Col md={24} xs={24}>
                    <Controller
                      control={control}
                      name="placa"
                      {...register("placa", {
                        required: true,
                      })}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={errors.placa ? true : false}
                          helperText={
                            errors.placa
                              ? "Por favor, ingrese su número de placa"
                              : ""
                          }
                          variant="outlined"
                          placeholder="Placa"
                          fullWidth
                          margin="none"
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 mb-1" justify="center">
                  <Col md={24} xs={24}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={enable}
                            onChange={handleChecked}
                            color="default"
                            className="check-success"
                          />
                        }
                        label={
                          <div className="terminos">
                            Acepto la{" "}
                            <a href="#">
                              Política de Protección de Datos Personales
                            </a>{" "}
                            y los <a href="#">Términos y Condiciones</a>
                          </div>
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col md={24} xs={24}>
                    <Button
                      variant="contained"
                      color="primary"
                      className="btn-primary"
                      type="submit"
                      size="large"
                      fullWidth
                      disabled={!enable}
                    >
                      Cotízalo
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
