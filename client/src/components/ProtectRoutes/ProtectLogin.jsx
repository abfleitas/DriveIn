import {Navigate} from 'react-router-dom'

const ProtectLogin = ({user, children}) => {
    if(user) return <Navigate to={-1}/>;
    if(!user) return children;
}

export default ProtectLogin;