import React, { useEffect, useState } from "react";
import { Select, Button, Checkbox } from "antd";

// @import styles
import {
  HomeContainer,
  CustomSelectGrp,
  Title,
  FolloWrapper,
  CardGrp,
  CustomCard,
  CustomTop,
  CustomTopLeft,
  CustomTopLeftText,
  CustomTopRight,
  BinanceTextLine,
  BinanceLeft,
  BinanceRight,
  FollowBtn,
  PercentWrapper,
  PercentText,
} from "./style";
import { useNavigate } from "react-router-dom";
// @import resource

const MyBotComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("userInfo");
    if (!auth) navigate("/login");
  }, []);

  const cardList = ["", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <HomeContainer>
      <Title>Marketplace</Title>
      <CustomSelectGrp>
        <Select
          className="custom-marketplace-class"
          defaultValue="all"
          options={[
            { value: "all", label: "Month" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <Select
          className="custom-marketplace-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All  Base Currencies" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <Select
          className="custom-marketplace-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All Exchanges" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <FolloWrapper>
          <Checkbox defaultChecked={false} /> <span>Show Followed Only</span>
        </FolloWrapper>
      </CustomSelectGrp>
      <CardGrp>
        {cardList.map((e, index) => (
          <CustomCard key={`${index}u`}>
            <CustomTop>
              <CustomTopLeft>
                <img src="/assets/image/eth.png" alt="" />
                <CustomTopLeftText>
                  <span>tologa simitcigiu</span>
                  binance_v6_leverage
                </CustomTopLeftText>
              </CustomTopLeft>
              <CustomTopRight>
                <span>$35.00 / month</span>2 Followers
              </CustomTopRight>
            </CustomTop>
            <BinanceTextLine>
              <BinanceLeft>
                <img src="/assets/image/eth.png" alt="" />
                BINANCE-FEATURES (USDT-M)
              </BinanceLeft>
              <BinanceRight>One-Way Mode</BinanceRight>
            </BinanceTextLine>
            <PercentWrapper>
              <PercentText>
                Period P/L<span>2671.83%</span>
              </PercentText>
              <img src="/assets/image/chart.png" alt="" />
            </PercentWrapper>
            <FollowBtn>Follow</FollowBtn>
          </CustomCard>
        ))}
      </CardGrp>
    </HomeContainer>
  );
};

export default MyBotComponent;
