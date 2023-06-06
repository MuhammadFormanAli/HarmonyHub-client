import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <div>Navbar will be here</div>
            <Outlet></Outlet>
            <div>Footer Will be here</div>
        </>
    );
};

export default Main;