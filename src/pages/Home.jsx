import Hero from "../components/homePage/Hero";
import Service from "../components/homePage/Service";
import OurStory from "../components/ourStorySection/OurStory";
import AsSeenOn from "../components/homePage/AsSeenOn";
import Follow from "../components/homePage/Follow";
import Instagram from "../components/homePage/Instagram";
import Contacts from "../components/contactsSections/Contacts";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <OurStory />
      <AsSeenOn />
      <Follow />
      <Instagram />
      <Contacts />
    </>
  );
};

export default Home;
