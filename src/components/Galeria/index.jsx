import { GaleriaContainer } from "./styles";
import Header from "../Header";
import Subgaleria from "../Subgaleria"
import Subheader from "../Subheader";
import Pratos from "../Pratos"
import food1 from "../../assets/galeria/food1.png";
import food2 from "../../assets/galeria/food2.png";
import wine from "../../assets/galeria/wine.png";
import food3 from "../../assets/galeria/food3.png";
import desert from "../../assets/galeria/desert.png";

function Gallery() {
  return (
    <>
      <Header />
      <Subgaleria title="Subgaleria" />
      <Subheader />
      
      <GaleriaContainer>
       
        <div className="overlay">
          <h1>GALLERY</h1>
        </div>


        <div className="gallery-track">
         
          <div className="gallery-item"><img src={food1} alt="" /></div>
          <div className="gallery-item"><img src={food2} alt="" /></div>
          <div className="gallery-item"><img src={wine} alt="" /></div>
          <div className="gallery-item"><img src={food3} alt="" /></div>
          <div className="gallery-item"><img src={desert} alt="" /></div>

          <div className="gallery-item"><img src={food1} alt="" /></div>
          <div className="gallery-item"><img src={food2} alt="" /></div>
          <div className="gallery-item"><img src={wine} alt="" /></div>
          <div className="gallery-item"><img src={food3} alt="" /></div>
          <div className="gallery-item"><img src={desert} alt="" /></div>
        </div>
      </GaleriaContainer>
      <Pratos />
    </>
  );
}

export default Gallery;