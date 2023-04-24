import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
// @import styles
import {
  DashboardContainer,
  DashTop,
  DashLeftWrapper,
  DashLTop,
  DashRightWrapper,
  DashItems,
  DashItem,
  LT,
  LB,
  DTTitle,
  PortTab1,
  Tab1Title,
  Tab1Tbl,
  Tab1Item,
  Tab1Wrapper,
  ChartWrapper,
  ValWrapper,
} from "./style";
// @import resource
import { HiRefresh } from "react-icons/hi";
import TableWrapper from "./TableWrapper";
import Chart from "./Chart";
import { useNavigate } from "react-router-dom";
// table columns
const DashboardComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("userInfo");
    if (!auth) navigate("/login");
  }, []);

  const portData = [
    {
      title: "Portfolio Value",
      leftItem: {
        valueTitle: "",
        value: 70243.96,
        days: "",
        mark: "BTC",
        value2: "3.0429",
      },
      rightItem: {
        valueTitle: "",
        value: "",
        days: "",
        mark: "ETH",
        value2: "43.7008",
      },
    },
    {
      title: "Profit and Loss",
      leftItem: {
        valueTitle: "Unrealized P/L",
        value: -3923.69,
        days: "Last 30 days",
        mark: "$",
        value2: "9948.66",
      },
      rightItem: {
        valueTitle: "Last 7 days",
        value: 1816.56,
        days: "Overall",
        mark: "$",
        value2: "-37206.93",
      },
    },
  ];
  const coinData = [
    {
      coinName: "Coin",
      amount: "Amount",
      value: "USD Value",
    },
    {
      coinName: "USDT",
      amount: "70241.21546",
      value: "70241.45",
    },
    {
      coinName: "BUSD",
      amount: "2.68435013",
      value: "2.68",
    },
    {
      coinName: "Dust (USD)",
      amount: "0.06584343",
      value: "0.07",
    },
  ];
  const [items, setItems] = useState([
    {
      key: "1",
      label: `Assets`,
      children: (
        <Tab1Wrapper>
          <ChartWrapper>
            <Chart />
          </ChartWrapper>
          <PortTab1>
            <Tab1Title>
              Total ($): 70,243.96{" "}
              <div>
                <HiRefresh className="tab1-refresh" />
                Update
              </div>
            </Tab1Title>
            <Tab1Tbl>
              {coinData.map((e, index) => (
                <Tab1Item key={`${index}o`} f={index == 0 && true}>
                  <div>{e.coinName}</div>
                  <p>
                    <ValWrapper>{e.amount}</ValWrapper>
                    <ValWrapper>{e.value}</ValWrapper>
                  </p>
                </Tab1Item>
              ))}
            </Tab1Tbl>
          </PortTab1>
        </Tab1Wrapper>
      ),
    },
    {
      key: "2",
      label: `Assets of Exchange`,
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: `API Profile`,
      children: "Content of Tab Pane 3",
    },
  ]);
  return (
    <DashboardContainer>
      <DashTop>
        <DashLeftWrapper>
          {portData.map((e, index) => (
            <DashLTop key={`${index}i`}>
              <DTTitle f={true}>{e.title}</DTTitle>
              <DashItems>
                <DashItem>
                  <LT f={e.leftItem.valueTitle == "" && true}>
                    {e.leftItem.valueTitle}
                    <p>
                      <span>$</span> {e.leftItem.value}
                    </p>
                  </LT>
                  <LB>
                    {e.leftItem.days}
                    <p>
                      <span>{e.leftItem.mark}</span> {e.leftItem.value2}
                    </p>
                  </LB>
                </DashItem>
                <DashItem>
                  <LT>
                    {e.rightItem.valueTitle}
                    {e.rightItem.value && (
                      <p>
                        <span>$</span>
                        {e.rightItem.value}
                      </p>
                    )}
                  </LT>
                  <LB>
                    {e.rightItem.days}
                    <p>
                      <span> {e.rightItem.mark}</span> {e.rightItem.value2}
                    </p>
                  </LB>
                </DashItem>
              </DashItems>
            </DashLTop>
          ))}
        </DashLeftWrapper>
        <DashRightWrapper>
          <DTTitle>Portfolio</DTTitle>
          <Tabs items={items} />
        </DashRightWrapper>
      </DashTop>
      <TableWrapper />
    </DashboardContainer>
  );
};

export default DashboardComponent;
