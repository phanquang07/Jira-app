import { Col, Row } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { uLogin } = useSelector((state) => state.loginReducer);

  const renderUserName = () => {
    if (uLogin != null) {
      return (
        <NavLink className="nav-link" to="/profile">
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

  const onSearch = (value) => console.log(value);

  return (
    <div className="header" style={{ background: "orange" }}>
      <Row className="header-content" align='middle'>
        <Col flex='200px'>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            allowClear
            enterButton
          />
        </Col>
        <Col flex="auto">
          <div className="profile">
            <p className="profile-item" style={{textAlign: 'end'}}>{renderUserName()}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
