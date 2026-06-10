import styled from "styled-components";

/* HEADER */
export const Subheaderdiv = styled.div`
 .marquee-container {
  width: 100%; 
 
  overflow: hidden; 
  background-color: #161616; 
  padding: 10px 0;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  color: #ffffff; 
  font-family: monospace;
  font-weight: bold;
  font-size: 20px;
  animation: marquee 120s linear infinite; 
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.marquee-text:hover {
  animation-play-state: paused;
}
`;