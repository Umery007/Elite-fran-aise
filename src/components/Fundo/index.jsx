import { FundoContainer, Slide } from "./styles";
import fundo from "../../assets/fundo/fundo.png";

export default function Fundo() {
  return (
    <FundoContainer>
      <Slide style={{ backgroundImage: `url(${fundo})` }} />
    </FundoContainer>
  );
}