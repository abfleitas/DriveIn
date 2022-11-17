import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import iconG from '../../images/google.png'

export const ButtonGoogle = () => {

    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()} className="relative mt-6 w-full h-[40px] rounded-lg bg-white text-black text-sm font-semibold btn-google"><img src={iconG} alt="icon-g" className="absolute mx-6 mt-[2px]"></img>Iniciar sesión con Google</button>
    
}