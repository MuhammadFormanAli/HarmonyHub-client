
import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole';
import Loading from '../components/shared/navbar/Loading';


const AdminPrivate = ({ children }) => {

const[userRole,loading]=useRole()
    

    if (loading) {
        return <Loading />
    }

    if (userRole.role ==='admin') {
        return children
    }
    return (<Navigate to="/"></Navigate>)

};

export default AdminPrivate;