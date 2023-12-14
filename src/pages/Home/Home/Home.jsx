
import ContactUs from "../contactUs/ContactUs";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { Helmet } from "react-helmet-async";
import LatestUpdate from "../latestUpdate/LatestUpdate";
import InstrumentShowcase from "../instrumentShowcase/InstrumentShowcase";
import CommunityHub from "../communityHub/CommunityHub";
import PerformanceTips from "../performanceTips/PerformanceTips";
import AboutUs from "../aboutUs/AboutUs";


const Home = () => {
    const { loading } = useAuth()
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }
    return (
        <div>
            <Helmet> <title>Home - HarmonyHub</title></Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <InstrumentShowcase />
            <CommunityHub />
            <LatestUpdate />
            <PerformanceTips />
            <AboutUs />
            <ContactUs />
        </div>
    );
};

export default Home;