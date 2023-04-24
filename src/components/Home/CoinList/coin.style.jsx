import styled from "styled-components";

export const SideWraper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1cfcf;
  margin: 16px 16px 0;
  height: 35px;
  color: #909090;
  border-radius: 10px;
  input {
    border-radius: 10px;
    height: 90%;
    outline: none;
    width: 100%;
    border: none;
    font-size: 15px;
  }
  .coin-search {
    margin: 0 5px 0 10px;
    font-size: 15px;
  }
`;
export const THeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 16px 0;
  span {
    font-size: 12px;
    color: #788194;
  }
`;
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    font-size: 12px;
    color: #788194;
    width: 75px;
    text-align: right;
  }
`;
export const CoinItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 13px;
  /* border-left: 3px solid #ff7028; */
  :hover {
    background-color: #f2f3f5;
  }
`;
export const CoinWrapper = styled.div`
  margin-top: 5px;
  overflow-y: scroll;
  max-height: calc(100vh - 146px);
`;
export const CoinLeft = styled.div``;
export const CoinRight = styled.div`
  display: flex;
  align-items: center;
`;
export const CLTop = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  span {
    font-size: 12px;
    color: #292c33;
  }
`;
export const CLBottom = styled.div`
  color: #9ea6b8;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  div {
    margin-left: 9px;
  }
`;
export const CRLeft = styled.div`
  font-size: 12px;
  text-align: right;
  color: ${(props) => (props.f ? "#00b070" : "#f04848")};
  div {
    color: #9ea6b8;
    margin-top: 4px;
  }
`;
export const CRRight = styled.div`
  width: 65px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12.8px;
  background-color: ${(props) => (props.f ? "#00b070" : "#f04848")};
  margin-left: 13px;
`;
