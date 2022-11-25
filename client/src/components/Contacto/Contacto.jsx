import React, { useState } from "react";
import swal from "sweetalert";
import NavBar from "../NavBar/Navbar";

export default function Contacto() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const validate = (input) => {
    let errors = {};
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(input.email)
    ) {
      errors.email = "email invalido";
    }
    return errors;
  };

  const handleForm = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
    setErrors(
      validate({
        ...form,
        [e.target.id]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.subject || !form.message || !form.number) {
      swal({
        title: "La totalidad de los campos son obligatorios",
        icon: "error",
      });
    } else {
      setOpen(true);
      swal({
        title: "Gracias por tu comentario",
        text: "En minutos representantes nuestros se pondran en contacto contigo",
        icon: "success",
        buttons: false,
        timmer: 5000,
      });
    }
  };
  return (
    <div className="bg-[#D9D9D9] min-h-screen">
      <div>
        <NavBar />
      </div>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contactanos
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            ¿Tienes un problema técnico? ¿Quiere enviar comentarios sobre una
            función en particular? ¿Necesita detalles sobre nuestros planes de
            Alquiler? Haznos saber.
          </p>
          {!open ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={handleForm}
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@drivein.com"
                  required
                />
                {errors.email && (
                  <label className="absolute bottom-3 right-5 text-sm font-medium text-red-700 ">
                    Ingrese un e-mail valido
                  </label>
                )}
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Numero de telefono
                </label>
                <input
                  value={form.number}
                  onChange={handleForm}
                  type="number"
                  id="number"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="+54 9 358 5388-640"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Asunto
                </label>
                <input
                  value={form.subject}
                  onChange={handleForm}
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Dejanos saber como podemos auydarte"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Mensaje
                </label>
                <textarea
                  value={form.message}
                  onChange={handleForm}
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Deja un comentario..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center bg-[#2E3A46] hover:bg-[#41D3C0] hover:text-black transition-all text-white rounded-lg  sm:w-fit "
              >
                Enviar
              </button>
            </form>
          ) : null}
        </div>
      </section>
    </div>
  );
}
