import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreator } from 'redux-cool'


function NewProjectForm2() {

    // Nur zur Kontrolle
    const project_customId = useSelector(state => state.project.project_customId)
    const project_name = useSelector(state => state.project.project_name)
    const project_start = useSelector(state => state.project.project_start)
    const project_type = useSelector(state => state.project.project_type)
    const project_details = useSelector(state => state.project.project_details)
    const project_types = useSelector(state => state.project.project_types)

    useEffect(() => {
        console.log("NewProjectForm2")
        console.log("+++++++++++ Werte im Speicher - Seite 2 +++++++++++")
        console.log("Projekt-ID: ", project_customId)
        console.log("Projekt-Name: ", project_name)
        console.log("Projekt-Start: ", project_start)
        console.log("Projekt-Typ: ", project_type)
        console.log("Projekt-Details: ", project_details)
        console.log("Projekt-Typen: ", project_types)
    }, []);


    const customer_firstname = useSelector(state => state.customer.firstname)
    const customer_lastname = useSelector(state => state.customer.lastname)
    const customer_email = useSelector(state => state.customer.email)
    const customer_mobile = useSelector(state => state.customer.mobile)
    const customer_street = useSelector(state => state.customer.street)
    const customer_housenumber = useSelector(state => state.customer.housenumber)
    const customer_postalcode = useSelector(state => state.customer.postalcode)
    const customer_city = useSelector(state => state.customer.city)

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [street, setStreet] = useState("");
    const [housenumber, setHousenumber] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [city, setCity] = useState("");
    const [checkBox, setCheckBox] = useState (false);

    const dispatch = useDispatch()
    const setCustomer = () => dispatch(actionsCreator.PROJECT.SET_CONTACT(firstname, lastname, email, mobile, street, housenumber, postalcode, city, checkBox))
    const nextStep = () => dispatch(actionsCreator.MAIN.STEP.INCREMENT())
    const handleBack = () => dispatch(actionsCreator.MAIN.STEP.DECREMENT())

    const handleNext = () => {
        setCustomer();
        nextStep();
        console.log("+++++++++++ Zu Speichern +++++++++++")
        console.log("Vor- + Nachname: ", firstname, lastname)
        console.log("E-Mail: ", email)
        console.log("Mobil: ", mobile)
        console.log("Straße + Hausnummer: ", street, housenumber)
        console.log("PLZ + Ort: ", postalcode, city)
    }

    const handleCheckBox = () => {
        setFirstname(customer_firstname);
        setLastname(customer_lastname);
        setEmail(customer_email);
        setMobile(customer_mobile);
        setStreet(customer_street);
        setHousenumber(customer_housenumber);
        setPostalcode(customer_postalcode);
        setCity(customer_city);
        setCheckBox(true);
    }


    return (
        <div className="h-auto w-auto">
            <div className="p-8">
                <form>
                    <div className="gap-4">
                        <div className="font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">Contact Person</div>

                        <div className="flex flex-row gap-4">
                            <div className="w-full flex-1">
                                <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Firstname</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="firstname"
                                        value={firstname}
                                        placeholder="Vorname"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setFirstname(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1">
                                <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Lastname</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="lastname"
                                        value={lastname}
                                        placeholder="Nachname"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setLastname(e.target.value)}
                                    /> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="w-full flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> E-Mail</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="email"
                                        value={email}
                                        placeholder="E-Mail"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setEmail(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Mobile Phone</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="mobile"  
                                        value={mobile}                                      
                                        placeholder="Mobil"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setMobile(e.target.value)}
                                    /> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="w-full flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> street</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="street"
                                        value={street}
                                        placeholder="Straße"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setStreet(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> housenumber</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="housenumber"        
                                        value={housenumber}                                
                                        placeholder="Hausnummer"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setHousenumber(e.target.value)}
                                    /> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="w-full flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Postalcode</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="postalcode"
                                        value={postalcode}
                                        placeholder="PLZ"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setPostalcode(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> city</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="city"  
                                        value={city}                                      
                                        placeholder="Ort" 
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setCity(e.target.value)}
                                    /> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>

            <div className="w-full pl-8 pr-8 pb-8">
                <div className="flex justify-between">
                    <div className="justify-start">
                        <button className="button-type-1" onClick={handleBack} > Back </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <input type="checkbox" className="" onClick={handleCheckBox}/> 
                        <div className="pl-4 font-bold text-gray-600 text-xs leading-8 uppercase"> Customer is Contact</div>
                    </div>
                    <div className="justify-end">
                        <button className="button-type-2" onClick={handleNext} > Next </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NewProjectForm2
