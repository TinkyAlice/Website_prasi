import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreator } from 'redux-cool'


export default function NewProjectForm3() {
   
    // State prüfen - Daten aus Store abrufen
    const project_customId = useSelector(state => state.project.customId)
    const project_name = useSelector(state => state.project.name)
    const project_start = useSelector(state => state.project.start)
    const project_type = useSelector(state => state.project.type)
    const project_details = useSelector(state => state.project.details)
    const project_types = useSelector(state => state.project.types)
    const customer_customId = useSelector(state => state.customer.customId)
    const customer_firstname = useSelector(state => state.customer.firstname)
    const customer_lastname = useSelector(state => state.customer.lastname)
    const customer_email = useSelector(state => state.customer.email)
    const customer_mobile = useSelector(state => state.customer.mobile)
    const customer_phone = useSelector(state => state.customer.phone)
    const customer_street = useSelector(state => state.customer.street)
    const customer_housenumber = useSelector(state => state.customer.housenumber)
    const customer_postalcode = useSelector(state => state.customer.postalcode)
    const customer_city = useSelector(state => state.customer.city)

    // State prüfen - Daten ausgeben
    useEffect(() => {
        console.log("NewProjectForm3")
        console.log("+++++++++++ Werte im Speicher - Seite 3 +++++++++++")
        console.log("Projekt-ID: ", project_customId)
        console.log("Projekt-Name: ", project_name)
        console.log("Projekt-Start: ", project_start)
        console.log("Projekt-Typ: ", project_type)
        console.log("Projekt-Details: ", project_details)
        console.log("Projekt-Typen: ", project_types)
        console.log("Customer-ID: ", customer_customId)
        console.log("Customer-Vorname: ", customer_firstname)
        console.log("Customer-Nachname: ", customer_lastname)
        console.log("Customer-E-Mail: ", customer_email)
        console.log("Customer-Mobil: ", customer_mobile)
        console.log("Customer-Telefon: ", customer_phone)
        console.log("Customer-Straße: ", customer_street)
        console.log("Customer-Hausnummer: ", customer_housenumber)
        console.log("Customer-PLZ: ", customer_postalcode)
        console.log("Customer-Ort: ", customer_city)
    }, []);


    const project_street = useSelector(state => state.project.street)
    const project_housenumber = useSelector(state => state.project.housenumber)
    const project_postalcode = useSelector(state => state.project.postalcode)
    const project_city = useSelector(state => state.project.city)

    const [street, setStreet] = useState(project_street);
    const [housenumber, setHousenumber] = useState(project_housenumber);
    const [postalcode, setPostalcode] = useState(project_postalcode);
    const [city, setCity] = useState(project_city);

    const dispatch = useDispatch()
    const setProject = () => dispatch(actionsCreator.PROJECT.SET_ADDRESS(street, housenumber, postalcode, city))
    const setLocation = () => dispatch(actionsCreator.PROJECT.SET_LOCATION(lat, long))
    const nextStep = () => dispatch(actionsCreator.MAIN.STEP.INCREMENT())
    const handleBack = () => dispatch(actionsCreator.MAIN.STEP.DECREMENT())

    const handleNext = () => {
        nextStep();
        setProject();
        setLocation();
    }


    /**
     * In der Abfrage der Adresse muss an die Nomination API ein String übergeben werden.
     * Die Leerzeichen müssen mit %20 ersetzt werden.
     * Da Orte und Straßennamen bereits ein Leerzeichen enthalten können, werden diese vorkonvertiert
     */
    var saveStreet = street.replace(/ /g, "%20")
    var saveCity = city.replace(/ /g, "%20")
    var newString = saveStreet + "%20" + housenumber + "%20" + postalcode +"%20" + saveCity


    const [requestFail, setRequestFail] = useState(false);
    const [ergebnis, setErgebnis] = useState(null);
    const [lat, setLat] = useState(53.108473084806796);
    const [long, setLong] = useState(8.848039280233772);
    const [myError, setMyError] = useState(false);
    const [displayName, setDisplayName] = useState("");


    const handleCoordinates = () => {
        console.log("Eingabe: ", street, housenumber, postalcode, city);
        console.log("Umgewandelt in: ", newString)
        if (newString !== "") {
            getCoordinates();
        }
    }
 

     //const Nomination_Search = 'https://nominatim.openstreetmap.org/search'; // Wenn die Variable bei der Abfrage eingesetzt wird, gibt es einen Fehler: "blocked by CORS policy"
     const [getCoordinates, setgetCoordinates] = useState();

    /**
    * Verhindern, dass leere Einträge in die Datenbank geschrieben werden
    */
    const [emptyEntry, setEmptyEntry] = useState(false)
    const noCoordinates = () => {
        setEmptyEntry(true)
    }


    function MapCreator() {
        return(
            <MapContainer center={[lat, long]} zoom={16} scrollWheelZoom={false}> 
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, long]} />
            </MapContainer>  
        )
    }


    function InsertAdress() {
        return (
            <div> 
                {myError && <p className="text-red-600"> Bitte Adresse eingeben! </p>} 
                {requestFail && <p className="text-red-500"> Diese Adresse ist nicht zu finden </p>}
                <div className="flex gap-4">
                    <div className="w-full">
                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Street</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input 
                                type="text"
                                name="street"
                                placeholder="Straße"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                onChange={e => setStreet(e.target.value)}
                            /> 
                        </div>
                    </div>
                    <div className="">         
                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Housenumber</div>             
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input 
                                type="text"
                                name="housenumber"
                                placeholder="Hausnummer"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                onChange={e => setHousenumber(e.target.value)}
                            /> 
                        </div>
                    </div>                            
                </div>

                <div className="flex gap-4">
                    <div className="">
                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Postalcode</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input 
                                type="text"
                                name="postalcode"
                                placeholder="PLZ"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                onChange={e => setPostalcode(e.target.value)}
                            /> 
                        </div>
                    </div>
                    <div className="w-full">        
                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> City</div>              
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input 
                                type="text"
                                name="city"
                                placeholder="Ort"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                onChange={e => setCity(e.target.value)}
                            /> 
                        </div>
                    </div>                            
                </div>
                <div className="flex pt-2 items-center justify-center">
                    <button className="button-type-2" onClick={handleCoordinates}> Koordinaten anzeigen </button>
                </div>
            </div>
        )
    }

{/**
    function ShowResult() {
        <div>
            <div className="flex justify-center items-center">
                {ergebnis && <p className="text-gray-800"> {displayName} </p>}
            </div>
            <div className=" flex justify-center items-center">
                {!ergebnis ? <div>  </div> : <div> <div>Latitude: {lat}</div> <div>Longitude: {long}</div></div>}
            </div>
        </div>
    }
 */}
    return (
        <>
            <div className="h-full w-full">   
                <div className="pt-8">
                    <div className="font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">Location</div>
                </div>
                
                <div className="flex">

                    <div className="w-1/2">
                        <div className="pt-20 flex justify-center items-center">
                            <InsertAdress />
                        </div>
                        <div className="flex justify-center items-center pl-8">
                            <div className="w-1/2">
                                <div className="h-96 flex justify-start items-center">
                                    <div>
                                        <div className="flex justify-center items-center">
                                            {ergebnis && <p className="text-gray-800"> {displayName} </p>}
                                        </div>
                                        <div className=" flex justify-center items-center">
                                            {!ergebnis ? <div>  </div> : <div> <div>Latitude: {lat}</div> <div>Longitude: {long}</div></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="w-1/2 pr-8 pt-8">
                        <div className="h-full rounded justify-center items-center">
                            <MapCreator />
                        </div>
                    </div>  
                </div>

                <div className="w-full p-8">
                    <div className="flex justify-between">
                        <div className="justify-start">
                            <button className="button-type-1" onClick={handleBack} > Back </button>
                        </div>
                        <div className="justify-end">
                            <button className="button-type-2" onClick={handleNext} > Next </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
