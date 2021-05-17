import React from "react";
import Sidebar from "../layout/Sidebar";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../pages/Login";
import { useSelector } from "react-redux";
import Header from "../layout/Header";
import DatosAuto from "../pages/DatosAuto";
import ArmaPlan from "../pages/ArmaPlan";
import Bienvenida from "../pages/Bienvenida";

const { Content } = Layout;

export const RouterPage = () => {
  const AuthStatus = useSelector((state) => state.Auth.AuthStatus);
  const FinalStatus = useSelector((state) => state.Global.FinalStatus);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {AuthStatus ? (
          <Layout style={{ height: "100vh" }}>
            <Header />
            <Layout>
              <Route path="/bienvenida" component={Bienvenida} />
              {!FinalStatus && (
                <>
                  <Sidebar />
                  <Layout>
                    <Content
                      className="site-layout-background"
                      style={{
                        paddingTop: "4%",
                        margin: 0,
                        minHeight: 280,
                        backgroundColor: "white",
                      }}
                    >
                      <Route path="/datos-auto" component={DatosAuto} />
                      <Route path="/arma-plan" component={ArmaPlan} />
                    </Content>
                  </Layout>
                </>
              )}
            </Layout>
          </Layout>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </Router>
  );
};
