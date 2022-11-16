import React,{useState} from "react";
import './register.css';
import {Link} from "react-router-dom";
import iconG from "../../images/google.png";
import { useDispatch,useSelector} from "react-redux";
// import { postUser } from 

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
    // const history = useHistory();
    const [errors, setErrors] =useState({});
    
    const [input,setInput]=useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        password2:"",
        phone:"",
        celular:"",
        

    });
    console.log(input);
    
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
        e.preventDefault();
        alert("Usuario creado con exito")
        // history.pushState("/home")
    }
    

    return (
        <div className="h-screen bg-slate-900 flex justify-center items-center container-reg">
            <div className="flex w-[600px] h-[600px] flex-col rounded-lg shadow-[0_35px_60px_-15px_#009A88] container-data"onSubmit={(e)=>handleSubmit(e)}>
                <h2>Registrarme</h2>
                <form className="flex flex-row w-full justify-around" >
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
                        value={input.celular}
                        name="celular"                      
                        onChange={(e)=>handleChange(e)}
                        className="" required/>
                        {errors.celular && <p>{errors.phone}</p>}
                        <span className="">Celular</span>
                        </div>
                    </div>
                </div>
                </form>
                <div className="flex flex-col justify-around items-center w-[300px] m-auto">
                    <button className="w-full h-[40px] rounded-lg bg-[#009A88] text-white font-semibold"
                    type="submit"
                    disabled={!input.name}>Registrarme</button>
                    <button className="relative mt-6 w-full h-[40px] rounded-lg bg-white text-black text-sm font-semibold btn-google"><img src={iconG} alt="icon-g" className="absolute mx-6 mt-[2px]"></img>Registrarme con Google</button>
                    <span className="text-white mt-6">Ya tienes una cuenta? <Link to="/login" className="text-[#F97D67]">Inicia sesión</Link></span>
                </div>
            </div>
        </div>
    )
}