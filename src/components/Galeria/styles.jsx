import styled, { keyframes } from 'styled-components';


const scroll = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0); 
  }
`;

export const GaleriaContainer = styled.section`
  width: 100%;
  max-width: 1909px;
  height: 496px;
  margin: 0px auto;
  overflow: hidden; 
  position: relative;

  .gallery-track {
    display: flex;
    height: 100%;
   
    width: calc(400px * 10); 
    
    
    animation: ${scroll} 25s linear infinite;

    
    &:hover {
      animation-play-state: paused;
    }
  }

  .gallery-item {
    position: relative;
    width: 400px; 
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0; 
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

 
  .gallery-item:hover img {
    transform: scale(1.1);
  }

  
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
    text-align: center;
    pointer-events: none;
  }

  .overlay h1 {
    font-size: 40px;
    letter-spacing: 5px;
    font-family: serif;
  }

  .overlay::before,
  .overlay::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 2px;
    background: white;
    top: 55%;
  }

  .overlay::before { right: 115%; }
  .overlay::after { left: 115%; }
`;