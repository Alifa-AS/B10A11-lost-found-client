import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/shared/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading />
    }

    if(user){
        return children
    }

    return (
        
            <Navigate to='/login' state={location?.pathname}></Navigate>
        
    );
};

export default PrivateRoute;