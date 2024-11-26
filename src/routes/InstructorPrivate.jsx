import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole';
import Loading from '../components/shared/navbar/Loading';



const InstructorPrivate = ({children}) => {
    
    const[userRole,loading]=useRole()


    

    if (loading) {
        console.log('console from loading')
        return <Loading />
    }

   
    if (userRole.role ==='instructor') {
        console.log('console from role')
        return children
    }
    return (<Navigate to="/"></Navigate>)
};

export default InstructorPrivate;