
import fundo2 from "../../assets/fundo2/fundo2.png";
import { PratosContainer } from "./styles";

export default function Pratos() {
  return (
    <PratosContainer style={{ backgroundImage: `url(${fundo2})` }}>
      <div className="menu-card">

        
        <section className="item">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554"
            alt="Starters"
          />
          <div className="text-content">
            <h1>STARTERS</h1>
            <p>Velouté de Saison au Truffe .............</p>
            <p>Escargots de Bourgogne .............</p>
            <p>Tartare de Thon Rouge .............</p>
            <p>Burrata et Tomates d'Antan .............</p>
            <p>Foie Gras de Canard Maison .............</p>
          </div>
        </section>

       
        <section className="item reverse">
          <img
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd"
            alt="Main Dishes"
          />
          <div className="text-content">
            <h1>MAIN DISHES</h1>
            <p>Poulet Fermier Rôti Label Rouge .............</p>
            <p>Boudin Noir .............</p>
            <p>Langue de Boeuf Sauce Diable .............</p>
            <p>Spaghetti à la Bolognaise .............</p>
          </div>
        </section>

     
        <section className="item">
          <img
            src="https://images.unsplash.com/photo-1486299267070-83823f5448dd"
            alt="Cheeses"
          />
          <div className="text-content">
            <h1>CHEESES</h1>
            <p>Roquefort .............</p>
            <p>Reblochon .............</p>
            <p>Sainte-Maure de Touraine .............</p>
            <p>Brie de Meaux .............</p>
            <p>Munster .............</p>
          </div>
        </section>

    
        <section className="item reverse">
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
            alt="Desserts"
          />
          <div className="text-content">
            <h1>DESSERTS</h1>
            <p>Paris-Brest .............</p>
            <p>Mille-Feuille .............</p>
            <p>Clafoutis aux Cerises .............</p>
            <p>Poire Belle Hélène .............</p>
            <p>Riz au Lait .............</p>
          </div>
        </section>

      </div>
    </PratosContainer>
  );
}