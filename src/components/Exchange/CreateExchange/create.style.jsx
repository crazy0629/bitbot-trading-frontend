import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 30px 20px;
  width: 100%;
  height: calc(100vh - 62px);
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;

export const SubWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateForm = styled.div`
  width: 60%;
  .custom-class {
    width: 100%;
  }
  .custom-input {
    width: 100%;
  }
`;

export const AccountBtnGroup = styled.div`
  display: flex;
  width: fit-content;
  .custom-btn {
    margin: 5px;
  }
`;

export const Title = styled.div`
  font-family: AveBold;
  color: #000;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #8c8c8c;
  margin-bottom: 10px;
  padding-top: 20px;
`;

export const Btn = styled.div`
  background-color: #1677ff;
  color: #fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  align-items: center;
  width: fit-content;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 16px;
  margin-top: 30px;
  img {
    width: 100px;
  }
  :hover {
    background-color: #4796ff;
  }
`;
