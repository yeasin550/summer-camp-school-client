import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FreePass from "../FreePass/FreePass";
import ImproveSkills from "../ImproveSkills/ImproveSkills";
import MartialArt from "../MartialArt/MartialArt";
import OurKeyFeatures from "../OurKeyFeatures/OurKeyFeatures";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Pricing from "../Pricing/Pricing";
import SchoolBenefits from "../SchoolBenefits/SchoolBenefits";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <MartialArt></MartialArt>
            <ImproveSkills />
            <SchoolBenefits />
            <FreePass/>
            <OurKeyFeatures/>
            <Pricing/>
            <Contact/>
        </div>
    );
};

export default Home;