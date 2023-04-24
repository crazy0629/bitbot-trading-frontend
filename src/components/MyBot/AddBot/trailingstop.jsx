import React, { useState } from "react";
import {
  CheckBoxWrapper,
  MainLabel,
  SubLabel,
  PortfolioPercent,
  SubWrapper,
  TrailingStopGroup,
  TrailingActivation,
  TrailingExecute,
  PercentSuffix,
} from "./add.style";

import { Checkbox, InputNumber } from "antd";

const TrailingStopComponent = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <SubWrapper>
      <CheckBoxWrapper>
        <Checkbox
          defaultChecked={false}
          onChange={(e) => setShowDetail(e.target.checked)}
        />
        <MainLabel className="checkboxlabel">Trailing Stop</MainLabel>
      </CheckBoxWrapper>
      <TrailingStopGroup f={showDetail}>
        <TrailingActivation>
          <SubLabel>Trailing Stop Activation</SubLabel>
          <PortfolioPercent>
            <InputNumber
              className="custom-input"
              defaultValue={0.01}
              min={0}
              max={100}
            />
            <PercentSuffix>%</PercentSuffix>
          </PortfolioPercent>
        </TrailingActivation>
        <TrailingExecute>
          <SubLabel>Trailing Stop execute </SubLabel>
          <PortfolioPercent>
            <InputNumber
              className="custom-input"
              defaultValue={0.01}
              min={0}
              max={100}
            />
            <PercentSuffix>%</PercentSuffix>
          </PortfolioPercent>
        </TrailingExecute>
      </TrailingStopGroup>
    </SubWrapper>
  );
};

export default TrailingStopComponent;
