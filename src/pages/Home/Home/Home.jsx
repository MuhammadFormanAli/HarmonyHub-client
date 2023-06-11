
import ContactUs from "../../../components/ContactUs";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    const {loading}=useAuth()
    if(loading){
        return<>Loading.............................</>
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