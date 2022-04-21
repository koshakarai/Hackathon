import { Navigate, useParams } from "react-router-dom";

const RequireAuth = ({children}) => {
    const auth = false
    if (!auth){
        <Navigate to='/'/>
    }

    return children;
}

export {RequireAuth};