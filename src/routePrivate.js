import { Navigate } from 'react-router-dom';

const RoutePrivate = ({children}) => {
    console.log('private router');
    CheckToken();
    console.log(CheckToken());
    if(CheckToken()) {
        return children; 
    }
    else {
        console.log("call herer")
        return <Navigate to="/login"/>;
    }
}

const CheckToken = () => {
    if (localStorage.getItem('user')) {
        return true;
    }
    return false;
}
export default RoutePrivate;