import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0;
  width: 100%;
  height: calc(100vh - 62px);
  overflow-y: scroll;
`;
export const CustomSelectGrp = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 30px 0;
  gap: 10px;
  .custom-marketplace-class {
    width: 180px;
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

export const Title = styled.div`
  font-family: AveBold;
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-top: 30px;
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
export const FolloWrapper = styled.div`
  color: #000;
  font-size: 14px;
  margin-left: 10px;
`;
export const CardGrp = styled.div`
  margin-top: 20px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  padding-bottom: 50px;
  column-gap: 100px;
`;
export const CustomCard = styled.div`
  max-width: 350px;
  min-width: 350px;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const CustomTop = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: calc(100% - 40px);
  justify-content: space-between;
`;
export const CustomTopLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;
export const CustomTopLeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  span {
    color: #7ca1d8;
  }
`;
export const CustomTopRight = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #a7a7a7;
  gap: 3px;
  span {
    white-space: nowrap;
    color: #000;
  }
`;
export const BinanceTextLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: #cbcbcb;
  width: 100%;
`;
export const BinanceLeft = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  img {
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`;
export const BinanceRight = styled.div`
  background-color: #fff;
  padding: 2px;
  border-radius: 3px;
  font-size: 12px;
`;
export const FollowBtn = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: AveBold;
  color: #7ca1d8;
  font-size: 17px;
  height: 35px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #d8d6d6;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
export const PercentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  width: calc(100% - 40px);
  img {
    width: 130px;
    height: 50px;
  }
`;
export const PercentText = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 25px;
    font-family: AveBold;
    color: #4a8526;
  }
`;
