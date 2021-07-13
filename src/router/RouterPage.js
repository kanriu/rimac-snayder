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
  const authStatus = useSelector((state) => state.auth.authStatus);
  const finalStatus = useSelector((state) => state.global.finalStatus);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {authStatus ? (
          <Layout style={{ height: "100vh" }}>
            <Header />
            <Layout>
              <Route path="/bienvenida" component={Bienvenida} />
              {!finalStatus && (
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
