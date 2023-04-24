import React, { useState } from "react";
import {
  SubWrapper,
  CheckBoxWrapper,
  MainLabel,
  SubLabel,
  DCASettingWrapper,
  DCAOrderOne,
  DCAOrderMulti,
  DCAOrderCount,
  DCAOrderPrice,
  PercentSuffix,
  PortfolioPercent,
} from "./add.style";
import { Checkbox, Select, InputNumber } from "antd";

const DCAComponent = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <SubWrapper>
      <CheckBoxWrapper>
        <Checkbox
          defaultChecked={false}
          onChange={(e) => setShowDetail(e.target.checked)}
        />
        <MainLabel className="checkboxlabel">DCA</MainLabel>
      </CheckBoxWrapper>
      <DCASettingWrapper f={showDetail}>
        <MainLabel>Take Profit type</MainLabel>
        <SubLabel>
          If take profit is based on entry order, then Your Take Profit price
          target will be fixed. If take profit is based on the average entry
          price of the position then the % of the Take profit will be fixed.
        </SubLabel>
        <Select
          className="custom-select"
          defaultValue="AVERAGE"
          options={[
            { value: "AVERAGE", label: "BASED ON AVERAGE PRICE" },
            { value: "ENTRY", label: "BASED ON ENTRY ORDER" },
          ]}
        />
        <MainLabel>Stop Loss type</MainLabel>
        <SubLabel>
          If stop loss is based on entry order, then Your Stop Loss price target
          will be fixed. If stop loss is based on the average entry price of the
          position then the % of the Stop Loss will be fixed.
        </SubLabel>
        <Select
          className="custom-select"
          defaultValue="AVERAGE"
          options={[
            { value: "AVERAGE", label: "BASED ON AVERAGE PRICE" },
            { value: "ENTRY", label: "BASED ON ENTRY ORDER" },
          ]}
        />
        <DCAOrderOne>
          <DCAOrderCount>
            <MainLabel>DCA orders count</MainLabel>
            <SubLabel>DCA orders count (1-30)</SubLabel>
            <InputNumber
              className="custom-input"
              defaultValue={1}
              min={1}
              max={30}
            />
          </DCAOrderCount>
          <DCAOrderPrice>
            <MainLabel>DCA order price deviation</MainLabel>
            <SubLabel>DCA order trigger price deviation (0.1-20%)</SubLabel>
            <PortfolioPercent>
              <InputNumber
                className="custom-input"
                defaultValue={0.1}
                min={0.1}
                max={20}
              />
              <PercentSuffix>%</PercentSuffix>
            </PortfolioPercent>
          </DCAOrderPrice>
        </DCAOrderOne>
        <DCAOrderMulti>
          <DCAOrderCount>
            <MainLabel>DCA order volumn multiplier</MainLabel>
            <SubLabel>DCA order volumn multiplier (1-10x)</SubLabel>
            <InputNumber
              className="custom-input"
              defaultValue={1}
              min={1}
              max={10}
            />
          </DCAOrderCount>
          <DCAOrderPrice>
            <MainLabel>DCA order price deviation multiplier</MainLabel>
            <SubLabel>
              DCA order trigger price deviation multiplier (1-10x)
            </SubLabel>
            <InputNumber
              className="custom-input"
              defaultValue={1}
              min={1}
              max={10}
            />
          </DCAOrderPrice>
        </DCAOrderMulti>
      </DCASettingWrapper>
    </SubWrapper>
  );
};

export default DCAComponent;
