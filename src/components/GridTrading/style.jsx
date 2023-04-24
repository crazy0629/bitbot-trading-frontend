import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0;
  height: calc(100vh - 62px);
  width: 100%;
  overflow-y: scroll;
`;
export const OptionGrp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .exchange-icon {
    font-size: 18px;
    color: #655dc0;
    cursor: pointer;
    :hover {
      transform: scale(1.1, 1.1);
    }
  }
`;
export const CustomSelectGrp = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 30px 0;
  gap: 10px;
  .custom-class {
    width: 130px;
  }
`;
export const PinkCircle = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 5px;
    margin-left: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #c02db9;
  }
`;
