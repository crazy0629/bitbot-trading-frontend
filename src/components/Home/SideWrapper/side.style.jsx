import styled from "styled-components";

export const BotList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 0;
`;
export const BotItem = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  font-size: 12px;
  color: #000;
  cursor: pointer;
  opacity: 0.4;
  svg {
    font-size: 24px;
  }
  :hover {
    opacity: 1;
  }
`;
export const SideWraper = styled.div`
  display: flex;
  width: 55px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #d1cfcf;
`;
