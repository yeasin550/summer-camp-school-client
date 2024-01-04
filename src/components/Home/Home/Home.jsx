import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MartialArt from "../MartialArt/MartialArt";
import OurKeyFeatures from "../OurKeyFeatures/OurKeyFeatures";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Pricing from "../Pricing/Pricing";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <MartialArt></MartialArt>
            <OurKeyFeatures/>
            <Pricing/>
            <Contact/>
        </div>
    );
};

export default Home;