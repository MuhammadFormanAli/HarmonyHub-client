import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
// import Toggle from "../../themeToggle/Toggle";
import ActiveLink from "../activeLink/ActiveLink";
import Loading from "./Loading";


const Navbar = () => {
	const { logOut, user, loading } = useAuth()
	if(loading){
		return <Loading></Loading>
	}
	console.log(user)

	const handleLogout = () => {
		logOut().then(result => {
			console.log(result)
			Swal.fire('Log out successful')
		})
		.catch(error => console.log(error))
	}


	const navigationLinks = <>
		<li><ActiveLink to="/">Home</ActiveLink></li>
		<li><ActiveLink to="/instructors">Instructors</ActiveLink></li>
		<li><ActiveLink to="/classes">Classes</ActiveLink></li>
		{
			!user && <li><ActiveLink to="/register">Register</ActiveLink></li>
		}
		{
			user?.email &&
			<>
				<li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>
			</>
		}
	</>

	return (
		<div className="shadow-md m-0 p-0">
			<div className="navbar bg-base-300">
				<div className="navbar-start">

					<div className="dropdown z-10">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{navigationLinks}

						</ul>
					</div>

					<Link to='/'><img className="w-[150px] hidden sm:block " src="/logo.png" alt="" /></Link>

					{/* <div className="ml-5">
						<Toggle></Toggle>
					</div> */}
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">

						{navigationLinks}
					</ul>

				</div>

				<div className="navbar-end">

					<div className="avatar mr-4">

						<div className="w-[35px] rounded-full ring ring-slate-600 ring-offset-base-100 ring-offset-2">

							<img src={user ? `${user?.photoURL}` : '/avatar.jpg'} />

						</div>

					</div>
					{
						user ? <button onClick={handleLogout} className="btn btn-outline btn-accent">Logout</button> : <li className="list-none"><Link className="btn btn-outline btn-accent" to="/login">Login</Link></li>
					}
				</div>
			</div>
		</div>
	);
};

export default Navbar;