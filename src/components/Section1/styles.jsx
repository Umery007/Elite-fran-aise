import styled from "styled-components";

export const Section1div = styled.section`
  scroll-margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 260px;
  margin-bottom: 100px;

  background: transparent;
  padding: 0;

  &.reverse {
    flex-direction: row-reverse;
  }

  .text {
    max-width: 520px;
  }

  .text h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .text p {
    font-size: 20px;
    line-height: 1.7;
    color: #333;
  }

  img {
    width: 420px;
    border-radius: 18px;
    object-fit: cover;
    transform: translateX(10px);
  }

  .images-grid {
    position: relative;
    width: 520px;
    height: 480px;
  }

  .images-grid img:first-child {
    width: 300px;
    border-radius: 18px;
    position: relative;
    z-index: 2;
    transform: translateX(-40px) translateY(-20px);
  }

  .images-grid img:last-child {
    width: 520px;
    border-radius: 18px;
    position: absolute;
    top: 40px;
    left: -30px;
    z-index: 1;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;

    &.reverse {
      flex-direction: column;
    }

    img {
      width: 100%;
      transform: none;
    }

    .images-grid {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .images-grid img,
    .images-grid img:last-child {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      transform: none;
    }
  }
`;