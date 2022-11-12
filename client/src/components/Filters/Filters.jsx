import React from "react";
import { useDispatch } from "react-redux";
import { filterPrice, filter } from "../../redux/actions/actions";

export default function Filters() {
  const dispatch = useDispatch();

  const handleFilters = (e) => {
    if (e.target.checked)
      dispatch(filter({ key: e.target.name, value: e.target.value }));
    if (!e.target.checked)
      dispatch(filter({ key: e.target.name, value: "all" }));
  };

  const handlePrice = (e) => {
    dispatch(filterPrice(e.target.value));
  };

  // brand llega por props
  let brand = ["toyota", "ford", "chevrolet", "volkswagen"];

  return (
    <div className="flex flex-col mt-[190px] w-full font-medium text-white bg-[#F97D67] h-fit rounded-full">
      <div>
        <div className="p-5">
          <h2 className="font-bold text-black">ORDENAR POR:</h2>

          <select
            defaultValue="price"
            onChange={handlePrice}
            className=" cursor-default rounded-md border border-[#F97D67]-300 bg-[#F97D67] py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
          >
            <option value="price" disabled>
              Precio
            </option>
            <option value="lower">De menor a mayor</option>
            <option value="higher">De mayor a menor</option>
          </select>
        </div>
        <h2 className="font-bold text-black">FILTRAR POR:</h2>
        <br></br>
        <div className="bg-[#F97D67]">
          <label className="font-bold">Categoría: </label>
          <br></br>
          <div className="rounded-md border border-[#F97D67]-300 p-3">
            <input
              type="checkbox"
              name="category"
              id="small"
              value="small"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="small">Chico </label>

            <input
              type="checkbox"
              name="category"
              id="medium"
              value="medium"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="medium">Mediano </label>

            <input
              type="checkbox"
              name="category"
              id="big"
              value="big"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="big">Grande </label>

            <input
              type="checkbox"
              name="category"
              id="premium"
              value="premium"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="premium">Premium </label>

            <input
              type="checkbox"
              name="category"
              id="convertible"
              value="convertible"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="convertible">Convertible</label>
          </div>
        </div>
        <div className="p-5 border-[#F97D67]-300 bg-[#F97D67]">
          <label className="font-bold">Transmisión: </label>
          <br></br>
          <div className="rounded-md border border-[#F97D67]-300 p-3">
            <input
              type="checkbox"
              name="transmition"
              id="manual"
              value="manual"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="manual">Manual </label>

            <input
              type="checkbox"
              name="transmition"
              id="automatic"
              value="automatic"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="automatic">Automático</label>
          </div>
        </div>
        <div className="p-5 border-[#F97D67]-300 bg-[#F97D67]">
          <label className="font-bold">Características: </label>
          <br></br>
          <div className="rounded-md border border-[#F97D67]-300 p-3">
            <input
              type="checkbox"
              name="AC"
              id="AC"
              value="AC"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="AC">Aire Acondicionado </label>

            <input
              type="checkbox"
              name="seats"
              id="seats"
              value="seats"
              onChange={handleFilters}
              className="mx-2"
            />
            <label htmlFor="seats">+4 Asientos</label>
          </div>
        </div>
        <div className="p-5 border-[#F97D67]-300 bg-[#F97D67]">
          <label className="font-bold">Marca: </label>
          <br></br>
          <div className="rounded-md border border-[#F97D67]-300 p-3">
            {brand &&
              brand.map((el, i) => (
                <span key={i}>
                  <input
                    type="checkbox"
                    name="brand"
                    id={el}
                    value={el}
                    onChange={handleFilters}
                    className="mx-2"
                  />
                  <label htmlFor={el}>{el}</label>
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
