import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setVehicleDetailsState } from '../../redux/actions/actions';


const VehicleDetails = (props) => {

    const dispatch = useDispatch()
    const vehicleDetailsState = useSelector(state => state.vehicleDetailsState)

    let urlRef = window.location.href // busco el id en la url
    urlRef = window.location.href.toString()
    urlRef = urlRef.split("details/")
    urlRef = urlRef[1] 

    useEffect(() => {
        async function fetchData() {
            let vehicleData = await axios.get(`http://localhost:3001/vehicles/${urlRef}`)
            vehicleData = vehicleData.data
            console.log(vehicleData.photo);
            const vehicleDetails = [
                <div key={vehicleData.id}>
                    <h1>{vehicleData.brand}</h1>
                    <img src={vehicleData.photo} alt="car"/>
                    <p>Modelo: {vehicleData.model}</p>
                    <p>Aire Acondicionado: {vehicleData.air ? "Si tiene" :"No tiene"}</p>
                    <p>Transmision: {vehicleData.transmition}</p>
                    <p>numero de asientos: {vehicleData.seats}</p>
                    <p>Tipo de carro: {vehicleData.category}</p>
                    <p>Precio: ${vehicleData.initialPrice}</p>
                </div>
            ]
            dispatch(setVehicleDetailsState(vehicleDetails));
        }
        fetchData();
    }, [urlRef])

    return (
        <div>
            Detalles de vehiculo:
            <div>
                {vehicleDetailsState}
            </div>
        </div>
    )
}

export default VehicleDetails;