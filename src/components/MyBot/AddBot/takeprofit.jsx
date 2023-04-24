import React, { useState } from "react";
import {
  MainLabel,
  SubLabel,
  BtnGroupWrapper,
  PortfolioPercent,
  PercentSuffix,
  CheckBoxWrapper,
  TakeProfitGroup,
  PositionSizePercent,
  TakeProfitPercent,
  TakeProfitWrapper,
} from "./add.style";

import { Button, Checkbox, InputNumber } from "antd";

const TakeProfitComponent = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [positionSize, setPositionSize] = useState(0);
  const [takeProfit, setTakeProfit] = useState(0);

  const checkboxHandler = (e) => {
    const val = e.target.checked;
    setShowDetail(val);
  };

  return (
    <TakeProfitWrapper>
      <CheckBoxWrapper>
        <Checkbox defaultChecked={false} onChange={(e) => checkboxHandler(e)} />
        <MainLabel className="checkboxlabel">{props.title}</MainLabel>
      </CheckBoxWrapper>
      <TakeProfitGroup f={showDetail}>
        <PositionSizePercent>
          <SubLabel>Position size</SubLabel>
          <PortfolioPercent>
            <InputNumber
              className="custom-input"
              defaultValue={0}
              min={0}
              max={100}
              value={positionSize}
              onChange={(e) => setPositionSize(e)}
            />
            <PercentSuffix>%</PercentSuffix>
          </PortfolioPercent>
          <BtnGroupWrapper>
            <Button shape="circle" onClick={() => setPositionSize(10)}>
              10%
            </Button>
            <Button shape="circle" onClick={() => setPositionSize(25)}>
              25%
            </Button>
            <Button shape="circle" onClick={() => setPositionSize(50)}>
              50%
            </Button>
            <Button shape="circle" onClick={() => setPositionSize(75)}>
              75%
            </Button>
            <Button shape="circle" onClick={() => setPositionSize(100)}>
              100%
            </Button>
          </BtnGroupWrapper>
        </PositionSizePercent>
        <TakeProfitPercent>
          <SubLabel>Take Profit</SubLabel>
          <PortfolioPercent>
            <InputNumber
              className="custom-input"
              defaultValue={0}
              min={0}
              max={100}
              value={takeProfit}
              onChange={(e) => setTakeProfit(e)}
            />
            <PercentSuffix>%</PercentSuffix>
          </PortfolioPercent>
          <BtnGroupWrapper>
            <Button shape="circle" onClick={() => setTakeProfit(1)}>
              1%
            </Button>
            <Button shape="circle" onClick={() => setTakeProfit(3)}>
              3%
            </Button>
            <Button shape="circle" onClick={() => setTakeProfit(5)}>
              5%
            </Button>
            <Button shape="circle" onClick={() => setTakeProfit(10)}>
              10%
            </Button>
            <Button shape="circle" onClick={() => setTakeProfit(20)}>
              20%
            </Button>
          </BtnGroupWrapper>
        </TakeProfitPercent>
      </TakeProfitGroup>
    </TakeProfitWrapper>
  );
};

export default TakeProfitComponent;
