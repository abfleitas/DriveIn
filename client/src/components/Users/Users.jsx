import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCity, getCities } from '../../redux/actions/actions';
import "./Users.css"

const Users = () => {



    const [UsersListLocal, setUsersListLocal] = useState([])


    //-------------------------Users List-----------------------------------------
    const fun = async () => {
        let list = await axios.get("/users");
        list = list.data.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
        console.log(list);
        const UsersList = list.map(user => (
            <div className="Users_Unit" key={user.id}>
                <div>
                <p className="Users_Text1">Role:</p>
                {user.role === 1 && <p className="Users_Text3">Usuario</p>}
                {user.role === 2 && <p className="Users_Text3">Moderador</p>}
                {user.role === 3 && <p className="Users_Text3">Administrador</p>}
                {user.role === 4 && <p className="Users_Text3">Dueño</p>}
                </div>
                <div>
                    <p className="Users_Text1">Nombre:</p>
                    <p className="Users_Text3">{user.name}</p>
                    <p className="Users_Text3">{user.lastName}</p>
                </div>
                <img src={user.photo} alt="User" className="Users_photo"></img>
                <p className="Users_Text2">Activa:</p>
                {user.active ?
                    <p style={{color: "green"}} className="Users_Text2">Activa</p>:
                    <p style={{color: "red"}} className="Users_Text2">No activa</p>
                    }
                    {
                        user.active ?
                        <button className="Users_Button" onClick={statusChangeHandler} value={[user.active, user.id]}>Desabilitar</button>:
                        <button className="Users_Button" onClick={statusChangeHandler} value={[user.active, user.id]}>Habilitar</button>
                    }
            </div>
        ));
        setUsersListLocal(UsersList);
    }
    //-------------------------Users List-----------------------------------------

    useEffect(() => {
        fun()
    }, [])

    const statusChangeHandler = async (event) => {
        const state = event.target.value.split(",")
        console.log(state);
        await axios.put(`/users/${state[1]}`, {active : (state[0] === "true" ? false : true)})
        fun()
    };



    return (
        <div  className="Users_Main">
            <div  className="Users_Second">
                <p>Lista de Usuarios:</p>
                <div className="Users_Unit_Box">
                    {UsersListLocal}
                </div>
            </div>
        </div>
    )
}

export default Users;