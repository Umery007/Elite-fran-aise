import styled from "styled-components";


export const Headerdiv = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  min-height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  padding: 12px 40px;
  color: #fff;
  box-sizing: border-box;

  background: transparent;

  transition: 
    background 0.4s ease,
    color 0.4s ease,
    box-shadow 0.4s ease,
    backdrop-filter 0.4s ease,
    transform 0.4s ease;

  z-index: 1000;

  /* ESTADO SCROLL */
  &.scrolled {
    background: rgba(255, 255, 255, 0.95);
    color: #000;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: "Hahmlet", serif;
    font-size: 14px;
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 1040px) {
    padding: 10px 30px;
  }

  @media (max-width: 900px) {
    padding: 10px 20px;
  }
`;


export const MenuButton = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  span {
    width: 25px;
    height: 2px;
    background: currentColor;
  }
`;

export const NavLeft = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  min-width: 0;

  @media (max-width: 1040px) {
    gap: 22px;
  }

  @media (max-width: 960px) {
    gap: 16px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavRight = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  min-width: 0;

  @media (max-width: 1040px) {
    gap: 22px;
  }

  @media (max-width: 960px) {
    gap: 16px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;


export const Logo = styled.div`
  font-family: "IM FELL French Canon SC", serif;
  font-size: 22px;
  text-align: center;
  flex: 0 1 auto;
  min-width: 0;
  white-space: nowrap;
`;


export const Button = styled.button`
  background: #c3a561;
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  ${Headerdiv}.scrolled & {
    background: #c3a561;
    color: #fff;
  }
`;


export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    padding: 20px;

    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-20px);
    opacity: 0;
    transition: 0.3s;

    &.open {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;