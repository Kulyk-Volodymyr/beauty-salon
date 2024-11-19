import HeroSection from "../heroSection/HeroSection";
import HeaderH1 from "../HeaderH1";
import Paragraph from "../Paragraph";

const Hero = () => {
  return (
    <HeroSection image="/assets/images/makeup-kit-1.png" alt="makeup kit">
      <HeaderH1>Our Story</HeaderH1>
      <Paragraph>
        Our main goal was to create the best beauty studio in the world. Can
        there be any compromises in the best studio in the world?
      </Paragraph>
    </HeroSection>
  );
};

export default Hero;
