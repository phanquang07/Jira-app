import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link, Router } from "react-router-dom";
import { registerAction } from "../../redux/action/loginAction";
import { history } from "../../App";

export default function Register() {
  const dispatch = useDispatch();

  const registerFormik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      passWord: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập họ tên"),
      phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại"),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .email("Email không đúng định dạng"),
      passWord: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      // console.log("values Register: ", values);
      let action = registerAction(values);
      dispatch(action);
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    registerFormik;
  return (
    <div className="register">
      <h3 style={{ fontWeight: "600", fontSize: 30, textAlign: "center" }}>
        Đăng ký
      </h3>
      <form
        className="text-center p-5"
        style={{ maxWidth: 400, margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <div>
          {/* Name */}
          <div className="d-flex mt-3">
            <Input
              style={{ width: "100%" }}
              name="name"
              type="name"
              size="large"
              placeholder="Nhập họ tên"
              prefix={<UserOutlined />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          {touched.name && errors.name ? (
            <div
              className="d-flex text-danger"
              style={{ margin: "10px", color: "red" }}
            >
              {errors.name}
            </div>
          ) : null}
          {/* Phone */}
          <div className="d-flex mt-3" style={{ margin: "10px 0" }}>
            <Input
              style={{ width: "100%" }}
              name="phoneNumber"
              type="text"
              size="large"
              placeholder="Nhập số điện thoại"
              prefix={<PhoneOutlined />}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
          </div>
          {touched.phoneNumber && errors.phoneNumber ? (
            <div
              className="d-flex text-danger"
              style={{ margin: "10px", color: "red" }}
            >
              {errors.phoneNumber}
            </div>
          ) : null}
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
            REGISTER
          </Button>
          <div className="d-flex mt-3" style={{ margin: "10px 0" }}>
            Bạn đã có tài khoản?
            <Router history={history}>
              <Link to="/login" className="mt-3">
                Đăng nhập ngay!
              </Link>
            </Router>
          </div>
        </div>
      </form>
    </div>
  );
}
