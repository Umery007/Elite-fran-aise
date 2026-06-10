import styled from "styled-components";
import contatoimg from "../../assets/contatoimg/Group.png"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
 background-image: url(${contatoimg});
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1000px;
    height: 600px;
    display: flex;
    background: #f3f0ea;
  }

  .left {
    flex: 1;
    background-image: url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a");
    background-position: center;
    background-size: cover;
  }

  .overlay {
    width: 87%;
    height: 90%;
    background: rgba(0, 0, 0, 0.25);
    padding: 30px;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .overlay h1 {
    font-size: 42px;
  }

  .text h2 {
    font-size: 50px;
    text-transform: uppercase;
  }

  .right {
    flex: 1;
    padding: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .row {
    display: flex;
    gap: 15px;
  }

  .field {
    width: 100%;

    display: flex;
    flex-direction: column;
    
  }

  input,
  select,
  textarea {
    padding: 10px;
    border: 1px solid #d1c6a5;
    outline: none;
    border-radius:7px
  }

  textarea {
    resize: none;
    height: 120px;
    border-radius:7px
  }

  button {
    height: 55px;
    border: none;
    background: #d8b56c;
    cursor: pointer;
    font-weight: bold;
    border-radius:7px
  }
`;