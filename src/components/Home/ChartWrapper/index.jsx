import React, { useState } from "react";

// @import styles
import {
  ChartWraper,
  ChartTopWrapper,
  SelectedCoin,
  CoinImg,
  CoinName,
  CurrentCoin,
  PriceList,
  PriceItem,
} from "./chart.style";
// @import resource
import Chart from "./Chart";
import { AiOutlineCaretDown } from "react-icons/ai";

const ChartComponent = () => {
  const [selectedCoin, setSelectedCoin] = useState({
    coinName: "ETH/USDT",
    coinDesc: "Ethereum",
  });
  const [currentValue, setCurrentValue] = useState({
    coinValue: "1,627.77",
    coinRate: "-61.32",
    coinPro: "-3.60%",
  });
  const [currentPrice, setCurrentPrice] = useState([
    {
      title: "Fiat price",
      value: "1,629.62 USD",
    },
    {
      title: "24H High",
      value: "1,629.62",
    },
    {
      title: "24H Low",
      value: "1,629.62",
    },
    {
      title: "24H Vol",
      value: "158.56M USDT",
    },
  ]);
  return (
    <ChartWraper>
      <ChartTopWrapper>
        <SelectedCoin>
          <CoinImg src="/assets/image/eth.png" alt="" />
          <CoinName>
            <div>
              {selectedCoin.coinName}
              <AiOutlineCaretDown />
            </div>
            <span>{selectedCoin.coinDesc}</span>
          </CoinName>
        </SelectedCoin>
        <CurrentCoin>
          <div>{currentValue.coinValue}</div>
          <span>{`${currentValue.coinRate} ${currentValue.coinPro}`}</span>
        </CurrentCoin>
        <PriceList>
          {currentPrice.map((e, index) => (
            <PriceItem key={`${index}t`}>
              <div>{e.title}</div>
              <span>{e.value}</span>
            </PriceItem>
          ))}
        </PriceList>
      </ChartTopWrapper>
      <Chart />
    </ChartWraper>
  );
};

export default ChartComponent;
