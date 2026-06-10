import styled from "styled-components";

export const FundoContainer = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;