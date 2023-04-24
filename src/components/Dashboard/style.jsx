import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DashTop = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
export const DashLeftWrapper = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DashLTop = styled.div`
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #f0f0f0;
  }
`;
export const DashRightWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.3s ease-in-out;
`;
export const DashItems = styled.div`
  display: flex;
  width: 100%;
`;
export const DashItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const LT = styled.div`
  color: #b3b3b3;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: ${(props) => props.f && "10px 0"};
  p {
    padding: 0;
    margin: 0;
    color: #000;
    font-size: 20px;
    font-family: AveBold;
    span {
      color: #b3b3b3;
      font-size: 15px;
    }
  }
`;
export const LB = styled.div`
  color: #b3b3b3;
  font-size: 10px;
  margin-top: 10px;
  p {
    padding: 0;
    margin: 0;
    color: #000;
    font-size: 12px;
    margin-top: 2px;
    span {
      font-family: AveBold;
      color: #b3b3b3;
      font-size: 12px;
    }
  }
`;
export const DTTitle = styled.div`
  font-family: AveBold;
  font-size: 14px;
  margin-bottom: ${(props) => props.f && "10px"};
`;
export const PortTab1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Tab1Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 8px;
  div {
    background-color: #38b641;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 5px;
    font-size: 10px;
    .tab1-refresh {
      margin-right: 5px;
    }
  }
`;
export const Tab1Tbl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 5px;
  overflow: hidden;
`;
export const Tab1Item = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  align-items: center;
  background-color: ${(props) => (props.f ? "#b3b3b3" : "#e5e5e5")};
  padding: 5px 10px;
  font-size: 12px;
  p {
    margin: 0;
    padding: 0;
    display: flex;
  }
`;
export const Tab1Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const ChartWrapper = styled.div`
  width: 50%;
  canvas {
    width: 501px !important;
    height: 150px !important;
  }
`;
export const ValWrapper = styled.div`
  text-align: right;
  min-width: 100px;
  width: 100px;
`;
