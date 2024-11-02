import Hero from "./_components/Hero/Hero.jsx";
import ProductSection from "./_components/ProductSection";
import Stat from "./_components/Stat.jsx";
import Category from "./_components/Category.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stat />
      <Category />
      <ProductSection />
    </div>
  );
}