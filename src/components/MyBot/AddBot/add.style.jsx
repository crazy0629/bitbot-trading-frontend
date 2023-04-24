import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 30px 20px;
  width: 100%;
  height: calc(100vh - 62px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubWrapper = styled.div`
  box-shadow: 0px 0 30px #00000011;
  border-radius: 10px;
  background-color: #ffffff;
  width: 80%;
  padding: 10px 20px;
  margin-bottom: 10px;
  .custom-input {
    width: 100%;
  }
  .custom-select {
    width: 100%;
  }
`;

export const MainLabel = styled.div`
  font-family: AveBold;
  color: #000;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubLabel = styled.div`
  font-family: AveBold;
  color: #888;
  font-size: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const ExchangeWrapper = styled.div`
  display: flex;
`;

export const ExchangeItem = styled.div`
  width: 50%;
  padding-right: 10px;
  .custom-select {
    width: 100%;
  }
`;

export const ApiItem = styled.div`
  width: 50%;
  padding-right: 10px;
  .custom-select {
    width: 100%;
  }
`;

export const TimeFrameWrapper = styled.div`
  display: flex;
  .custom-input {
    width: 60%;
  }
  .custom-select {
    margin-left: 10px;
    width: 20%;
  }
`;

export const BtnGroupWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  Button {
    margin-right: 15px;
  }
`;

export const PortfolioPercent = styled.div`
  display: flex;
  align-items: center;
  .custom-input {
    width: 95%;
  }
`;

export const PercentSuffix = styled.div`
  font-family: AveBold;
  color: #888;
  font-size: 15px;
  margin-left: 5px;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  .checkboxlabel {
    margin-left: 10px;
  }
`;

export const WarningContainer = styled.div`
  box-shadow: 0px 0 30px #00000011;
  border-radius: 10px;
  background-color: #978e71;
  width: 80%;
  padding: 20px;
  margin-bottom: 10px;
`;

export const TakeProfitWrapper = styled.div``;

export const TakeProfitGroup = styled.div`
  display: flex;
  overflow: hidden;
  height: ${(props) => (props.f ? "100.5px" : "0px")};
  transition: all 0.3s ease-in-out;
`;

export const PositionSizePercent = styled.div`
  width: 50%;
`;

export const TakeProfitPercent = styled.div`
  width: 50%;
`;

export const StopLossWrapper = styled.div``;

export const StopLossPercent = styled.div`
  overflow: hidden;
  height: ${(props) => (props.f ? "74px" : "0px")};
  transition: all 0.3s ease-in-out;
`;

export const TrailingStopGroup = styled.div`
  display: flex;
  overflow: hidden;
  height: ${(props) => (props.f ? "58.5px" : "0px")};
  transition: all 0.3s ease-in-out;
`;

export const TrailingActivation = styled.div`
  width: 50%;
`;

export const TrailingExecute = styled.div`
  width: 50%;
`;

export const DCASettingWrapper = styled.div`
  .custom-select {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: ${(props) => (props.f ? "400px" : "0px")};
  transition: all 0.6s ease-in-out;
`;

export const DCAOrderOne = styled.div`
  display: flex;
`;

export const DCAOrderMulti = styled.div`
  display: flex;
`;

export const DCAOrderCount = styled.div`
  width: 50%;
  padding-right: 10px;
`;

export const DCAOrderPrice = styled.div`
  width: 50%;
`;

export const NoticeContainer = styled.div`
  box-shadow: 0px 0 30px #00000011;
  border: 1px solid #db16bacf;
  border-radius: 10px;
  background-color: #917197ae;
  width: 80%;
  padding: 20px;
  margin-bottom: 10px;
`;

export const CreateBotButton = styled.div`
  width: 80%;
  .custom-button {
    width: 100%;
  }
`;

export const PositionSizeGroup = styled.div``;

export const FixedAmountGroup = styled.div``;

export const OrderTypeWrapper = styled.div``;

export const PriceGroup = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Percent = styled.div`
  width: 50%;
`;

export const Price = styled.div`
  width: 50%;
`;

export const ShowVisible = styled.div`
  overflow: hidden;
  height: ${(props) => (props.f ? "150px" : "0px")};
  transition: all 0.3s ease-in-out;
`;
