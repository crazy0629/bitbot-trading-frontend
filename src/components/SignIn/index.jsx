import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// @import styles
import {
  HomeContainer,
  SigninWrapper,
  Title,
  CusInputWrapper,
  Btn,
  ForgotWrapper,
} from "./style";
// @import resource
import openNotification from "../Notification";
import { serverURL } from "../../actions/config";
// table columns
const MyBotComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email === "") {
      openNotification("warning", "Please input your email");
      return;
    } else if (password === "") {
      openNotification("warning", "Please input your password");
      return;
    } else
      axios
        .post(`${serverURL}/api/signin`, { email, password })
        .then((res) => {
          if (res) {
            openNotification("success", "login successful!!");
            localStorage.setItem("userInfo", JSON.stringify(res.data.data));
            navigate("/dashboard");
          }
        })
        .catch((err) => console.log(err.response.data));
  };

  return (
    <HomeContainer>
      <SigninWrapper>
        <Title>Sign in</Title>
        <CusInputWrapper>
          <span>Email</span>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </CusInputWrapper>
        <CusInputWrapper>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CusInputWrapper>
        <Btn onClick={() => handleSubmit()}>Login</Btn>
        <ForgotWrapper>
          Don't have an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </ForgotWrapper>
      </SigninWrapper>
    </HomeContainer>
  );
};

export default MyBotComponent;
