import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { exitSesion, refreshAuthUser } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const User = ({img, name}) => {
    const { isAuthenticated, logout, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(refreshAuthUser())
     },[isLoading])

    const handlerExitSession = () => {
        if (isAuthenticated) {
          logout();
          localStorage.removeItem("UserLogin");
        } else {
          dispatch(exitSesion());
          navigate("/login");
        }
    }


    return (
        <nav className="w-[200px] h-[60px] bg-slate-900 rounded-xl">
            <div className="w-full flex flex-row justify-around ">
                <figure className="w-[50px] h-[50px] ml-4 mt-[4px]">
                    <img src={img} alt="img-user" className="rounded-2xl"/>
                </figure>
                <span className="text-white m-auto">{name}</span>
            </div>
            <button onClick={handlerExitSession}>Salir</button>
            {/* <ul>
                <li>
                    <button>
                        Salir
                    </button>
                </li>
            </ul> */}
        </nav>
    )
}