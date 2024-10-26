
import ContactUs from "../contactUs/ContactUs";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { Helmet } from "react-helmet-async";
import LatestUpdate from "../latestUpdate/LatestUpdate";
import InstrumentShowcase from "../instrumentShowcase/InstrumentShowcase";
import CommunityHub from "../communityHub/CommunityHub";
// import PerformanceTips from "../performanceTips/PerformanceTips";
import AboutUs from "../aboutUs/AboutUs";
import Loading from "../../../components/shared/navbar/Loading";



const Home = () => {
    const { loading } = useAuth()
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Helmet> <title>Home - HarmonyHub</title></Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <CommunityHub />
            <InstrumentShowcase />
            <LatestUpdate />
            {/* <PerformanceTips /> */}
            <AboutUs />
            <ContactUs />
        </>
    );
};

export default Home;