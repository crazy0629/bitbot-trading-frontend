import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 30px 0;
  width: 100%;
  height: calc(100vh - 62px);
  overflow-y: scroll;
`;
export const Title = styled.div`
  font-family: AveBold;
  color: #000;
  font-size: 20px;
  margin-bottom: 15px;
  margin-left: 30px;
`;
export const SubWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #c2c2c2;
  padding-left: 30px;
`;
export const AccountTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #8c8c8c;
  margin-bottom: 10px;
  span {
    color: #000;
    font-family: AveBold;
    font-size: 15px;
    margin-bottom: 7px;
  }
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
