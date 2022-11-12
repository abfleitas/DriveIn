import React from "react";
import fondo from "../../images/turismo.jpeg";
import fondo2 from "../../images/register-fondo.webp"
import './register.css';

export const Register = () => {
    

    return (
        <div className="h-screen flex justify-center items-center container-reg">
            <div className="flex w-[750px] h-[400px] flex-col bg-red-600 container-data">
                <h2>Registration</h2>
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
                        <input type="text" className="" required/>
                        <span className="">Contraseña</span>
                        </div>
                    </div>
                    <div className="c-input mt-2">
                        <div className="data">
                        <input type="text" className="" required/>
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
                <div className="flex flex-row justify-around items-center w-[300px]">
                    <button>Registrarme</button>
                    <button>Registrarme con Goggle</button>
                </div>
            </div>
        </div>
    )
}