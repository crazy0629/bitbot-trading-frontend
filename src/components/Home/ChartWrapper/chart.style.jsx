import styled from "styled-components";

export const ChartWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ChartTopWrapper = styled.div`
  height: 66px;
  border-bottom: 1px solid #d1cfcf;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;
export const SelectedCoin = styled.div`
  display: flex;
  align-items: center;
`;
export const CoinImg = styled.img`
  width: 24px;
`;
export const CoinName = styled.div`
  margin-left: 10px;
  cursor: pointer;
  div {
    font-size: 16px;
    font-family: AveBold;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  span {
    font-size: 12px;
    text-decoration: underline;
  }
`;
export const CurrentCoin = styled.div`
  display: flex;
  color: #f04848;
  flex-direction: column;
  margin: 0 10px 0 26px;
  div {
    font-size: 16px;
    font-family: AveBold;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  span {
    font-size: 12px;
  }
`;
export const PriceList = styled.div`
  margin-left: 26px;
  display: flex;
  align-items: center;
  gap: 26px;
`;
export const PriceItem = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #292c33;
  div {
    color: #788194;
  }
`;
