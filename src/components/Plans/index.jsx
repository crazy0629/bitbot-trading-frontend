import React, { useEffect, useState } from "react";

// @import styles
import {
  HomeContainer,
  Title,
  CardGrp,
  Card,
  CardTitle,
  CardBasicText,
  CardPay,
  UnderText,
  SelectBtn,
  CardTopWrapper,
} from "./style";
import { useNavigate } from "react-router-dom";
// @import resource

// table columns
const MyBotComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("userInfo");
    if (!auth) navigate("/login");
  }, []);

  const cardList = [
    { value: "1030", title: "Silver", balance: "Balance up to $ 10,000" },
    { value: "2030", title: "Gold", balance: "Balance up to $ 30,000" },
    { value: "5030", title: "Platinium", balance: "*Unlimited Balances" },
  ];
  return (
    <HomeContainer>
      <Title>Choose your paid subscription plan</Title>
      <CardGrp>
        {cardList.map((e, index) => (
          <Card key={`${index}y`}>
            <CardTopWrapper>
              <CardTitle>{e.title}</CardTitle>
              <CardPay>
                <span>$</span>
                {e.value}
              </CardPay>
              <CardBasicText>
                <span>Basic for beginners</span>
                <span>Valid for one year</span>
              </CardBasicText>
              <SelectBtn>Select</SelectBtn>
            </CardTopWrapper>
            <UnderText>
              <span>*Futures Trading</span>
              <span>{e.balance}</span>
              <span>20+ Cryptocurrencies</span>
              <span>*Up to 100 almultoneous trades</span>
            </UnderText>
          </Card>
        ))}
      </CardGrp>
    </HomeContainer>
  );
};

export default MyBotComponent;
