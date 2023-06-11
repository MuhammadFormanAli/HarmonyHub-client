
import ContactUs from "../contactUs/ContactUs";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    const { loading } = useAuth()
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;