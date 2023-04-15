import React from "react";
import { Alert, Card } from "antd";
import { ACCESS_TOKEN, ID_TOKEN, USER_LOGIN } from "../../util/setting";
import { Redirect } from "react-router-dom";
const { Meta } = Card;
// import { ID_TOKEN } from "../../util/setting";
export default function Profile() {
  if (!ID_TOKEN) {
    // <Alert message="Warning" type="warning" showIcon closable />
    alert("Bạn cần đăng nhập trước");
    return <Redirect to="/login" />;
  }
  console.log(typeof [...USER_LOGIN])
  return (
    [...USER_LOGIN].map((item) => {
      {console.log(typeof ID_TOKEN)}
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={item.avatar} />}
      ></Card>
    })
  )
}
