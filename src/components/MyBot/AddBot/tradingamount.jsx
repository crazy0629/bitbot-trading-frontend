import React, { useState } from "react";

import { Button, InputNumber, Checkbox, Radio } from "antd";
import {
  MainLabel,
  BtnGroupWrapper,
  SubLabel,
  PortfolioPercent,
  PercentSuffix,
  CheckBoxWrapper,
  SubWrapper,
  PositionSizeGroup,
  FixedAmountGroup,
} from "./add.style";

const TradingAmountComponent = () => {
  const [showPosition, setShowPosition] = useState(true);
  const [percentPrice, setPercentPrice] = useState(0);
  const [leveragePrice, setLeveragePrice] = useState(1);
  return (
    <SubWrapper>
      <MainLabel>Trading Amount</MainLabel>
      <BtnGroupWrapper>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a" onClick={(e) => setShowPosition(true)}>
            Position size
          </Radio.Button>
          <Radio.Button value="b" onClick={(e) => setShowPosition(false)}>
            Fixed amount
          </Radio.Button>
        </Radio.Group>
      </BtnGroupWrapper>
      {showPosition && (
        <PositionSizeGroup>
          <SubLabel>
            Share of the portfolio in percentage that would be used in this
            strategy
          </SubLabel>
          <PortfolioPercent>
            <InputNumber
              className="custom-input"
              defaultValue={0}
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
        </PositionSizeGroup>
      )}
      {!showPosition && (
        <FixedAmountGroup>
          <SubLabel>Amount</SubLabel>
          <PortfolioPercent>
            <InputNumber
              className="custom-input"
              min={0}
              defaultValue={0.0001}
            />
            <PercentSuffix>$</PercentSuffix>
          </PortfolioPercent>
        </FixedAmountGroup>
      )}
      <SubLabel>Leverage (1-125x)</SubLabel>
      <PortfolioPercent>
        <InputNumber
          className="custom-input"
          defaultValue={1}
          min={1}
          max={100}
          value={leveragePrice}
          onChange={(e) => setLeveragePrice(e)}
        />
        <PercentSuffix>x</PercentSuffix>
      </PortfolioPercent>
      <BtnGroupWrapper>
        <Button shape="circle" onClick={() => setLeveragePrice(1)}>
          1x
        </Button>
        <Button shape="circle" onClick={() => setLeveragePrice(2)}>
          2x
        </Button>
        <Button shape="circle" onClick={() => setLeveragePrice(5)}>
          5x
        </Button>
        <Button shape="circle" onClick={() => setLeveragePrice(10)}>
          10x
        </Button>
        <Button shape="circle" onClick={() => setLeveragePrice(20)}>
          20x
        </Button>
      </BtnGroupWrapper>
      <CheckBoxWrapper>
        <Checkbox defaultChecked={false} />
        <MainLabel className="checkboxlabel">
          Custom amount sent from TradingView
        </MainLabel>
      </CheckBoxWrapper>
    </SubWrapper>
  );
};

export default TradingAmountComponent;
