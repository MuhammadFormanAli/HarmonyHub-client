import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole';



const InstructorPrivate = ({children}) => {
    
    const[userRole,loading]=useRole()


    

    if (loading) {
        console.log('console from loading')
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }

   
    if (userRole.role ==='instructor') {
        console.log('console from role')
        return children
    }
    return (<Navigate to="/"></Navigate>)
};

export default InstructorPrivate;