import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  border-bottom: 1px solid #d1cfcf;
`;
export const HeaderLogo = styled.img`
  height: 50px;
`;
export const HeaderMenus = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const MenuItem = styled.div`
  font-family: AveBold;
  display: flex;
  color: #000;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #ff7028;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const SignBtn = styled.div`
  cursor: pointer;
  font-family: AveBold;
  color: #000;
  font-size: 15px;
  border: ${(props) => props.border && "1px solid #282c33"};
  padding: ${(props) => props.border && "10px 24px"};
  border-radius: 40px;
  transition: all 0.3s ease-in-out;
  :hover {
    color: ${(props) => (props.border ? "#fff" : "#ff7028")};
    border-color: ${(props) => props.border && "#ff7028"};
    background: ${(props) => props.border && "#ff7028"};
  }
`;
export const BtnGrpItem = styled.img`
  width: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    fill: #ff7028;
  }
`;
export const SignBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
