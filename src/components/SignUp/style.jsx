import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 100px;
`;
export const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 30px 30px 50px;
`;
export const Title = styled.div`
  font-family: AveBold;
  color: #333333;
  font-size: 35px;
  margin-bottom: 30px;
`;
export const CusInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  span {
    color: #292c33;
    font-size: 16px;
    margin-bottom: 5px;
  }
  input {
    border: 1px solid #dcdcdc;
    outline: none;
    width: 380px;
    height: 48px;
    border-radius: 10px;
    padding: 0 10px;
  }
`;
export const Btn = styled.div`
  width: 380px;
  height: 48px;
  background-color: #ff7028;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  align-items: center;
  font-size: 16px;
  margin-top: 30px;
  :hover {
    background-color: #f89260;
  }
`;
export const ForgotWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  span {
    color: #f89260;
    margin-left: 3px;
    cursor: pointer;
  }
`;
