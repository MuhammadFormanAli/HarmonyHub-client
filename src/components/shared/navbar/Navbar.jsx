import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {
  const { logOut, user, loading } = useAuth()
  if (loading) {
    return <div>Loading...</div>
  }
  console.log(user)

  const handleLogout = () => {
    logOut().then(result=>{
      console.log(result)
      Swal.fire('Log out successful')
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="shadow-md m-0 p-0">
      <div className="navbar bg-base-200">
        <div className="navbar-start">

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Instructor</Link></li>
            <li><Link to="/">Class</Link></li>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>

          </ul>
          {
            user ? <div>{user.displayName}</div> : 'no user'
          }
        </div>
        <div className="navbar-end">
          <button onClick={handleLogout} className="btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;