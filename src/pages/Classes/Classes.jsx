import { Helmet } from "react-helmet-async";
import Loading from "../../components/shared/navbar/Loading";
import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [classes, loading] = useClasses()
    if (loading) {
        return <Loading></Loading>
    }
    console.log(classes)
    return (
        <>
            <Helmet> <title>Classes - HarmonyHub</title></Helmet>
            <div className="my-4 bg-gray-900 bg-opacity-50 rounded-md p-3">
                <h1 className="text-3xl text-center font-bold p-3 text-white">Our Classes</h1>
                <div className="flex flex-col gap-3">
                    {
                        classes?.map(course => <ClassCard
                            key={course._id}
                            course={course}
                        ></ClassCard>)
                    }
                </div>

            </div>
        </>
    );
};

export default Classes;