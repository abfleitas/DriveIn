import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getCities } from '../../redux/actions/actions';
import "./Creation.css"

const Creation = (props) => {

    const dispatch = useDispatch()

    


    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(2000);
    const [color, setColor] = useState("");
    const [transmition, setTrasmition] = useState("manual");
    const [air, setAir] = useState("true");
    const [seats, setSeats] = useState(2);
    const [category, setCategory] = useState("Pequeño");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState("1.00");
    const [isPending, setIsPending] = useState(false); //estado para desabilitar el boton

    const countryChangeHandler = (event) => {
        setCountry(event.target.value)
        dispatch(getCities(event.target.value))
    };
    const cityChangeHandler = (event) => {setCity(event.target.value)};
    const brandChangeHandler = (event) => {setBrand(event.target.value)};
    const modelChangeHandler = (event) => {setModel(event.target.value)};
    const yearChangeHandler = (event) => {setYear(event.target.value)};
    const colorChangeHandler = (event) => {setColor(event.target.value)};
    const transmitionChangeHandler = (event) => {setTrasmition(event.target.value)};
    const airChangeHandler = (event) => {setAir(event.target.value)};
    const seatsChangeHandler = (event) => {setSeats(event.target.value)};
    const categoryChangeHandler = (event) => {setCategory(event.target.value)};
    const photoChangeHandler = (event) => {setPhoto(event.target.value)};
    const priceChangeHandler = (event) => {setPrice(event.target.value)};


    //-------------------------Function to obtain countries-------------------------
    const countriesList = useSelector(state => state.countries)
    const citiesList = useSelector(state => state.cities)
    useEffect(() => {
        dispatch(getCountries())
    }, [country])
    //-------------------------Function to obtain countries-------------------------
    //---------------------validation real time-------------------------------------
    //--------------Brand---------------------------------
    const [brandValidation, setBrandValidation] = useState([])
    useEffect(() => {
        var letters = /^[A-Za-z\s]*$/;
        if (brand === "") {setBrandValidation([])}
        else if (!(brand.match(letters))) {
            setBrandValidation([<p key="brand_validation">Marca no puede contener numeros o simbolos.</p>]);
            return
        }
        setBrandValidation([])
    }, [brand])
    //--------------Price---------------------------------
    const [priceValidation, setPriceValidation] = useState([])
    useEffect(() => {
        var numbers = /^\d+\.\d{2,2}$/;
        if (price === "") {setPriceValidation([])}
        else if (!(price.match(numbers))) {
            setPriceValidation([<p key="price_validation">Precio tiene que ser mayor a 0 y solo puede contener 2 decimales.</p>]);
            return
        }
        setPriceValidation([])
    }, [price])
    //---------------------validation real time-------------------------------------
    //-------------------------------Submit form-------------------------------------
    const submitHandler = (event) => {
        event.preventDefault() //Prevent the page to refresh and remove the info typed in

        let cityIdValue = 0
        citiesList.forEach(cityArray => {if(cityArray.name === city) cityIdValue = cityArray.id})

        //Validation----------------------


        //Country
        if(country === "") {
            alert("País no puede estar vacio");
            return false
        }
        //city
        if(city === "") {
            alert("Ciudad no puede estar vacio");
            return false
        }
        //Brand
        if(brand === "") {
            alert("Marca no puede estar vacio");
            return false
        }
        let splitedBrand = brand.split("")
        let letterBrand = splitedBrand.shift().toUpperCase()
        const finalBrand = letterBrand + (splitedBrand.join(""))
    
        //Model
        if(model === "") {
            alert("Modelo no puede estar vacio");
            return false
        }
        //Color
        if(color === "") {
            alert("Color no puede estar vacio");
            return false
        }
        let splitedColor = color.split("")
        let letterColor = splitedColor.shift().toUpperCase()
        const finalColor = letterColor + (splitedColor.join(""))
        //Category
        if(category === "") {
            alert("Tipo de vehiculo no puede estar vacio");
            return false
        }
        let splitedCategory = category.split("")
        let letterCategory = splitedCategory.shift().toUpperCase()
        const finalCategory = letterCategory + (splitedCategory.join(""))
        //Photo
        if(photo === "") {
            alert("Foto no puede estar vacio");
            return false
        }
        let splitedPhoto = photo.split("")
        let letterPhoto = splitedPhoto.shift().toUpperCase()
        const finalPhoto = letterPhoto + (splitedPhoto.join(""))
        //Price
        if(parseInt(price) <= 0) {
            alert("Precio no puede ser menor a 1");
            return false
        }

        //Validation---------------------------------
        

        const vehicleCreation = {
            brand: finalBrand,
            model: model,
            year: year,
            color: finalColor,
            transmition: transmition,
            air: air,
            seats: seats,
            category: finalCategory,
            photo: photo,
            initialPrice: price,
            cityId: cityIdValue
        }
        console.log(vehicleCreation);
        axios.post("http://localhost:3001/vehicles", vehicleCreation)
        .then(function (response) {
            console.log(response.data); //console log de lo que recibe la api
            alert("El vehiclulo fue creado")
            setIsPending(false)
        })
        .catch(function (error) {
            alert("Error: hay que investigar" + error)
            setIsPending(false)
        });
    }
    //-------------------------------Submit form-------------------------------------
    return (
        <div className="Creation_Main">
            <div className="Creation_Second">
                <h1 className="Creation_Title">Creacion del vehiculo:</h1>
                <form onSubmit={submitHandler}  className="Creation_Form">
                    <div className="Creation_Form_Sections">
                        <div>
                            <div>
                                <label htmlFor="countries">País: </label>
                                <select name="countries" onChange={countryChangeHandler} value={country}  className="Creation_input">
                                    <option key="empty" value=""></option>
                                    {countriesList && countriesList.map((c, index) => {
                                        return (<option key={index} value={c}>{c}</option>);
                                    })}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="cities">Ciudad: </label>
                                <select name="cities" onChange={cityChangeHandler} value={city}  className="Creation_input">
                                    <option key="empty" value=""></option>
                                    {citiesList && citiesList.map((city) => {
                                        return (<option key={city.id}>{city.name}</option>)
                                    })}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="brand">Marca:</label>
                                <input type="text" key="brand" onChange={brandChangeHandler} value={brand}  className="Creation_input"></input>
                                {brandValidation}
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="model">Modelo:</label>
                                <input type="text" key="model" onChange={modelChangeHandler} value={model}  className="Creation_input"></input>
                            </div>
                            <div>
                                <label htmlFor="year">Año:</label>
                                <input type="number" key="year" onChange={yearChangeHandler} value={year}  className="Creation_input"></input>
                            </div>
                            <div>
                                <label htmlFor="color">Color:</label>
                                <input type="text" key="color" onChange={colorChangeHandler} value={color}  className="Creation_input"></input>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="transmition">Transmision: </label>
                                <select name="transmition" onChange={transmitionChangeHandler} value={transmition}  className="Creation_input">
                                    <option value="manual">Manual</option>
                                    <option value="automatic">Automatico</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="air">Aire acondicionado: </label>
                                <select name="air" onChange={airChangeHandler} value={air}  className="Creation_input">
                                    <option value="true">Equipado</option>
                                    <option value="false">No equipado</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="seats">Asientos:</label>
                                <select name="seats" onChange={seatsChangeHandler} value={seats}  className="Creation_input">
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">+7</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="category">Tamaño de vehiculo:</label>
                                <select name="category" onChange={categoryChangeHandler} value={category}  className="Creation_input">
                                    <option value="Pequeño">Pequeño</option>
                                    <option value="Mediano">Mediano</option>
                                    <option value="Grande">Grande</option>
                                    <option value="Premium">Premium</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="photo">Foto:</label>
                                <input type="text" key="photo" onChange={photoChangeHandler} value={photo}  className="Creation_input"></input>
                            </div>
                            <div>
                                <label htmlFor="price" >Precio:</label>
                                <input type="text" key="price" onChange={priceChangeHandler} value={price} className="Creation_input"></input>
                                {priceValidation}
                            </div>
                        </div>
                    </div>
                    

                    { isPending ? <button disable="true" className="Creation_button">Creating ...</button> : <button className="Creation_button">Create</button>}
                </form>
            </div>
        </div>
    )
}

export default Creation;