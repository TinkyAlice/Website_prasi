import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreator } from 'redux-cool'


export default function NewCustomerForm1() {

    const customer_customId = useSelector(state => state.customer.customId)
    const customer_company = useSelector(state => state.customer.company)
    const customer_firstname = useSelector(state => state.customer.firstname)
    const customer_lastname = useSelector(state => state.customer.lastname)
    const customer_email = useSelector(state => state.customer.email)
    const customer_mobile = useSelector(state => state.customer.mobile)
    const customer_phone = useSelector(state => state.customer.phone)
    const customer_street = useSelector(state => state.customer.street)
    const customer_housenumber = useSelector(state => state.customer.housenumber)
    const customer_postalcode = useSelector(state => state.customer.postalcode)
    const customer_city = useSelector(state => state.customer.city)
    const customer_country = useSelector(state => state.customer.country)
    const customer_type = useSelector(state => state.customer.type)
    const customer_since = useSelector(state => state.customer.since)
    const customer_details = useSelector(state => state.customer.details)

    const [customId, setCustomId] = useState(customer_customId);
    const [company, setCompany] = useState(customer_company);
    const [firstname, setFirstname] = useState(customer_firstname);
    const [lastname, setLastname] = useState(customer_lastname);
    const [email, setEmail] = useState(customer_email);
    const [mobile, setMobile] = useState(customer_mobile);
    const [phone, setPhone] = useState(customer_phone);
    const [street, setStreet] = useState(customer_street);
    const [housenumber, setHouseNumber] = useState(customer_housenumber);
    const [postalcode, setPostalCode] = useState(customer_postalcode);
    const [city, setCity] = useState(customer_city);
    const [country, setCountry] = useState("Germany");
    const [type, setType] = useState("Kundenart");
    const [since, setSince] = useState("Kunde seit");
    const [details, setDetails] = useState("Kundendetails");

    const dispatch = useDispatch()
    const setNewCustomer = () => dispatch(actionsCreator.CUSTOMER.SET(customId, company, firstname, lastname, email, mobile, phone, street, housenumber, postalcode, city, country, type, since, details))
    const nextStep = () => dispatch(actionsCreator.MAIN.NEW_CUSTOMER_STEP.INCREMENT())
    
    //const handleBack = () => dispatch(actionsCreator.MAIN.NEW_USER_STEP.DECREMENT())

    const handleBack = () => dispatch(actionsCreator.MAIN.CLEAR())
    const activeStep = useSelector(state => state.main.newUserActiveStep)


    const handleNext = () => {
        setNewCustomer();
        nextStep();

        console.log("ActiveStep: ", activeStep)

        console.log("+++++++++++ Zu Speichern +++++++++++")
        console.log("Vor- + Nachname: ", firstname, lastname)
        console.log("E-Mail: ", email)
        console.log("Mobil: ", mobile)
        console.log("Straße + Hausnummer: ", street, housenumber)
        console.log("PLZ + Ort: ", postalcode, city)
    }
    

    return (
        <div className="p-5">
            <form>
                <div className="p-4">
                    <div>
                        <div className="font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">Create New Customer</div>

                        <div className="flex flex-col md:flex-row">                        
                            <div className="w-full flex-1 mx-2">
                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Costomer-ID</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="customId"
                                        value={customId}
                                        placeholder="Kundennummer"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setCustomId(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1 mx-2">
                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Company</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="company"
                                        value={company}
                                        placeholder="Firma"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setCompany(e.target.value)}
                                    /> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">                        
                            <div className="w-full flex-1 mx-2">
                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Firstname</div>
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
                            <div className="w-full flex-1 mx-2">
                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Lastname</div>
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

                        <div className="flex flex-col md:flex-row">
                            <div className="w-full mx-2 flex-1">
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
                            <div className="w-full mx-2 flex-1">
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


                        <div className="flex flex-col md:flex-row">
                            <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Street</div>
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
                            <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Housenumber</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="housenumber"        
                                        value={housenumber}                                
                                        placeholder="Hausnummer"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setHouseNumber(e.target.value)}
                                    /> 
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Postalcode</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="postalcode"
                                        value={postalcode}
                                        placeholder="PLZ"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setPostalCode(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> City</div>
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
                </div>
            </form>
            <div className="flex w-full">
                <div className="w-1/2 pl-6 flex justify-start">
                    <button className="button-type-1 flex justify-left" onClick={handleBack} > Back </button>
                </div>
                <div className="w-1/2 pr-6 flex justify-end">
                    <button className="button-type-2" onClick={handleNext} > Next </button>
                </div>
            </div>
        </div>
    );
}


