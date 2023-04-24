import React, { useState, useEffect } from "react";
import axios from "axios";
// @import styles
import {
  SideWraper,
  InputWrapper,
  THeader,
  PriceWrapper,
  CoinWrapper,
  CoinItem,
  CoinLeft,
  CoinRight,
  CLTop,
  CLBottom,
  CRLeft,
  CRRight,
} from "./coin.style";
// @import resource
import { BsSearch, BsFillStarFill } from "react-icons/bs";
import Loading from "../../../Items/Loading";

const SideComponent = ({ setCoin }) => {
  const [coinData, setCoinData] = useState([]);
  const [allCoinData, setAllCoinData] = useState([]);
  const [searchCoin, setSearchCoin] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCryptoPrice = async () => {
      let link =
        "https://coinbase.com/api/v2/assets/search?base=USD&filter=listed&include_prices=true&resolution=day&sort=rank";

      await axios.get(link).then((res) => {
        let result = res.data;
        setAllCoinData(result.data);
        setLoading(false);
      });
    };

    const interval = setInterval(() => {
      getCryptoPrice();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    onSearch();
  }, [allCoinData, searchCoin]);

  const onSearch = () => {
    if (searchCoin == "") {
      setCoinData(allCoinData);
    } else {
      setCoinData(
        allCoinData.filter((e) => e.base.toLowerCase().search(searchCoin) != -1)
      );
    }
  };

  return (
    <SideWraper>
      <InputWrapper>
        <BsSearch className="coin-search" />
        <input
          type="text"
          placeholder="Search coin name"
          value={searchCoin}
          onChange={(e) => setSearchCoin(e.target.value)}
        />
      </InputWrapper>
      <THeader>
        <span>PAIR/VOL</span>
        <PriceWrapper>
          <span>PRICE</span>
          <div>CHANGE</div>
        </PriceWrapper>
      </THeader>
      <CoinWrapper>
        {loading ? (
          <Loading />
        ) : (
          coinData.map((e, index) => (
            <CoinItem key={`${index}t`} onClick={() => setCoin(e.base)}>
              <CoinLeft>
                <CLTop>
                  <img src={e.image_url} alt="" />
                  <span>{e.base}</span>
                </CLTop>
                <CLBottom>
                  <BsFillStarFill />
                  <div>{(e.volume_24h / Math.pow(10, 8)).toFixed(2)}M</div>
                </CLBottom>
              </CoinLeft>
              <CoinRight>
                <CRLeft f={e.percent_change >= 0 ? true : false}>
                  <span>{e.latest}</span>
                  <div>{`=${e.latest} USD`}</div>
                </CRLeft>
                <CRRight f={e.percent_change >= 0 ? true : false}>
                  {`${(e.percent_change * 100).toFixed(2)}%`}
                </CRRight>
              </CoinRight>
            </CoinItem>
          ))
        )}
      </CoinWrapper>
    </SideWraper>
  );
};

export default SideComponent;
