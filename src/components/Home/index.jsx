import React, { useState } from "react";

// @import styles
import { HomeContainer, BotWrapper, CoinWrapper } from "./home.style";
// @import resource

import ChartWrapper from "./ChartWrapper";
import CoinList from "./CoinList";

const HomeComponent = () => {
  const [coin, setCoin] = useState();
  return (
    <HomeContainer>
      <ChartWrapper />
      <CoinWrapper>
        <CoinList setCoin={(e) => setCoin(e)} />
      </CoinWrapper>
    </HomeContainer>
  );
};

export default HomeComponent;
