import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const Title = styled.h1`
  position: absolute;
  top: 70px;

  color: white;
  font-size: 55px;
  text-transform: lowercase;
  font-family: "Roboto Slab", serif;
  z-index: 2;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;

  background: #f8f6f1;
  padding: 40px;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  z-index: 2;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto Slab", serif;
`;

export const Input = styled.input`
  height: 42px;

  border-radius: 6px;
  border: 1px solid #b5871d;

  padding-left: 10px;
  outline: none;

  font-family: "Roboto Slab", serif;
`;

export const Button = styled.button`
  margin: 20px auto 0 auto;

  width: 220px;
  height: 45px;

  border-radius: 6px;
  border: 2px solid #b5871d;

  background: #e6c371;

  font-size: 18px;
  cursor: pointer;

  font-family: "IM Fell French Canon SC", serif;

  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Links = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  z-index: 2;
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: white;
  font-size: 18px;

  font-family: "Roboto Slab", serif;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
`;