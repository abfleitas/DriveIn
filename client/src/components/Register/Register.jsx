import React from "react";
import './register.css';
import { Link } from "react-router-dom";
import iconG from "../../images/google.png";

export const Register = () => {
    

    return (
        <div className="h-screen bg-slate-900 flex justify-center items-center container-reg">
            <div className="flex w-[600px] h-[600px] flex-col rounded-lg shadow-[0_35px_60px_-15px_#009A88] container-data">
                <h2>Registrarme</h2>
                <form className="flex flex-row w-full justify-around">
                <div className="flex flex-col w-2/5">
                    <div className="c-input">
                        <div className="data">
                            <input type="text" className="" required/>
                            <span className="">Nombre</span>
                        </div>
                    </div>
                    <div className="c-input mt-2">
                        <div className="data">
                        <input type="text" className="" required/>
                        <span className="">E-mail</span>
                        </div>
                    </div>
                    <div className="c-input mt-2">
                        <div className="data">
                        <input type="password" className="" required/>
                        <span className="">Contraseña</span>
                        </div>
                    </div>
                    <div className="c-input mt-2">
                        <div className="data">
                        <input type="password" className="" required/>
                        <span className="">Repetir Contraseña</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-2/5">
                    <div className="c-input">
                        <div className="data">
                        <input type="text" className="" required/>
                        <span className="">Apellido</span>
                        </div>
                    </div>
                    <div className="c-input mt-2">
                        <div className="data">
                        <input type="text" className="" required/>
                        <span className="">Telefono</span>
                        </div>
                    </div>
                    <div className="c-input mt-2">
                        <div className="data">
                        <input type="text" className="" required/>
                        <span className="">Celular</span>
                        </div>
                    </div>
                </div>
                </form>
                <div className="flex flex-col justify-around items-center w-[300px] m-auto">
                    <button className="w-full h-[40px] rounded-lg bg-[#009A88] text-white font-semibold">Registrarme</button>
                    <button className="relative mt-6 w-full h-[40px] rounded-lg bg-white text-black text-sm font-semibold btn-google"><img src={iconG} alt="icon-g" className="absolute mx-6 mt-[2px]"></img>Registrarme con Google</button>
                    <span className="text-white mt-6">Ya tienes una cuenta? <Link to="/home" className="text-[#F97D67]">Inicia sesión</Link></span>
                </div>
            </div>
        </div>
    )
}