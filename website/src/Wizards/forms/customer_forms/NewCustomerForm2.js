import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreator } from 'redux-cool'


export default function NewCustomerForm2() {

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

    const [customId, setCustomId] = useState(customer_customId);
    const [company, setCompany] = useState(customer_company);
    const [firstname, setFirstname] = useState(customer_firstname);
    const [lastname, setLastname] = useState(customer_lastname);
    const [email, setEmail] = useState(customer_email);
    const [mobile, setMobile] = useState(customer_mobile);
    const [phone, setPhone] = useState(customer_phone);
    const [street, setStreet] = useState(customer_street);
    const [housenumber, setHousenumber] = useState(customer_housenumber);
    const [postalcode, setPostalcode] = useState(customer_postalcode);
    const [city, setCity] = useState(customer_city);
    const [country, setCountry] = useState("Germany");
    const [customerType, setCustomerType] = useState("Kundenart");
    const [customerStart, setPCustomerStart] = useState("Kunde seit");
    const [customerDetails, setCustomerDetails] = useState("Kundendetails");
    const created_by = useState("user-ID");
    const customer_since = useState("customer_since");


    const[show,setShow]=useState(false)

    /**
    * Neuen Eintrag in Datenbank schreiben
    */
    const newEntry = {
        customer_customId: customId,
        customer_company: company,
        customer_firstname: firstname,
        customer_lastname:lastname,
        customer_email: email,
        customer_phone: phone,
        customer_mobile: mobile,
        customer_street: street,
        customer_housenumber: housenumber,
        customer_postalcode: postalcode,
        customer_city: city,
        customer_country: country,
        //customer_since: customer_since,
        //customer_created_by: created_by
    }
    

    const [errorCode, setErrorCode] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [saveNow, setSaveNow] = useState();


    const dispatch = useDispatch()
    const handleBack = () => dispatch(actionsCreator.MAIN.NEW_USER_STEP.DECREMENT())
    const clearMain = () => dispatch(actionsCreator.MAIN.CLEAR())
    const clearCustomer = () => dispatch(actionsCreator.NEW_USER.CLEAR())

    const handleReset = () => {
        clearMain();
        clearCustomer();
    }


    return (
        <div className="p-5">

        {submitted && 
        <div className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <div className="flex">
                <div className="text-left">Neuen Benutzer angelegt</div>
                <div className="ml-20 text-center">
                    <button  onClick={handleReset}>Nächsten</button></div>
                </div>
            </div>}


            {show &&  <div className="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                            <div className="w-full flex justify-center text-green-400 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={56} height={56} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={12} r={9} />
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                            </div>
                            <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">Kunden erfolgreich angelegt</h1>
                            <div className="flex pt-8 items-center justify-center w-full">
                                <button className="button-type-2" onClick={()=>setShow(!show)} >
                                    OK
                                </button>
                            </div>
                            <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out" onClick={()=>setShow(!show)} >
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>}

            <form>
                <div className="p-4">
                    <div>
                        <div className="font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">New Customer Data</div>

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
                                        disabled="true"
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
                                        disabled="true"
                                    /> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2">
                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Firstname </div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="firstname"
                                        value={firstname}
                                        placeholder="Vorname"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setFirstname(e.target.value)}
                                        disabled="true"
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Lastname </div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="lastname"
                                        value={lastname}
                                        placeholder="Nachname" 
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setLastname(e.target.value)}
                                        disabled="true"
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
                                        disabled="true"
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
                                        disabled="true"
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
                                        disabled="true"
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
                                        onChange={e => setHousenumber(e.target.value)}
                                        disabled="true"
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
                                        onChange={e => setPostalcode(e.target.value)}
                                        disabled="true"
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
                                        disabled="true"
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
                    <button className="button-type-1 flex justify-left ml-2" onClick={handleReset} > Reset </button>
                </div>
                <div className="w-1/2 pr-6 flex justify-end">
                    <button className="button-type-2" onClick={saveNow} > Save </button>
                </div>
            </div>
        </div>
    );
}
