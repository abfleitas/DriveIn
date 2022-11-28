import {Navigate} from 'react-router-dom'

const ProtectUser = ({user, children}) => {
    if(user) return children;
    if(!user) return <Navigate to={-1}/>;
}

export default ProtectUser;