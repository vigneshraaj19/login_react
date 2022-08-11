import React from "react";
import {Route,Navigate} from 'react-router-dom';

const ProtectedRouter = ({element,...rest}) =>{
    var RenderComponents =element;
    return(
        <Route
        {...rest}
        render ={
            props => {
                return true?(
                    <RenderComponents {...props} />
                ):(<Navigate to ={{ pathname:'/login'}}/>
                )
            }
        }
        />
    )
}
export default  ProtectedRouter;