import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, Switch, Tag, Select } from "antd";
import axios from "axios";

// @import styles
import {
  HomeContainer,
  Title,
  SubWrapper,
  AccountTitle,
  OptionGrp,
  CustomSelectGrp,
} from "./style";
// @import resource
import { BiEditAlt } from "react-icons/bi";
import { HiRefresh } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
import { serverURL } from "../../actions/config";

const ExchangeComponent = () => {
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <Tag color={text === "Pending" ? "error" : "green"}>
          {text === "Pending" ? "Pending" : "Active"}
        </Tag>
      ),
    },
    {
      title: "Name of Account",
      dataIndex: "name",
    },
    {
      title: "Exchange",
      dataIndex: "exchange",
    },
    {
      title: "Balances",
      dataIndex: "balance",
      render: (text, record) => `USDT - ${text}`,
    },
    {
      title: "API",
      dataIndex: "api",
    },
    {
      title: "Enabled",
      render: (text, record) => (
        <Switch checked={record.enabled} size="small" />
      ),
    },
    {
      title: "",
      render: (text, record) => (
        <OptionGrp>
          <BiEditAlt className="exchange-icon" />
          <HiRefresh className="exchange-icon" />
          <div onClick={() => removeTrader(record.userID)}>
            <RiDeleteBin6Line className="exchange-icon" />
          </div>
          <MdManageSearch className="exchange-icon" />
        </OptionGrp>
      ),
    },
  ];
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState();

  const checkAuth = (userid) => {
    axios
      .get(`${serverURL}/api/trader/get/${userid}`)
      .then((res) => {
        if (res) {
          setDisabled(res.data.status);
          if (res.data.data != null) setData([res.data.data]);
        }
      })
      .catch((err) => console.log(err.response.data));
  };

  const removeTrader = (id) => {
    axios
      .post(`${serverURL}/api/trader/remove`, { id })
      .then((res) => {
        if (res) {
          checkAuth(JSON.parse(localStorage.userInfo)._id);
          setData([]);
        }
      })
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    const auth = localStorage.getItem("userInfo");
    if (!auth) {
      navigate("/login");
      return;
    }

    checkAuth(JSON.parse(localStorage.userInfo)._id);
  }, []);

  return (
    <HomeContainer>
      <Title>My Exchanges</Title>
      <SubWrapper>
        <AccountTitle>
          <span>Exchange Accounts</span>Create and manage exchange accounts
        </AccountTitle>
        <Button
          type="primary"
          disabled={disabled}
          onClick={() => navigate("/createmyexchange")}
        >
          Add New
        </Button>
      </SubWrapper>
      <CustomSelectGrp>
        <Select
          className="custom-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All Statuses" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <Select
          className="custom-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All Names" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <Select
          className="custom-class"
          defaultValue="all"
          options={[
            { value: "all", label: "All Exchanges" },
            { value: "active", label: "Active" },
            { value: "pending", label: "Pending" },
          ]}
        />
      </CustomSelectGrp>
      <Table
        columns={columns}
        dataSource={data}
        style={{ margin: "15px 30px" }}
        size="small"
      />
    </HomeContainer>
  );
};

export default ExchangeComponent;
