import styled from "styled-components";

export const Subgaleriadiv = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  margin-bottom: 0px;
  
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  .content h1 {
    font-family: serif;
    font-size: 48px;
    font-weight: 400;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 15px;
  }

  .content p {
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
    max-width: 900px;
    line-height: 1.6;
    margin: 0 auto 20px;
    text-align: center;
    opacity: 0.95;
  }

  .line {
    width: 500px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    height: 50vh;

    .content h1 {
      font-size: 32px;
    }
    .content p {
      font-size: 16px;
      max-width: 320px;
    }
    
    .line {
      width: 200px; /* Ajustado para o traço não ficar pequeno demais no celular */
    }
  }
`;