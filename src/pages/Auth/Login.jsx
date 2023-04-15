import React from "react";
import { Button, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, Router, Route } from "react-router-dom";
import { history } from "../../App";
import { loginAction } from "../../redux/action/loginAction";

export default function Login() {
  const dispatch = useDispatch();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Vui lòng nhập email")
        .email("Email không đúng định dạng"),
      passWord: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      // console.log("values Login: ", values);
      let action = loginAction(values);
      dispatch(action);
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    loginFormik;
  return (
    <>
      <h3 style={{ fontWeight: "600", fontSize: 30, textAlign: "center" }}>
        Đăng nhập
      </h3>
      <form
        className="text-center p-5"
        style={{ maxWidth: 400, margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        {/* Email */}
        <div className="d-flex mt-3" style={{ margin: "10px 0" }}>
          <Input
            style={{ width: "100%" }}
            name="email"
            type="text"
            size="large"
            placeholder="Nhập email"
            prefix={<MailOutlined />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
        {touched.email && errors.email ? (
          <div
            className="d-flex text-danger"
            style={{ margin: "10px", color: "red" }}
          >
            {errors.email}
          </div>
        ) : null}
        {/* Password */}
        <div className="d-flex mt-3" style={{ margin: "10px 0" }}>
          <Input
            style={{ width: "100%" }}
            name="passWord"
            type="password"
            size="large"
            placeholder="Nhập mật khẩu"
            prefix={<LockOutlined />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passWord}
          />
        </div>
        {touched.passWord && errors.passWord ? (
          <div
            className="d-flex text-danger"
            style={{ margin: "10px", color: "red" }}
          >
            {errors.passWord}
          </div>
        ) : null}
        <Button
          htmlType="submit"
          size="large"
          style={{
            width: "100%",
            backgroundColor: "rgb(102,117,223)",
            color: "#fff",
            fontWeight: "bold",
          }}
          className="mt-3"
        >
          LOG IN
        </Button>
        <div className="d-flex mt-3" style={{ margin: "10px 0" }}>
          Bạn chưa có tài khoản? 
          <Router history={history}>
            <Link to="/register" className="mt-3">
              Đăng ký ngay!
            </Link>
          </Router>
        </div>
      </form>
    </>
  );
}
