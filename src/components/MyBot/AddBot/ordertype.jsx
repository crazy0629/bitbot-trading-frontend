import React, { useState } from "react";

import {
  OrderTypeWrapper,
  MainLabel,
  SubLabel,
  BtnGroupWrapper,
  PriceGroup,
  Price,
  Percent,
  PortfolioPercent,
  PercentSuffix,
  ShowVisible,
} from "./add.style";
import { Radio, Button, InputNumber } from "antd";
const OrderTypeComponent = () => {
  const [showLimit, setShowLimit] = useState(false);
  const [percentPrice, setPercentPrice] = useState(0);
  return (
    <OrderTypeWrapper>
      <MainLabel>Order type</MainLabel>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a" onClick={(e) => setShowLimit(false)}>
          Market
        </Radio.Button>
        <Radio.Button value="b" onClick={(e) => setShowLimit(true)}>
          Limit
        </Radio.Button>
      </Radio.Group>

      <ShowVisible f={showLimit}>
        <SubLabel>Choose deviation from</SubLabel>
        <BtnGroupWrapper>
          <Button type="primary">Last Price</Button>
          <Button>Ask Price</Button>
          <Button>Bid Price</Button>
        </BtnGroupWrapper>
        <PriceGroup>
          <Percent>
            <PortfolioPercent>
              <InputNumber
                className="custom-input"
                min={0}
                max={100}
                value={percentPrice}
                onChange={(e) => setPercentPrice(e)}
              />
              <PercentSuffix>%</PercentSuffix>
            </PortfolioPercent>
            <BtnGroupWrapper>
              <Button shape="circle" onClick={() => setPercentPrice(10)}>
                10%
              </Button>
              <Button shape="circle" onClick={() => setPercentPrice(25)}>
                25%
              </Button>
              <Button shape="circle" onClick={() => setPercentPrice(50)}>
                50%
              </Button>
              <Button shape="circle" onClick={() => setPercentPrice(75)}>
                75%
              </Button>
              <Button shape="circle" onClick={() => setPercentPrice(100)}>
                100%
              </Button>
            </BtnGroupWrapper>
          </Percent>
          <Price>
            <PortfolioPercent>
              <InputNumber
                className="custom-input"
                min={0}
                defaultValue={0.0001}
              />
              <PercentSuffix>$</PercentSuffix>
            </PortfolioPercent>
          </Price>
        </PriceGroup>
      </ShowVisible>
    </OrderTypeWrapper>
  );
};

export default OrderTypeComponent;
