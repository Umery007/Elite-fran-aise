import Header from "../../components/Header";
import Fundo from "../../components/Fundo";
import Subheader from "../../components/Subheader";
import Section1 from "../../components/Section1";
import { Homediv } from "./styles";
import cume1 from "../../assets/section-img/cume1.png";
import cume2 from "../../assets/section-img/cume2.png";
import cume3 from "../../assets/section-img/cume3.png";
import fundo4 from "../../assets/section-img/fundo4.png";

export default function Home() {
  return (
    <Homediv style={{ backgroundImage: `url(${fundo4})` }}>
      <Header />
      <Fundo />
      <Subheader />

      <div style={{ padding: "60px", background: "rgba(245, 233, 216, 0.85)" }}>

        <Section1
          id="the-restaurant"
          title={`A L'ÉLITE FRANÇAISE ORIGINAL, THE ONE AND ONLY`}
          text={`Is it a brasserie, a bistro, a café or a restaurant? Well, it’s something else entirely!

The Bouillon Chartier embodies a singular spirit and the history of a unique culinary art.

L'Élite Française brings authentic and comforting flavors through Maya Massafera's traditional recipes.

Our cuisine is inspired by French tradition, blending authenticity, refinement, and creativity.

Every dish is carefully prepared by a team of passionate chefs who take pride in enhancing regional and seasonal ingredients.

Rediscover the great classics of your childhood, reinterpreted with a modern touch for a culinary experience rich in emotions and exceptional flavors.`}
          image={cume1}
        />

        <Section1
          id="chef-restaurant"
          title={`DELICACY IN FASHION AND IN CULINARY, MEET YOUR MUSE`}
          text={`Chef Maya Massafera e Silva elevates French cuisine with an artisanal approach and a commitment to homemade excellence.

Her expertise shines through in generous dishes, where every flavor is crafted with precision.

Committed to fresh, seasonal ingredients, she carefully selects exceptional produce to create sincere and refined cuisine.

Her recipes blend tradition and creativity, offering a gourmet experience deeply rooted in the terroir.

Through her dishes, she brings French culinary classics back to life, reimagined with boldness and delicacy. An authentic cuisine designed to awaken the senses and provide a truly unique moment of pleasure.`}
          images={[cume2]}
          imageWidth={520}
          reverse
        />

        <Section1
          id="news"
          title={`AT L'ÉLITE, GOOD FOOD IS OUR TRADITION`}
          text={`Located at the foot of the Iron Lady, facing the Seine quays and just steps away from Place de l'Alma, L'Élite Française welcomes you to one of the finest restaurants in Paris 16, at 10 Avenue de New York.

Nestled in an elegant and refined setting, it offers a unique culinary experience with a breathtaking view of the Eiffel Tower.

Perfect for a romantic dinner or an exceptional lunch, our restaurant near the Seine immerses you in a warm and intimate atmosphere.

Whether you’re visiting the capital or a gastronomy enthusiast, L'Élite Française is one of the must-visit addresses in Paris 16.`}
          image={[cume3]}
          imageWidth={520}
        />

      </div>
    </Homediv>
  );
}