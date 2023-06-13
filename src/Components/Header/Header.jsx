import { Avatar, Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { uLogin } = useSelector((state) => state.loginReducer);

  const renderUserName = () => {
    if (uLogin != null) {
      return (
        <NavLink className="nav-link" to="/profile">
          {/* {console.log(uLogin)} */}
          {uLogin.name}
        </NavLink>
      );
    } else {
      // Chưa login
      return (
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      );
    }
  };

  const styled = {
    headerWrapper: {
      height: "56px",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #E6E6E6",
      boxShadow:
        "0 1px 2px 0 rgb(0 0 0 / 5%), 0 1px 6px -1px rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 5%)",
    },
  };

  return (
    <div className="header" style={styled.headerWrapper}>
      {/* <Col flex='200px'>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            allowClear
            enterButton
          />
        </Col> */}
      <div>
        <img src="../../../public/logo/Jira-logo.png" alt="Jira Software" />
      </div>
      <div>
        <div className="profile">
          <p className="profile-item" style={{ textAlign: "end" }}>
            {renderUserName()}
          </p>
        </div>
      </div>
    </div>
  );
}
