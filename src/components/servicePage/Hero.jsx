import HeroSection from "../heroSection/HeroSection";
import HeaderH1 from "../HeaderH1";
import Paragraph from "../Paragraph";

const Hero = () => {
  return (
    <HeroSection image="/assets/images/makeup-kit-2.png" alt="makeup kit">
      <HeaderH1>Service Menu</HeaderH1>
      <Paragraph>
        We enhance individial beauty with state-of-the-art technologies and
        personalized service. Our professional team is ready to provide the
        greatest service you've ever had.
      </Paragraph>
    </HeroSection>
  );
};

export default Hero;
