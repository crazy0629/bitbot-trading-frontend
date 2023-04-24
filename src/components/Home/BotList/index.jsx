import React from "react";
import { useLocation } from "react-router-dom";
// @import styles
import {
  SideWraper,
  SideTitleWrapper,
  Title,
  TitleList,
  ListBtn,
  Strategy,
  ExchangeBtn,
  StrategyTitle,
  BotList,
  BotItem,
  BotLeft,
  BotImg,
  BotTitle,
  BotCreateBtn,
} from "./bot.style";
// @import resource
import { RiExchangeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideComponent = () => {
  const location = useLocation();
  const btnList = ["ALL", "Strategy", "Sideways", "Bullish", "Bearish"];
  const botlist = [
    {
      botImg: "bot1.png",
      botName: "Live and History",
      botDesc: "24/7 buy low and sell high",
      url: "/grid-trading",
    },
    {
      botImg: "bot2.png",
      botName: "My Bots",
      botDesc: "Auto reinvest, auto-compound",
      url: "/my-bots",
    },
    {
      botImg: "bot3.png",
      botName: "Marketplace",
      botDesc: "Create your own index",
      url: "/marketplace",
    },
    {
      botImg: "bot4.png",
      botName: "Subscriptions",
      botDesc: "Earn up to 50% APY at low risk",
    },
  ];
  return (
    location.pathname != "/login" &&
    location.pathname != "/register" && (
      <SideWraper>
        <SideTitleWrapper>
          <Title>Create a new bot</Title>
          <TitleList>
            {btnList.map((e, index) => (
              <ListBtn key={`${index}e`}>{e}</ListBtn>
            ))}
          </TitleList>
        </SideTitleWrapper>
        <Strategy>
          <StrategyTitle>Top Strategies</StrategyTitle>
          <Link to="/dashboard">
            <ExchangeBtn>Dashboard</ExchangeBtn>
          </Link>
          <Link to="/exchange">
            <ExchangeBtn>
              <RiExchangeLine className="riexchange" />
              My Exchanges
            </ExchangeBtn>
          </Link>
        </Strategy>
        <Strategy>
          <StrategyTitle>Most popular</StrategyTitle>
          <BotList>
            {botlist.map((e, index) => (
              <BotItem key={`${index}r`}>
                <BotLeft>
                  <BotImg src={`/assets/image/${e.botImg}`} alt="" />
                  <BotTitle>
                    <span>{e.botName}</span>
                    {e.botDesc}
                  </BotTitle>
                </BotLeft>
                <Link to={e.url}>
                  <BotCreateBtn>Create</BotCreateBtn>
                </Link>
              </BotItem>
            ))}
          </BotList>
        </Strategy>
      </SideWraper>
    )
  );
};

export default SideComponent;
