import React, { useEffect, useState } from "react";
import { Table, Tag, Select, Radio } from "antd";

// @import styles
import { HomeContainer, OptionGrp, CustomSelectGrp, PinkCircle } from "./style";
// @import resource
import { BiEditAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// table columns
const liveColumns = [
  {
    title: "Position",
    dataIndex: "pos",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
  },
  {
    title: "Exchange",
    dataIndex: "exchange",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.exchange - b.exchange,
  },
  {
    title: "Entry",
    dataIndex: "entry",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.entry - b.entry,
  },
  {
    title: "Take Profit",
    dataIndex: "profit",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Stop Loss",
    dataIndex: "loss",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Tralilng Stop",
    dataIndex: "tral",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <>1% / 2%</>,
  },
  {
    title: "Portfolio",
    dataIndex: "portfolio",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <>0.1% (25x)</>,
  },
  {
    title: "DCA Settings",
    dataIndex: "dca",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "P/L",
    dataIndex: "pl",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <div style={{ color: "pink" }}>-0.64%</div>,
  },
  {
    title: "Rol",
    dataIndex: "rol",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <div>0.00%</div>,
  },
  {
    title: "Status",
    render: (text, record) => <Tag color="green">ENTERED</Tag>,
  },
  {
    title: "",
    render: (text, record) => (
      <OptionGrp>
        <IoMdClose className="exchange-icon" />
        <BiEditAlt className="exchange-icon" />
      </OptionGrp>
    ),
  },
];
const historyColumns = [
  {
    title: "Position",
    dataIndex: "pos",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
  },
  {
    title: "Exchange",
    dataIndex: "exchange",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
  },
  {
    title: "Entry",
    dataIndex: "entry",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
  },
  {
    title: "Take Profit",
    dataIndex: "profit",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
    render: (text, render) => <div>0.32104</div>,
  },
  {
    title: "Stop Loss",
    dataIndex: "loss",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
  },
  {
    title: "Tralilng Stop",
    dataIndex: "tral",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
    render: (text, render) => <div>0.01 / 0.02</div>,
  },
  {
    title: "Portfolio",
    dataIndex: "portfolio",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
    render: (text, render) => <div>0.10%</div>,
  },
  {
    title: "DCA Settings",
    dataIndex: "dca",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
  },
  {
    title: "P/L",
    dataIndex: "pl",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
    render: (text, render) => <div style={{ color: "green" }}>0.99%</div>,
  },
  {
    title: "Rol",
    dataIndex: "rol",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
    render: (text, render) => <div style={{ color: "green" }}>0.02%</div>,
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text, render) => (
      <Tag color={"blue"} size="small">
        COMPLETED
      </Tag>
    ),
  },
];

// table datas
const livedata = [
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
];
const historyData = [
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
  {
    pos: "BCH-USDT",
    exchange: "BINANCE-FEATURES",
    entry: "SELF",
    profit: "USDT -> 993.034923",
    loss: "XTLRlgu359csCSCNdjgel...",
    tral: "XTLRlgu359csCSCNdjgel...",
    portfolio: "XTLRlgu359csCSCNdjgel...",
    dca: "XTLRlgu359csCSCNdjgel...",
    pl: "XTLRlgu359csCSCNdjgel...",
    rol: "XTLRlgu359csCSCNdjgel...",
  },
];

const ExchangeComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("userInfo");
    if (!auth) navigate("/login");
  }, []);

  const [selectedRadio, setSelectedRadio] = useState("live");

  const onRadio = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <HomeContainer>
      <CustomSelectGrp>
        <Radio.Group value={selectedRadio} onChange={(e) => onRadio(e)}>
          <Radio.Button value="live">
            <PinkCircle>
              Live <div />
            </PinkCircle>
          </Radio.Button>
          <Radio.Button value="history">History</Radio.Button>
        </Radio.Group>
        <Select
          className="custom-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All Exchanges" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <Select
          className="custom-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All Pairs" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
      </CustomSelectGrp>
      <Table
        columns={selectedRadio == "live" ? liveColumns : historyColumns}
        dataSource={selectedRadio == "live" ? livedata : historyData}
        style={{ margin: "15px 30px" }}
        size="small"
      />
    </HomeContainer>
  );
};

export default ExchangeComponent;
