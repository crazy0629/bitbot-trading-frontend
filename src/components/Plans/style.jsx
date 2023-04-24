import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  font-family: AveBold;
  color: #000;
  font-size: 40px;
  margin-bottom: 30px;
  margin-top: 50px;
`;
export const CardGrp = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const Card = styled.div`
  border: 1px solid #c9c9c9;
  cursor: pointer;
  display: flex;
  min-width: 250px;
  justify-content: center;
  padding-bottom: 30px;
  align-items: center;
  flex-direction: column;
`;
export const CardTitle = styled.div`
  font-size: 15px;
`;
export const CardBasicText = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const CardPay = styled.div`
  font-size: 60px;
  letter-spacing: 5px;
  display: flex;
  align-items: flex-start;
  margin: 20px 0;
  span {
    font-size: 12px;
  }
`;
export const UnderText = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #929292;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding-top: 30px;
  gap: 20px;
`;
export const SelectBtn = styled.div`
  width: 80%;
  background-color: #21571c;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 30px 0;
`;
export const CardTopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  :hover {
    background-color: #ccebc9;
  }
`;
