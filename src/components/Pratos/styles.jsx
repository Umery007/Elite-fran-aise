import styled from "styled-components";

export const PratosContainer = styled.section`
  width: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 10px;

  .menu-card {
    width: 100%;
    max-width: 1500px;
    background: #ffffff;

    padding: 80px 60px;

    border: 12px double #ece3d2;
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.4);

    transition: all 0.3s ease-in-out;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    gap: 90px;
  }

  .item:last-child {
    margin-bottom: 0;
  }

  .item.reverse {
    flex-direction: row-reverse;
  }

  .item img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
    flex-shrink: 0;
  }

  .text-content {
    flex-grow: 1;
    max-width: 500px;
  }

  .item .text-content h1 {
    color: #c5a880;
    font-family: serif;
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 20px;
    letter-spacing: 3px;
  }

  .item p {
    font-size: 25px;
    color: #222;
    font-family: serif;
    margin-bottom: 10px;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;

    .menu-card {
      padding: 50px 40px;
    }

    .item {
      gap: 30px;
      margin-bottom: 50px;
    }

    .item img {
      width: 160px;
      height: 160px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 10px;

    .menu-card {
      padding: 40px 20px;
      border: 8px double #ece3d2;
    }

    .item,
    .item.reverse {
      flex-direction: column;
      text-align: center;
      gap: 20px;
      margin-bottom: 45px;
    }

    .item .text-content h1 {
      font-size: 26px;
    }
  }
`;