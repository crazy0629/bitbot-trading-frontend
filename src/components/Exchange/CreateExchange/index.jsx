import React, { useEffect, useState } from "react";

import {
  HomeContainer,
  SubWrapper,
  CreateForm,
  AccountBtnGroup,
  Title,
  Label,
  Btn,
} from "./create.style";
import axios from "axios";
import { Select, Input, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { serverURL } from "../../../actions/config";
import openNotification from "../../Notification";

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

const coinImgList = [
  "/assets/image/binance-futures-1.png",
  "/assets/image/bybit.png",
  "/assets/image/deribit.png",
  "/assets/image/kucoin.png",
  "/assets/image/bitmex.png",
];

const CreateExchangeComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [trader, setTrader] = useState({
    exchange: "BINANCE-SPOT",
    name: "",
    api: "",
    secret: "",
    enabled: true,
  });

  useEffect(() => {
    const auth = localStorage.getItem("userInfo");
    if (!auth) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(localStorage.userInfo));
  }, []);

  const submitTrader = () => {
    axios
      .post(`${serverURL}/api/trader/add`, { trader, id: user._id })
      .then((res) => {
        if (res) {
          openNotification("success", "Trader Account Generated!!!");
          navigate("/exchange");
        }
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <HomeContainer>
      <SubWrapper>
        <CreateForm>
          <Title>Create Trader Account</Title>
          <Label>Exchange</Label>
          <Select
            className="custom-class"
            value={trader.exchange}
            options={exchangeTypeList}
            onChange={(e) => setTrader({ ...trader, exchange: e })}
          />
          <Label>Name of the account</Label>
          <Input
            className="custom-input"
            placeholder="Name of the account"
            value={trader.name}
            onChange={(e) => setTrader({ ...trader, name: e.target.value })}
          />
          <Label>API</Label>
          <Input
            className="custom-input"
            placeholder="API"
            value={trader.api}
            onChange={(e) => setTrader({ ...trader, api: e.target.value })}
          />
          <Label>Secret</Label>
          <Input
            className="custom-input"
            placeholder="Secret"
            value={trader.secret}
            onChange={(e) => setTrader({ ...trader, secret: e.target.value })}
          />
          <Label>Favorite</Label>
          <Switch
            size="big"
            checked={trader.enabled}
            onChange={(e) => setTrader({ ...trader, enabled: e })}
          />
          <Btn onClick={() => submitTrader()}>Add</Btn>
          <Label>Don't have an exchange account? Sign up now</Label>
        </CreateForm>
        <AccountBtnGroup>
          {coinImgList.map((url, index) => (
            <Btn className="custom-btn" key={`${index}p`}>
              <img src={url} alt="" />
            </Btn>
          ))}
        </AccountBtnGroup>
      </SubWrapper>
    </HomeContainer>
  );
};

export default CreateExchangeComponent;
