import React from "react";
import { Col, Row } from "antd";
import { Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

export const HomeLayout = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Row className="app">
            <Col flex="200px" style={{ background: "yellow" }}>
              <Sidebar />
            </Col>
            <Col flex="auto" style={{background:"#999"}}>
              <Header />
              <props.component {...propsRoute} />
            </Col>
          </Row>
        );
      }}
    />
  );
};
