import { Subgaleriadiv } from "./styles";
import image17 from "../../assets/subgaleria/image17.png";

const Subgaleria = ({ title, text }) => {
  return (
    <Subgaleriadiv $bgImage={image17}>
      <div className="overlay">
        <div className="content">
          <h1>{title}</h1>
          {text && <p>{text}</p>}
          <div className="line"></div>
        </div>
      </div>
    </Subgaleriadiv>
  );
};

export default Subgaleria;