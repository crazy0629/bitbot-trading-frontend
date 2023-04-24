import React, { useState } from "react";
import { Checkbox, Button, Input } from "antd";

import {
  MainLabel,
  CheckBoxWrapper,
  PortfolioPercent,
  PercentSuffix,
  BtnGroupWrapper,
  StopLossWrapper,
  StopLossPercent,
} from "./add.style";

const StopLossComponent = () => {
  const [stopLossCheck, setStopLossCheck] = useState(false);
  return (
    <StopLossWrapper>
      <CheckBoxWrapper>
        <Checkbox
          defaultChecked={false}
          onChange={(e) => setStopLossCheck(e.target.checked)}
        />
        <MainLabel className="checkboxlabel">Stop Loss</MainLabel>
      </CheckBoxWrapper>
      <StopLossPercent f={stopLossCheck}>
        <PortfolioPercent>
          <Input className="custom-input" placeholder="0%" readOnly />
          <PercentSuffix>%</PercentSuffix>
        </PortfolioPercent>
        <BtnGroupWrapper>
          <Button shape="circle">1%</Button>
          <Button shape="circle">3%</Button>
          <Button shape="circle">5%</Button>
          <Button shape="circle">10%</Button>
          <Button shape="circle">20%</Button>
        </BtnGroupWrapper>
      </StopLossPercent>
    </StopLossWrapper>
  );
};

export default StopLossComponent;
