import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/shared/navbar/Loading";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
// import { ImCross } from "react-icons/im";
// import { MdOutlinePendingActions } from "react-icons/md";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: allClasses = [], isLoading: loading } = useQuery({
    queryKey: ["allClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`all-classes?email=${user?.email}`);
      return res.data;
    },
  });

  if (loading) {
    return <Loading></Loading>;
  }

  const totalStudents = allClasses.reduce(
    (sum, item) => item?.enrolledStudents + sum,
    0
  );

  const getUniqueArrayByField = (arrayName, fieldName) => {
    let uniqueArray = [];
    arrayName.forEach((item) => {
      let fieldValue = item[fieldName];
      let index = uniqueArray?.findIndex(
        (item) => item[fieldName] === fieldValue
      );
      if (index === -1) {
        uniqueArray?.push(item);
      }
    });

    return uniqueArray;
  };

  const totalInstructor = getUniqueArrayByField(allClasses, "instructorEmail");
  // console.log(allClasses)

  // Bar Chart data
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          3000, 2000, 5145, 6547, 5474, 3000, 8000, 5145, 6547, 2754, 3000,
          8721,
        ],
        backgroundColor: "#d87d4a",
      },
    ],
  };

  //bar Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue ($)",
      },
    },
  };

  //Doughnut Chart options

  const doughnutData = {
    labels: ["Ongoing", "Pending ", "Denied"],
    datasets: [
      {
        data: [
          allClasses?.filter((x) => x.status === "approved").length,
          allClasses?.filter((x) => x.status === "pending").length,
          allClasses?.filter((x) => x.status === "denied").length,
        ],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Doughnut Chart options
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 p-8 text-[#d87d4a] max-w-[1080px] ">
      <div className="text-black">
        <h1 className="text-2xl font-bold mb-2">
        Admin Dashboard!
        </h1>
        <h1 className="text-1xl font-bold mb-5">Welcome {user?.displayName}!</h1>
      </div>

      <div className="flex flex-row gap-4 max-h-[350px]">
        <div className="flex w-full flex-col gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center text-[#d87d4a] hover:text-[#fff] transition-all hover:bg-[#d87d4a]">
            <div>
              <p className=" text-[30px] font-bold"> {totalStudents}</p>
              <h2 className=" ">Students</h2>
            </div>
            <FaUserGraduate size={45} />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center text-[#d87d4a] hover:text-[#fff] transition-all hover:bg-[#d87d4a]">
            <div>
              <p className=" text-[30px] font-bold">
                {" "}
                {totalInstructor?.length}
              </p>
              <h2 className=" ">Instructors</h2>
            </div>
            <FaChalkboardTeacher size={45} />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center text-[#d87d4a] hover:text-[#fff] transition-all hover:bg-[#d87d4a]">
            <div>
              <p className=" text-[30px] font-bold"> {allClasses?.length}</p>
              <h2 className=" ">Classes</h2>
            </div>
            <SiGoogleclassroom size={45} />
          </div>

        </div>
        <div className="w-full">
          <Doughnut
            className=""
            data={doughnutData}
            options={doughnutOptions}
          />
        </div>
      </div>

      <div>
        {/*Bar Charts */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AdminDashboard;
