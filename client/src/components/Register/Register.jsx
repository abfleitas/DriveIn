import React,{useState, useEffect} from "react";
import './register.css';
import {Link, useNavigate} from "react-router-dom";
import iconG from "../../images/google.png";
import { useDispatch, useSelector} from "react-redux";
import { registerUser, statusLogin, postMails } from "../../redux/actions/actions";
import swal from "sweetalert";

function validate(input){
    let errors={};
        if(!input.name){
            errors.name="Se require un Nombre"; 
        }else if(input.name){
          if (!/^[a-z A-Z]+$/.test(input.name)){
          errors.name="Solo se aceptan letras"
            }  
        }         
        if (input.email){
            if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(input.email)){
                errors.email ="email invalido"
            }             
        }        
        
         if(!input.lastName){
            errors.lastName ="Se requiere un Apellido"
        }else if(input.lastName){
            if (!/^[a-z A-Z]+$/.test(input.lastName)){
                errors.lastName="Solo se aceptan letras"
            }        
        }
        if(!input.password){
            errors.password="Se requiere contraseña"
        }
        if(!input.password2){
            errors.password2 ="Se requiere contraseña"
        }else if(input.password2){
            if(input.password2 !== input.password){
                errors.password2 ="Las contraseñas no coinciden"
            }
        }
        if(!input.phone){
           errors.phone="Este campo es requerido"
        }
        if(!input.celular){
            errors.celular="Este campo es requerido"
        }
       
    
        
        
   return errors   

}


export const Register=() => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const stateLogin = useSelector(state => state.user)
    const [errors, setErrors] =useState({});
    
    const [input,setInput]=useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        password2:"",
        phone: "",
        whatsapp: "",
    });
    console.log(input);

    useEffect(()=>{
        dispatch(statusLogin())
    }, [stateLogin])
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        )
    }
    function handleSubmit(e){
        const post = {
            name: input.name,
            lastName: input.lastName,
            email: input.email,
            password: input.password,
            phone: input.phone,
            whatsapp: input.whatsapp
        }

        const mailRegistro = {
            to: input.email,
	        subject: "Registro de Usuario",
		    content: `<b>Bienvenido ${input.name}, se ha registrado correctamente a nuestra plataforma!!!</b>`
        }
        dispatch(registerUser(post))
        dispatch(postMails(mailRegistro))
        swal({
            title: "Bienvenido a DriveIn",
            text: "Se ha registrado correctamente",
            icon: "success"
        })
        navigate("/login")
    }
    

    return (
        <div className="h-screen bg-slate-900 flex justify-center items-center container-reg">
            <div className="flex w-[600px] h-[600px] flex-col rounded-lg shadow-[0_35px_60px_-15px_#009A88] container-data">
                <h2>Registrarme</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-row w-full justify-around">
                    <div className="flex flex-col w-2/5">
                        <div className="c-input">
                            <div className="data">
                                <input
                                type="text"
                                value={input.name}
                                name="name"                             
                                onChange={(e)=>handleChange(e)}
                                className="" required/>
                                {errors.name && <p>{errors.name}</p>}
                                <span className="">Nombre</span>
                                
                            </div>
                        </div>
                        <div className="c-input mt-2">
                            <div className="data">
                            <input
                            type="text"
                            value={input.email}
                            name="email"                        
                            onChange={(e)=> handleChange(e)}
                            className="" required/>
                            {errors.email && <p>{errors.email}</p>}
                            <span className="">E-mail</span>
                            </div>
                        </div>
                        <div className="c-input mt-2">
                            <div className="data">
                            <input 
                            type="password"
                            value={input.password}
                            name= "password"                       
                            onChange={(e)=>handleChange(e)}
                            className="" required/>
                            {errors. password && <p>{errors.password}</p>}
                            <span className="">Contraseña</span>
                            </div>
                        </div>
                        <div className="c-input mt-2">
                            <div className="data">
                            <input 
                            type="password"
                            value={input.password2}
                            name="password2"                        
                            onChange={(e)=>handleChange(e)}
                            className="" required/>
                            {errors.password2 && <p>{errors.password2}</p>}
                            <span className="">Repetir Contraseña</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/5">
                        <div className="c-input">
                            <div className="data">
                            <input 
                            type="text" 
                            value={input.lastName}
                            name="lastName"                        
                            onChange={(e)=>handleChange(e)}
                            className="" required/>
                            {errors.lastName && <p>{errors.lastName}</p>}
                            <span className="">Apellido</span>
                            </div>
                        </div>
                        <div className="c-input mt-2">
                            <div className="data">
                            <input
                            type="text"
                            value={input.phone} 
                            name="phone"                       
                            onChange={(e)=>handleChange(e)}
                            className="" required/>
                            {errors.phone && <p>{errors.phone}</p>}
                            <span className="">Telefono</span>
                            </div>
                        </div>
                        <div className="c-input mt-2">
                            <div className="data">
                            <input 
                            type="text"
                            value={input.whatsapp}
                            name="whatsapp"                      
                            onChange={(e)=>handleChange(e)}
                            className="" required/>
                            {errors.whatsapp && <p>{errors.phone}</p>}
                            <span className="">Celular</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col justify-around items-center w-[300px] m-auto">
                        <button className="w-full h-[40px] rounded-lg bg-[#009A88] text-white font-semibold"
                        type="submit">Registrarme</button>
                        <span className="text-white mt-6">Ya tienes una cuenta? <Link to="/login" className="text-[#F97D67]">Inicia sesión</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}