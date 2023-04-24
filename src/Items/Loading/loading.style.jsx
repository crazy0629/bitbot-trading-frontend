import styled, { keyframes } from "styled-components";

const ripple = keyframes`
   from {
      transform: scale(0);
      opacity: 1;
    }

    to {
      transform: scale(1);
      opacity: 0;
    }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Loading = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  margin: 2rem;
  div {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.3rem solid #979fd0;
    animation: 1.5s ${ripple} infinite;

    &:nth-child(2) {
      animation-delay: 0.5s;
    }
  }
`;
