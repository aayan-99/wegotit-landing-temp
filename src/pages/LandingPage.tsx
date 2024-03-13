import FolioSection from "../components/FolioSection";
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection";
import TextSlider from "../components/TextSlider";

const LandingPage = () => {

  return (
    <div>
      <TextSlider />
      <div className='w-full px-8 md:px-12 lg:px-36 2xl:px-72'>
        <HeroSection />
        <ServicesSection />
      </div>
      <div className="bg-black w-full px-8 md:px-12 lg:px-36 2xl:px-72">
        <FolioSection />
      </div>
    </div>
  )
}

export default LandingPage