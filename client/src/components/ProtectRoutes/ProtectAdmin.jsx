import {Navigate} from 'react-router-dom'

const ProtectAdmin = ({role, children}) => {
    console.log(role);
    if(role === 1 || role === null) return <Navigate to={-1}/>;
    if(role === 2) return children;
}

export default ProtectAdmin;