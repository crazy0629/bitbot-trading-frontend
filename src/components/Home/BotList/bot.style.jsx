import styled from "styled-components";

export const SideWraper = styled.div`
  display: flex;
  padding: 16px 0;
  width: 400px;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid #d1cfcf;
`;
export const SideTitleWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 0 16px;
`;
export const Title = styled.div`
  font-size: 14px;
  font-family: AveBold;
  width: 100%;
`;
export const TitleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
export const ListBtn = styled.div`
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 4px;
  font-family: AveBold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  background-color: #f2f3f5;
  :hover {
    color: rgba(0, 0, 0, 1);
  }
`;
export const StrategyTitle = styled.div`
  font-size: 12px;
  width: calc(100% - 32px);
  padding: 0 16px;
`;
export const Strategy = styled.div`
  margin-top: 25px;
`;
export const ExchangeBtn = styled.div`
  border-radius: 10px;
  margin: 0 16px;
  height: 71px;
  margin-top: 12px;
  font-family: AveBold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: #000;
  border: 1px solid #e5e4e4;
  .riexchange {
    font-size: 22px;
    margin-right: 5px;
    color: #7ca1d8;
  }
  :hover {
    border-color: #7f7f7f;
  }
`;
export const BotList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;
export const BotItem = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 16px;
  :hover {
    background-color: #dfdfdf;
  }
`;
export const BotLeft = styled.div`
  display: flex;
`;
export const BotImg = styled.img`
  width: 36px;
  margin-right: 17px;
`;
export const BotTitle = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    font-size: 14px;
    font-family: AveBold;
  }
`;
export const BotCreateBtn = styled.div`
  background-color: #ff7028;
  padding: 8px 15px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  font-family: AveBold;
  border-radius: 50px;
`;
