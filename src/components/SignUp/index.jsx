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
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (userData.name === "")
      openNotification("warning", "Please input your name");
    else if (userData.email === "")
      openNotification("warning", "Please input your email");
    else if (userData.password === "")
      openNotification("warning", "Please input your password");
    else {
      axios
        .post(`${serverURL}/api/register`, userData)
        .then((res) => {
          if (res) {
            openNotification("success", "register successful!!");
            navigate("/login");
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  };
  return (
    <HomeContainer>
      <SigninWrapper>
        <Title>Register</Title>
        <CusInputWrapper>
          <span>Name</span>
          <input
            type="text"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </CusInputWrapper>
        <CusInputWrapper>
          <span>Email</span>
          <input
            type="text"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </CusInputWrapper>
        <CusInputWrapper>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </CusInputWrapper>
        <Btn onClick={() => handleSubmit()}>Register</Btn>
        <ForgotWrapper>
          Do you already have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </ForgotWrapper>
      </SigninWrapper>
    </HomeContainer>
  );
};

export default MyBotComponent;
