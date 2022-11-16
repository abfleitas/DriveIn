import React,{useState} from "react";
import './login.css';
import { Link} from "react-router-dom";
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
        
         if(!input.password){
            errors.password="Se requiere contraseña"
        }                     
        
   return errors   

}


export const Login=() => {
    // const dispatch= useDispatch();
    // const history = useHistory();
    const [errors, setErrors] =useState({});
    
    const [input,setInput]=useState({
        name:"",       
        password:"",            
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
       

    return (
        <div className="h-screen bg-slate-900 flex justify-center items-center container-reg">
            <div className="flex w-[600px] h-[600px] flex-col rounded-lg shadow-[0_35px_60px_-15px_#009A88] container-data">
                <h2>Inicio de sesion</h2>
                <form className="flex flex-row w-full justify-around" >
                <div className="flex flex-col w-2/5">
                    <div className="c-input">
                        <div className="data">
                            <input
                             type="text"
                             value={input.name}
                             name="name"
                             placerholder="Nombre..." 
                             onChange={(e)=>handleChange(e)}
                            className="" required/>
                            {errors.name && <p>{errors.name}</p>}
                            <span className="">Nombre</span>
                            
                        </div>
                    </div>
                    
                    <div className="c-input mt-2">
                        <div className="data">
                        <input 
                        type="password"
                        value={input.password}
                        name= "password"
                        placerholder= "Contraseña..."
                        onChange={(e)=>handleChange(e)}
                         className="" required/>
                         {errors. password && <p>{errors.password}</p>}
                        <span className="">Contraseña</span>
                        </div>
                    </div>
                    
                
                    
                   
                </div>
                </form>
                <div className="flex flex-col justify-around items-center w-[300px] m-auto">
                    <button className="w-full h-[40px] rounded-lg bg-[#009A88] text-white font-semibold"
                    type="submit"
                    disabled={!input.name}>Iniciar sesion</button>
                    
                </div>
            </div>
        </div>
    )
}