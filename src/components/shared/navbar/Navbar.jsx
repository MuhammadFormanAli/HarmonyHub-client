import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
// import Toggle from "../../themeToggle/Toggle";
import ActiveLink from "../activeLink/ActiveLink";
import Loading from "./Loading";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const { logOut, user, loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire("Log out successful");
      })
      .catch((error) => console.log(error));
  };

  const navigationLinks = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      {!user && (
        <li>
          <ActiveLink to="/register">Register</ActiveLink>
        </li>
      )}
      {user?.email && (
        <>
          <li>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" bg-[#101010]">
      <div className="navbar container mx-auto border-b border-b-[#979797] m-0 px-[10px] ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="md:hidden">
              <MdMenu size={25} color="#fff" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#101010] rounded-box w-52"
            >
              {navigationLinks}
            </ul>
          </div>

          {/* <Link to='/'><img className="w-[150px] hidden sm:block " src="/logo.png" alt="" /></Link> */}
          <Link to="/" className="text-[#ffffff] text-[20px] hidden md:block">
            harmonyHub
          </Link>

          {/* <div className="ml-5">
						<Toggle></Toggle>
					</div> */}
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navigationLinks}</ul>
        </div>

        <div className="navbar-end">
          <div className="avatar mr-4">
            <div className="w-[50px] rounded-full  ">
              <img src={user ? `${user?.photoURL}` : "/avatar.jpg"} />
            </div>
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#D87D4A] text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all"
            >
              Logout
            </button>
          ) : (
            <li className="list-none">
              <Link className="bg-[#D87D4A] text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all" to="/login">
                Login
              </Link>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
