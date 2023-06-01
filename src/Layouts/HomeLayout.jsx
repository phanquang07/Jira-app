import React from "react";
import { Col, Row } from "antd";
import { Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

export const HomeLayout = (props) => {
  const styled = {
    mainWrapper: {
      display: 'flex',
      flexWrap: 'no-wrap'
    },
    contents: {
      width: '100%'
    }
  }
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div className="app">
            <Header />
            <div className="main-wrap" style={styled.mainWrapper}>
              <Sidebar />
              <div className="contents" style={styled.contents}>
                <props.component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};
