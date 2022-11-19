import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVehicleDetailsState } from "../../redux/actions/actions";

export default function Perfil() {
  const usuario = useSelector((state) => state.user);
  const [mostrarPass, setmostrarPass] = useState("");
  const { id } = useParams();

  return (
    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2 ">
        <div class="w-full md:w-3/12 md:mx-2">
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img src={usuario.photo} alt="yo" />
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              Hola, {usuario.name}!
            </h1>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul class="bg-[#e0dfdf] text-[#a09e9f] hover:text-gray-800 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>Estado</span>
                <span class="ml-auto">
                  {usuario.active === true ? (
                    <span class="bg-emerald-600 py-1 px-2 rounded text-white text-sm">
                      Activo
                    </span>
                  ) : (
                    <span class="bg-red-500 py-1 px-2 rounded text-white text-sm">
                      Inactivo
                    </span>
                  )}
                </span>
              </li>
              <li class="flex items-center py-3">
                <span>Miembro desde</span>
                <span class="ml-auto">{usuario.createdAt.slice(0, 10)}</span>
              </li>
            </ul>
          </div>

          <div class="my-4"></div>

          <div class="bg-white p-3 hover:shadow">
            <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
              <span class="text-green-500">
                <svg
                  class="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Perfiles Similares</span>
            </div>
            <div class="grid grid-cols-3">
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                  alt=""
                />
                <p href="#" class="text-main-color">
                  Juan Prez
                </p>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                  alt=""
                />
                <p href="#" class="text-main-color">
                  Yonatan Perez
                </p>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
                <p href="#" class="text-main-color">
                  Natali Perez
                </p>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                  alt=""
                />
                <p href="#" class="text-main-color">
                  Casey
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-9/12 mx-2 h-64">
          <div class="  p-3 shadow-sm rounded-sm bg-[#f5f4f4]">
            <div class="bg-white">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 ">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide ">Tu información</span>
              </div>
            </div>
            <div class="bg-white ">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Nombre
                  </div>
                  <div class="px-4 py-2 flex items-start">{usuario.name}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Apellido
                  </div>
                  <div class="px-4 py-2 flex items-start">
                    {usuario.lastName}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Genero
                  </div>
                  <div class="px-4 py-2 flex items-start">
                    Masculino/Femenino
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Teléfono
                  </div>
                  <div class="px-4 py-2 flex items-start">
                    {usuario.whatsapp}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Dirección Actual
                  </div>
                  <div class="px-4 py-2 flex items-start">Algun lugar</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Dirección de Facturación
                  </div>
                  <div class="px-4 py-2 flex items-start">Algun lugar</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Email
                  </div>
                  <div class="px-4 py-2 flex items-start">
                    <p clpss="text-blue-800">{usuario.email}</p>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Fecha de nacimiento
                  </div>
                  <div class="px-4 py-2 flex items-start">Alguna fecha</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Vehículos Alquilados
                  </div>
                  <div class="px-4 py-2 flex items-start">
                    {usuario.vehicles.length === 0 ? (
                      <div>Ninguno</div>
                    ) : (
                      usuario.vehicles
                    )}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold flex items-start">
                    Contraseña
                  </div>
                  <div class="px-4 py-2 flex items-start">
                    {usuario.password ? <h5>******</h5> : null}
                  </div>
                </div>
              </div>
            </div>
            <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Mas Información
            </button>
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="grid grid-cols-2">
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Alquiados</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600 flex items-start">Auto 1.</div>
                      <div class="text-gray-500 text-xs flex items-start">
                        Fecha de alquiler tal vez
                      </div>
                    </li>
                    <li>
                      <div class="text-teal-600 flex items-start">Auto 1.</div>
                      <div class="text-gray-500 text-xs flex items-start">
                        Fecha de alquiler tal vez
                      </div>
                    </li>
                    <li>
                      <div class="text-teal-600 flex items-start">Auto 1.</div>
                      <div class="text-gray-500 text-xs flex items-start">
                        Fecha de alquiler tal vez
                      </div>
                    </li>
                    <li>
                      <div class="text-teal-600 flex items-start">Auto 1.</div>
                      <div class="text-gray-500 text-xs flex items-start">
                        Fecha de alquiler tal vez
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Devuelto</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600 flex items-start">Auto 1</div>
                      <div class="text-gray-500 text-xs flex items-start">
                        Fecha de devolución tal vez
                      </div>
                    </li>
                    <li>
                      <div class="text-teal-600 flex items-start">Auto 1</div>
                      <div class="text-gray-500 text-xs flex items-start">
                        Fecha de devolución tal vez
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
