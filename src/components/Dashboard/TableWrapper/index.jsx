import React, { useState } from "react";
import { Tabs, Table, Select } from "antd";
import QuickChart from "quickchart-js";
// @import styles
import { DashboardTableContainer, Title, AnalTab1 } from "./style";
// @import resource
import { BsEye } from "react-icons/bs";
// table columns
const Columns = [
  {
    title: "#",
  },
  {
    title: "Name of Account",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: "Exchange",
    dataIndex: "exchange",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.exchange - b.exchange,
  },
  {
    title: "Volumn",
    dataIndex: "pair",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "P/L",
    dataIndex: "portfolio",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Profit",
    dataIndex: "profit",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <>100%</>,
  },
  {
    title: "Win Rate",
    dataIndex: "loss",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <>-98.6%</>,
  },
  {
    title: "Active Bots",
    dataIndex: "bots",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.bots - b.bots,
    render: (text, record) => "27",
  },
  {
    title: "Followers",
    dataIndex: "followers",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.followers - b.followers,
    render: (text, record) => "0",
  },
  {
    title: "Trades",
    dataIndex: "trades",
    render: (text, record) => "214",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.trades - b.trades,
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (text, record) => "free",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "",
    render: (text, record) => <BsEye className="eye-icon" />,
  },
];

// table datas
const data = [
  {
    name: "47",
    exchange: "BINANCE-FEATURES",
    pair: "ADAUST",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "4 Orders",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
];

const DashboardTableComponent = () => {
  const [items, setItems] = useState([
    {
      key: "1",
      label: `Trader's API accounts`,
      children: (
        <AnalTab1>
          <Select
            className="custom-class"
            defaultValue="all"
            options={[
              { value: "all", label: "Month" },
              { value: 1, label: "Jan" },
              { value: 2, label: "Feb" },
              { value: 3, label: "Mar" },
              { value: 4, label: "Apr" },
              { value: 5, label: "May" },
              { value: 6, label: "Jun" },
              { value: 7, label: "Jul" },
              { value: 8, label: "Aug" },
              { value: 9, label: "Sep" },
              { value: 10, label: "Oct" },
              { value: 11, label: "Nov" },
              { value: 12, label: "Dec" },
            ]}
          />
          <Table columns={Columns} dataSource={data} size="small" />
        </AnalTab1>
      ),
    },
    {
      key: "2",
      label: `Trading bots`,
      children: "Content of Tab Pane 2",
    },
  ]);
  return (
    <DashboardTableContainer>
      <Title>Analytics</Title>
      <Tabs items={items} />
    </DashboardTableContainer>
  );
};

export default DashboardTableComponent;
