import FeatuteProducts from "../../Components/FeatureProducts/FeatuteProducts";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import AllSlide from "../../Components/Slides/CommonSlide/AllSlide";
import "./Home.css";

export default function Home() {
  return (
    <>
      <AllSlide />
      <FeatuteProducts />
      <ProductContainer />
    </>
  );
}
