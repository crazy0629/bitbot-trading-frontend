import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Table, Tag, Select, Button, Switch } from "antd";

// @import styles
import { HomeContainer, OptionGrp, CustomSelectGrp, Title } from "./style";
// @import resource
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdManageSearch } from "react-icons/md";
import { CgPlayPauseO } from "react-icons/cg";

// table columns
const Columns = [
  {
    title: "BotID",
    dataIndex: "id",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pos - b.pos,
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.exchange - b.exchange,
  },
  {
    title: "Exchange",
    dataIndex: "exchange",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.entry - b.entry,
  },
  {
    title: "Pair",
    dataIndex: "pair",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Portfolio",
    dataIndex: "portfolio",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Take Profit",
    dataIndex: "profit",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <>100%</>,
  },
  {
    title: "Stop Loss",
    dataIndex: "loss",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <>-</>,
  },
  {
    title: "Tralilng Stop",
    dataIndex: "loss",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <>1%|2%</>,
  },
  {
    title: "DCA Settings",
    dataIndex: "dca",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Time Frame",
    dataIndex: "frame",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => <div>15M</div>,
  },
  {
    title: "Enabled",
    render: (text, record) => <Switch size="small" defaultChecked />,
  },
  {
    title: "Status",
    render: (text, record) => <Tag color="green">ENTERED</Tag>,
  },
  {
    title: "",
    render: (text, record) => (
      <OptionGrp>
        <CgPlayPauseO className="exchange-icon" />
        <BiEditAlt className="exchange-icon" />
        <RiDeleteBin5Line className="exchange-icon" />
        <HiOutlineClipboardList className="exchange-icon" />
        <MdManageSearch className="exchange-icon" />
      </OptionGrp>
    ),
  },
];

// table datas
const data = [
  {
    id: "227889",
    name: "ADA-15MIN",
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

const MyBotComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("userInfo");
    if (!auth) navigate("/login");
  }, []);

  return (
    <HomeContainer>
      <Title>My Bots</Title>
      <Link to="/addnewbot">
        <Button type="primary" style={{ marginLeft: "30px" }}>
          Add New
        </Button>
      </Link>
      <CustomSelectGrp>
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
        <Select
          className="custom-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All TimeFrames" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <Select
          className="custom-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
      </CustomSelectGrp>
      <Table
        columns={Columns}
        dataSource={data}
        style={{ margin: "15px 30px" }}
        size="small"
      />
    </HomeContainer>
  );
};

export default MyBotComponent;
