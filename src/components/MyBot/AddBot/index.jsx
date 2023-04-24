import React, { useState } from "react";
import TakeProfitComponent from "./takeprofit";
import StopLossComponent from "./stoploss";
import TrailingStopComponent from "./trailingstop";
import DCAComponent from "./dca";
import TradingAmountComponent from "./tradingamount";
import TimeFrameComponent from "./timeframe";
import OrderTypeComponent from "./ordertype";

import {
  HomeContainer,
  SubWrapper,
  MainLabel,
  SubLabel,
  ExchangeWrapper,
  ExchangeItem,
  ApiItem,
  BtnGroupWrapper,
  CheckBoxWrapper,
  WarningContainer,
  NoticeContainer,
  CreateBotButton,
} from "./add.style";

import { Input, Select, Button, Checkbox } from "antd";

const exchangeTypeList = [
  { value: "BINANCE-SPOT", label: "BINANCE-SPOT" },
  { value: "BINANCE-FUTURES (COIN-M)", label: "BINANCE-FUTURES (COIN-M)" },
  { value: "BINANCE-FUTURES (USDT-M)", label: "BINANCE-FUTURES (USDT-M)" },
  { value: "BITFINEX-SPOT", label: "BITFINEX-SPOT" },
  { value: "BITGET-SPOT", label: "BITGET-SPOT" },
  { value: "BITGET-SWAP (USDT-M)", label: "BITGET-SWAP (USDT-M)" },
  { value: "BITGET-SWAP (COIN-M)", label: "BITGET-SWAP (COIN-M)" },
  { value: "BITMEX", label: "BITMEX" },
  { value: "BYBIT-SWAP (USDT-M)", label: "BYBIT-SWAP (USDT-M)" },
  { value: "BYBIT-SPOT", label: "BYBIT-SPOT" },
  { value: "COINBASE-PRO", label: "COINBASE-PRO" },
  { value: "DERIBIT", label: "DERIBIT" },
  { value: "GATEIO-SPOT", label: "GATEIO-SPOT" },
  { value: "GATEIO-SWAP", label: "GATEIO-SWAP" },
  { value: "HUOBI-SPOT", label: "HUOBI-SPOT" },
  { value: "HUOBI Coln Perpetual", label: "HUOBI Coln Perpetual" },
  { value: "KRAKEN", label: "KRAKEN" },
  { value: "KUCOIN", label: "KUCOIN" },
  { value: "MEXC-SPOT", label: "MEXC-SPOT" },
  { value: "OKEX-SPOT", label: "OKEX-SPOT" },
];

const AddBotComponent = () => {
  const [botName, setBotName] = useState("");

  return (
    <HomeContainer>
      <SubWrapper>
        <MainLabel>Bot Name</MainLabel>
        <SubLabel>
          Enter Bot Name (do not use underscore sign or spaces, use dash sign)
        </SubLabel>
        <Input
          className="custom-input"
          placeholder="BOT-NAME"
          onChange={(e) => setBotName(e.target.value)}
        />
        <MainLabel>Bot description</MainLabel>
        <Input className="custom-input" placeholder="" />
        <ExchangeWrapper>
          <ExchangeItem>
            <MainLabel>Exchange</MainLabel>
            <Select
              className="custom-select"
              defaultValue="BINANCE-SPOT"
              options={exchangeTypeList}
            />
          </ExchangeItem>
          <ApiItem>
            <MainLabel>API</MainLabel>
            <Select
              className="custom-select"
              defaultValue="SELECT"
              options={[{ value: "SELECT", label: "SELECT" }]}
            />
          </ApiItem>
        </ExchangeWrapper>
        <MainLabel>Time Frame</MainLabel>
        <TimeFrameComponent />
        <MainLabel>Available pairs</MainLabel>
        <SubLabel>
          You can trade only those pairs where you have balance above zero
        </SubLabel>
        <Select
          className="custom-select"
          defaultValue="VALUE1"
          options={[
            { value: "VALUE1", label: "VALUE1" },
            { value: "VALUE2", label: "VALUE2" },
            { value: "VALUE3", label: "VALUE3" },
          ]}
        />
      </SubWrapper>
      <SubWrapper>
        <MainLabel>Singal Source</MainLabel>
        <BtnGroupWrapper>
          <Button type="primary">TradingView</Button>
          <Button>Custom</Button>
        </BtnGroupWrapper>
        <OrderTypeComponent />
      </SubWrapper>
      <TradingAmountComponent />
      <SubWrapper>
        <CheckBoxWrapper>
          <Checkbox defaultChecked={false} />
          <MainLabel className="checkboxlabel">Multiple entries</MainLabel>
        </CheckBoxWrapper>
        <SubLabel>
          If option is enabled, it will allow multiple Long/Short entries
        </SubLabel>
      </SubWrapper>
      <SubWrapper>
        <CheckBoxWrapper>
          <Checkbox defaultChecked={false} />
          <MainLabel className="checkboxlabel">Swing trade</MainLabel>
        </CheckBoxWrapper>
        <SubLabel>
          This option will swing your position when signal in the opposite
          direction will be received
        </SubLabel>
      </SubWrapper>
      <WarningContainer>
        <span>
          <b>It is highly recommended</b> to use <b>Take Profit</b> and
          <b> Stop Loss</b> to minimize your losses and maximize bot performance
        </span>
      </WarningContainer>
      <SubWrapper>
        <CheckBoxWrapper>
          <Checkbox defaultChecked={false} />
          <MainLabel className="checkboxlabel">
            Reduce only (for exit)
          </MainLabel>
        </CheckBoxWrapper>
        <SubLabel>
          Reduce-only orders will only reduce your overall position. They will
          never increase your overall position size or open a position in the
          opposite drection.
        </SubLabel>
      </SubWrapper>
      <SubWrapper>
        <TakeProfitComponent title="Take profit 1" />
        <TakeProfitComponent title="Take profit 2" />
        <TakeProfitComponent title="Take profit 3" />
        <TakeProfitComponent title="Take profit 4" />
        <TakeProfitComponent title="Take profit 5" />
        <TakeProfitComponent title="Take profit 6" />
        <StopLossComponent />
        <CheckBoxWrapper>
          <Checkbox defaultChecked={false} />
          <MainLabel className="checkboxlabel">
            Move Stop Loss to breakeven
          </MainLabel>
        </CheckBoxWrapper>
      </SubWrapper>
      <TrailingStopComponent />
      <DCAComponent />
      <NoticeContainer>
        <span>Important! Secure your Trading Bots with 2FA!</span>
      </NoticeContainer>
      <CreateBotButton>
        <Button className="custom-button">Create Bot</Button>
      </CreateBotButton>
    </HomeContainer>
  );
};

export default AddBotComponent;
