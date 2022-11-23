import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setVehicleDetailsState,
  getRents,
  editUser,
} from "../../redux/actions/actions";
import Navbar from "../NavBar/Navbar";
import axios from "axios";

export default function Perfil() {
  const usuario = JSON.parse(localStorage.getItem("UserLogin"));
  // const usuario = useSelector((state) => state.user);
  const [mostrarPass, setmostrarPass] = useState("");
  const [ImageCloud, setImageCloud] = useState("");
  const [editUsuario, setEditUsuario] = useState();

  const { id } = useParams();

  const rents = useSelector((state) => state.rents);
  console.log(rents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRents(usuario.id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(editUser(usuario.id));
  }, [dispatch]);

  const handleEdit = (e) => {
    e.preventeDefault();
    setEditUsuario(editUsuario);
  };

  const handleUploadImage = (event) => {
    const imageData = new FormData();
    imageData.append("file", event.target.files[0]);
    imageData.append("upload_preset", "DriveIn_upload");
    axios
      .post("https://api.cloudinary.com/v1_1/dcr28dyuq/image/upload", imageData)
      .then((response) => {
        setImageCloud(response.data.secure_url);
      });
  };

  const uploadImage = (files) => {
    console.log(files[0]);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="flex flex-col bg-[#2E3A46] text-white rounded p-2">
              <div className="image overflow-hidden self-center ">
                <img
                  src={
                    ImageCloud
                      ? ImageCloud
                      : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                  }
                  className="Creation_Image"
                  alt="yo"
                />
                <input
                  type="file"
                  onChange={(e) => handleUploadImage(e)}
                  className="h-8 w-8"
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                Hola, {usuario.name}!
              </h1>
              <ul className="bg-[#e0dfdf] text-[#2E3A46] hover:text-gray-800 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Estado</span>
                  <span className="ml-auto">
                    {usuario.active === true ? (
                      <span className="bg-emerald-600 py-1 px-2 rounded text-white text-sm">
                        Activo
                      </span>
                    ) : (
                      <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                        Inactivo
                      </span>
                    )}
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Miembro desde</span>
                  <span className="ml-auto">
                    {usuario.createdAt.slice(0, 10)}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="  p-3 shadow-sm rounded-sm bg-[#f5f4f4]">
              <div className="bg-[#2E3A46] text-white rounded py-2">
                <div className="flex justify-center space-x-2 font-semibold text-gray-900 leading-8 ">
                  <span clas="text-green-500 ">
                    <svg
                      className="h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide ">Información</span>
                </div>
              </div>
              <div className="bg-white ">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold flex items-start bg-slate-100">
                      Nombre
                    </div>
                    <div className="px-4 py-2 flex items-start ">
                      {usuario.name}{" "}
                      <div>
                        <button onClick={(e) => handleEdit(e)}>editar</button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  ">
                    <div className="px-4 py-2 font-semibold flex items-start bg-slate-100">
                      Apellido
                    </div>
                    <div className="px-4 py-2 flex items-start">
                      {usuario.lastName}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold flex items-start bg-slate-100">
                      Email
                    </div>
                    <div className="px-4 py-2 flex items-start ">
                      {usuario.email}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold flex items-start bg-slate-100">
                      Teléfono
                    </div>
                    <div className="px-4 py-2 flex items-start ">
                      {usuario.phone}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold flex items-start bg-slate-100">
                      Contraseña
                    </div>
                    <div className="px-4 py-2 flex items-start">
                      {usuario.password ? <h5>******</h5> : null}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold flex items-start bg-slate-100">
                      {" "}
                    </div>
                    <div className="px-4 py-2 flex items-start "></div>
                  </div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Mas Información
              </button>
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Alquilados</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      {rents.length ? (
                        rents.map((e) => {
                          return (
                            <li>
                              <div className="text-teal-600 flex items-start">
                                {e.vehicle.brand},{e.vehicle.model}
                              </div>
                              <div className="text-gray-500 text-xs flex items-start">
                                Desde: {e.dateInit}
                              </div>
                              <div className="text-gray-500 text-xs flex items-start">
                                Hasta: {e.dateFinish}
                              </div>
                            </li>
                          );
                        })
                      ) : (
                        <div className="text-gray-500 text-xs flex items-start">
                          {" "}
                          No hay autos alquilados
                        </div>
                      )}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      {/* <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns=""
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span> */}
                      {/* <span className="tracking-wide">Devuelto</span> */}
                    </div>
                    <ul className="list-inside space-y-2">
                      {/* <li>
                        <div className="text-teal-600 flex items-start">
                          Auto 1
                        </div>
                        <div className="text-gray-500 text-xs flex items-start">
                          Fecha de devolución tal vez
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600 flex items-start">
                          Auto 1
                        </div>
                        <div className="text-gray-500 text-xs flex items-start">
                          Fecha de devolución tal vez
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
