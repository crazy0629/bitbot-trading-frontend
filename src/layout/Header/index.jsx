/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// @import styles
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenus,
  MenuItem,
  ButtonGroup,
  SignBtn,
  BtnGrpItem,
  SignBtnWrapper,
} from "./header.style";
import { BsChevronDown } from "react-icons/bs";
// @import resource

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [logFlag, setLogFlag] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) setLogFlag(true);
    else setLogFlag(false);
  }, [localStorage.getItem("userInfo")]);

  const LogOut = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src="/assets/image/Header/res.gif" alt="" />
      </Link>
      <HeaderMenus>
        <MenuItem>Market</MenuItem>
        <MenuItem>
          Bitbot <BsChevronDown />
        </MenuItem>
        <Link to="/plan">
          <MenuItem>Plans and Fees</MenuItem>
        </Link>
        <MenuItem>References</MenuItem>
        <MenuItem>Exchanges</MenuItem>
      </HeaderMenus>

      <ButtonGroup>
        {logFlag ? (
          <SignBtn border={true} onClick={() => LogOut()}>
            log out
          </SignBtn>
        ) : (
          <SignBtnWrapper>
            <SignBtn border={false} onClick={() => navigate("/login")}>
              Sign in
            </SignBtn>
            <SignBtn border={true} onClick={() => navigate("/register")}>
              Sign up
            </SignBtn>
          </SignBtnWrapper>
        )}
        <BtnGrpItem src="/assets/image/Header/app-icon.png" alt="" />
        <BtnGrpItem src="/assets/image/Header/mode-icon.png" alt="" />
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default HeaderComponent;
