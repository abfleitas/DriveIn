import React, { useEffect } from "react";
import DriveIn from "../../images/LogoVerde.png";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAuth } from "../../redux/actions/actions";
import { User } from "../User/User";

export default function Navbar() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user);
  const { user, isAuthenticated } = useAuth0();
  let activeStyle = {
    color: "#41D3C0",
  };

  useEffect(() => {
    if (isAuthenticated) {
      const nuevo = {
        name: user.given_name,
        email: user.email,
        photo: user.picture,
        lastName: user.family_name,
      };
      dispatch(loginUserAuth(nuevo));
    }
  }, [status, isAuthenticated]);

  const userLogin = JSON.parse(localStorage.getItem("UserLogin"));
  let location = useLocation();
  return (
    <div>
      <div className="bg-blue-500">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-lg rounded-bl-2xl">
          <div className="text-3xl font-bold leading-none" href="#">
            <NavLink to="/">
              <img src={DriveIn} alt="" className="h-12 mr-1 " />
            </NavLink>
          </div>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <div className="text-sm text-[#2e3a46] hover:text-[#f97d67] font-bold font-sans cursor-pointer">
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </div>
            </li>
            <li className="text-[#f97d67]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <div className="text-sm text-[#2e3a46] hover:text-[#f97d67] font-bold font-sans cursor-pointer">
                <NavLink
                  to="/nosotros"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Nosotros
                </NavLink>
              </div>
            </li>

            <li className="text-[#f97d67]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <div className="text-sm text-[#2e3a46] hover:text-[#f97d67] font-bold font-sans cursor-pointer">
                <NavLink
                  to="/contacto"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contacto
                </NavLink>
              </div>
            </li>
            {userLogin && (
              <>
                <li className="text-[#f97d67]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <div
                    className="text-sm text-[#2e3a46] hover:text-[#f97d67] font-bold font-sans cursor-pointer"
                    href="#"
                  >
                    <NavLink
                      to="/favorite"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Favoritos
                    </NavLink>
                  </div>
                </li>
              </>
            )}
          </ul>
          <div>
            {userLogin ? (
              <User img={userLogin.photo} name={userLogin.name} />
            ) : (
              location.pathname !== "/login" &&
              location.pathname !== "/register" && (
                <div>
                  <Link to="/login">
                    <div className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-300 hover:bg-gray-100 text-sm text-[#2e3a46] font-bold font-sans  rounded-xl transition duration-200 hover:bg-[#f97d67] hover:ring-[#f97d67] cursor-pointer">
                      <NavLink to="/login">Iniciar Sesión</NavLink>
                    </div>
                  </Link>
                  <div className="hidden lg:inline-block py-2 px-6 bg-[#009A88] hover:bg-[#34d399] hover:ring-[#34d399] text-sm text-white font-bold font-sans rounded-xl transition duration-200 cursor-pointer">
                    <NavLink to="/register">Registrarse</NavLink>
                  </div>
                </div>
              )
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
