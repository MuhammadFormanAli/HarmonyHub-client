
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import Loading from '../components/shared/navbar/Loading';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Loading />
    }

    if (user) {
        return children
    }

    return (<Navigate to="/login" state={{ from: location }}></Navigate>)
};

export default PrivetRoute;