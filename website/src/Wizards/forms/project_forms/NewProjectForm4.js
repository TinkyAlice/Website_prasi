import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreator } from 'redux-cool'



export default function NewProjectForm4() {

    const project_customId = useSelector(state => state.project.customId)
    const project_name = useSelector(state => state.project.name)
    const project_start = useSelector(state => state.project.start)
    const project_type = useSelector(state => state.project.type)
    const project_details = useSelector(state => state.project.details)
    const project_street = useSelector(state => state.project.street)
    const project_housenumber = useSelector(state => state.project.housenumber)
    const project_postalcode = useSelector(state => state.project.postalcode)
    const project_city = useSelector(state => state.project.city)
    const project_location_latitude = useSelector(state => state.project.latitude)
    const project_location_longitude = useSelector(state => state.project.longitude)

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


    const [custom_projectId, setCustom_ProjectId] = useState("Eigene Projekt-ID");
    const [projectName, setProjectName] = useState("Projektname");
    const [projectType, setProjectType] = useState("Geothermie");
    const [projectStart, setProjectStart] = useState("Startdatum");
    const [projectDetails, setProjectDetails] = useState("Projektdetails");

    const [projectStreet, setProjectStreet] = useState(project_street);
    const [projectHousenumber, setProjectHousenumber] = useState(project_housenumber);
    const [projectpostalcode, setProjectPostalcode] = useState(project_postalcode);
    const [projectCity, setProjectCity] = useState(project_city);
    const [projectLatitude, setProjectLatitude] = useState(project_location_latitude);
    const [projectLogitude, setProjectLogitude] = useState(project_location_longitude);

    const [custom_customerId, setCustom_CustomerId] = useState(customer_customId);
    const [firstname, setFirstname] = useState(customer_firstname);
    const [lastname, setLastname] = useState(customer_lastname);
    const [email, setEmail] = useState(customer_email);
    const [mobile, setMobile] = useState(customer_mobile);
    //const [phone, setPhone] = useState(customer_phone);
    const [street, setStreet] = useState(customer_street);
    const [housenumber, setHousenumber] = useState(customer_housenumber);
    const [postalcode, setPostalcode] = useState(customer_postalcode);
    const [city, setCity] = useState(customer_city);
    const [country, setCountry] = useState("Germany");
    const [customerType, setCustomerType] = useState("Kundenart");
    const [customerStart, setPCustomerStart] = useState("Kunde seit");
    const [customerDetails, setCustomerDetails] = useState("Kundendetails");

    const[show,setShow]=useState(false)

    //const [loading, setLoading] = useState(false);
    const [project_types, setProject_types] = useState([]);

    useEffect(() => {

        /** 
      const fetchData = async () =>{
          //setLoading(true);
          try {
              const {data: response} = await axios.get('http://localhost:8080/api/public/projecttypes');
              setProject_types(response);
              console.log("Aus der Datenbank gelesene Projekttypen");
              console.log(response);
          } catch (error) {
              console.error(error.message);
          }
          //setLoading(false);
      }
      fetchData();
      */

      // States aus dem Store lesen und im Formular als vorausgefüllten, aber editierbaren Wert setzen
      setCustom_ProjectId(project_customId);
      setProjectName(project_name)
      setProjectType(project_type)
      setProjectStart(project_start)
      setProjectDetails(project_details)

      setCustom_CustomerId(custom_customerId)
      setFirstname(customer_firstname)
      setLastname(customer_lastname)
      setEmail(customer_email)
      setMobile(customer_mobile)
      //setPhone(customer_phone)
      setStreet(customer_street)
      setHousenumber(customer_housenumber)
      setPostalcode(customer_postalcode)
      setCity(customer_city)
      setCountry(country)
      setCustomerType(customerType)
      setPCustomerStart(customerStart)
      setCustomerDetails(customerDetails)
  }, []);

  useEffect(() => {
    console.log("NewProjectForm4")
    }, []);

    /**
    * Neuen Eintrag in Datenbank schreiben
    */
    const newEntry = {
        project_custom_id: custom_projectId,
        project_name: projectName,
        project_type: projectType,
        project_street: projectStreet,
        project_housenumber: projectHousenumber,
        project_postal_code: projectpostalcode,
        project_city: projectCity,
        project_country:"Germany",
        project_start: project_start,
        project_details: project_details,
        project_location_lat: projectLatitude,
        project_location_long: projectLogitude,
        contact_firstname: customer_firstname,
        contact_lastname: customer_lastname,
        contact_email: customer_email,
        contact_mobile: customer_mobile,
        contact_street: customer_street,
        contact_housenumber: customer_housenumber,
        contact_postal_code: customer_postalcode,
        contact_city: customer_city
    }

    const [errorCode, setErrorCode] = useState();
    const [submitted, setSubmitted] = useState(false);
    //const [failure, setFailure] = useState(false);
    const [saveNow, setSaveNow] = useState();


    const dispatch = useDispatch()
    const handleBack = () => dispatch(actionsCreator.MAIN.STEP.DECREMENT())
    const clearMain = () => dispatch(actionsCreator.MAIN.CLEAR())
    const clearCustomer = () => dispatch(actionsCreator.CUSTOMER.CLEAR())
    const clearProject = () => dispatch(actionsCreator.PROJECT.CLEAR())

    const handleReset = () => {
        clearMain();
        clearCustomer();
        clearProject();
    }


    return (
        <div className="h-auto w-auto">

            {submitted && 
                <div className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <div className="flex">
                        <div className="text-left">Neues Projekt angelegt</div>
                        <div className="ml-20 text-center">
                            <button  onClick={handleReset}>Nächstes</button>
                        </div>
                    </div>
                </div>
            }

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
                            <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">Projekt erfolgreich angelegt</h1>
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

            <div className="p-8">
                <form>
                    <div className="p-4">
                        <div>
                            <div className="font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">Project Overview</div>

                                {/** 1. Reihe - Projekt-ID , Projekt-Name */}
                                <div className="flex flex-row gap-4">
                                    <div className="w-full flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Project-ID </div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_id"
                                                value={custom_projectId}
                                                placeholder="Eigene Projekt-ID"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setCustom_ProjectId(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Project Name </div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_name"
                                                value={projectName}
                                                placeholder="Projektname"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectName(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                </div>

                                {/** 2. Reihe - Projekt-Start, Projekt-Typ */}
                                <div className="flex flex-row gap-4">
                                    <div className="w-full flex-1 svelte-1l8159u">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Start Date</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="date"
                                                name="project_start"
                                                value={projectStart}
                                                placeholder="Projekt-Start"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectStart(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>

                                    <div className="w-full flex-1 svelte-1l8159u">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Type</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_type"
                                                value={projectType}
                                                placeholder="Projekt-Type"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectType(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>


                                    {/*
                                    <div className="w-full flex-1 svelte-1l8159u">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Type</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <select
                                                type="text"
                                                name="project_type"   
                                                value={projectType}                                     
                                                className="p-1 px-2 h-8 outline-none w-full text-gray-800" 
                                                onChange={e => setProjectType(e.target.value)}
                                                disabled="true"
                                            >
                                                {project_types.map(type => 
                                                    <option key={type.id}>{type.name}</option>
                                                )}  
                                            </select>                                  
                                        </div>
                                    </div>
                                    */}
                                </div>

                                {/** 3. Reihe - Projekt-Details */}
                                <div className="flex flex-row">
                                    <div className="w-full flex-1 svelte-1l8159u">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Details</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <textarea 
                                                type="text"
                                                rows="3"
                                                name="project_details"
                                                value={projectDetails}
                                                placeholder="Projekt-Details"
                                                className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectDetails(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                </div>

                                {/** 4. Reihe - Projekt - Straße & Hausnummer */}
                                <div className="flex flex-row gap-4">
                                <div className="w-full flex-1 svelte-1l8159u">
                                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Street</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_street"
                                                value={projectStreet}
                                                placeholder="Straße"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectStreet(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Housenumber</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_housenumber"
                                                value={projectHousenumber}
                                                placeholder="Hausnummer"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectHousenumber(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                </div>

                                {/** 5. Reihe - Projekt - PLZ & Ort */}
                                <div className="flex flex-row gap-4">
                                <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Postalcode</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_postalcode"
                                                value={projectpostalcode}
                                                placeholder="PLZ"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectPostalcode(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> City</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_city"
                                                value={projectCity}
                                                placeholder="Ort"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectCity(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                </div>

                                {/** 6. Reihe - Projekt - Latitude & Longitude */}
                                <div className="flex flex-row gap-4">
                                <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Latitude</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_latitude"
                                                value={projectLatitude}
                                                placeholder="Latitude"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectLatitude(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Longitude</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                            <input 
                                                type="text"
                                                name="project_longitude"
                                                value={projectLogitude}
                                                placeholder="Longitude"
                                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                                onChange={e => setProjectLogitude(e.target.value)}
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                </div>

                                <div className="py-8 font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">Contact Person</div>
                                {/** 7. Reihe - Kontaktperson - Vor- & Nachname */}
                                <div className="flex flex-row gap-4">
                                    <div className="w-full flex-1">
                                    <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Firstname</div>
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
                                    <div className="w-full flex-1">
                                    <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Lastname</div>
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

                                {/** 8. Reihe - Kontaktperson - E-Mail & Mobilnummer */}
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
                                                disabled="true"
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
                                                disabled="true"
                                            /> 
                                        </div>
                                    </div>
                                </div>

                                {/** 9. Reihe - Kontaktperson - Straße & Hausnummer */}
                                <div className="flex flex-row gap-4">
                                    <div className="w-full flex-1">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Straße</div>
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
                                    <div className="w-full flex-1">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Hausnummer</div>
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

                                {/** 10. Reihe - Kontaktperson - PLZ & Ort */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="w-full flex-1">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> PLZ</div>
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
                                    <div className="w-full flex-1">
                                        <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Ort</div>
                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                            <input 
                                                type="text"
                                                name="place"  
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
                </div>

            <div className="w-full p-8">
                    <div className="flex justify-between">
                        <div className="flex justify-start">
                            <button className="button-type-1" onClick={handleBack} > Back </button>
                            <button className="button-type-1 flex justify-left ml-2" onClick={handleReset} > Reset </button>
                        </div>
                        <div className="justify-end">
                            <button className="button-type-2" onClick={saveNow} > Next </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
