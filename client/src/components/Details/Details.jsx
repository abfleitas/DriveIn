import React, { useEffect, useState } from "react";

const vehicleExample = { data: {
    Brand: "Toyota",
    Model: "AE 86",
    Puntuacion: 4.5,
    AC: true,
    transmition: "Manual",
    NSeat: 4,
    Category: "hatchback",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sprinter_Trueno_1600_GT_%28AE86%29.jpg/220px-Sprinter_Trueno_1600_GT_%28AE86%29.jpg",
    History: [],
    Price: 30,
    Available: true
    }
}



const VehicleDetails = (props) => {

    const [vehicleDetailsState, setVehicleDetailsState] = useState([])

    let urlRef = window.location.href
    urlRef = window.location.href.toString()
    urlRef = urlRef.split("details/")
    urlRef = urlRef[1]

    useEffect(() => {
        async function fetchData() {
            console.log(urlRef);
            // const vehicleData = await axios.get(`localhost:3001/vehicle/${urlRef}`)
            let vehicleData = vehicleExample
            vehicleData = vehicleData.data
            const vehicleDetails = [
                <div key={vehicleData.name}>
                    <h1>{vehicleData.Brand}</h1>
                    <img src={vehicleData.image} alt="car"/>
                    <p>Modelo: {vehicleData.Model}</p>
                    <p>Aire Acondicionado: {vehicleData.AC && "Si tiene"}</p>
                    <p>Transmision: {vehicleData.transmition}</p>
                    <p>numero de asientos: {vehicleData.NSeat}</p>
                    <p>Tipo de carro: {vehicleData.Category}</p>
                    <p>Puntuacion: {vehicleData.Puntuacion}</p>
                    <p>Precio: ${vehicleData.Price}</p>
                </div>
            ]
            setVehicleDetailsState(vehicleDetails);
        }
        fetchData();
    },[urlRef])

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