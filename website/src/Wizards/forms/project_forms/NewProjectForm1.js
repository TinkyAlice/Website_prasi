import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreator } from 'redux-cool'
import { Link } from 'react-router-dom';



/**
 * import ReactFormInputValidation from "react-form-input-validation";
 * 
 */


export default function NewProjectForm1() {

    const [loading, setLoading] = useState(false);
    const [project_types, setProject_types] = useState([]);
      
        const [fetchData, useFetchData] = useState();


    
  


    const project_customId = useSelector(state => state.project.customId)
    const project_name = useSelector(state => state.project.name)
    const project_start = useSelector(state => state.project.start)
    const project_type = useSelector(state => state.project.type)
    const project_details = useSelector(state => state.project.details)

    const customers = useSelector(state => state.mass_storage.customers)

    const [customId, setCustomId] = useState(project_customId);
    const [projectName, setProjectName] = useState(project_name);
    const [projectStart, setProjectStart] = useState(project_start);
    const [projectType, setProjectType] = useState(project_type);
    const [projectDetails, setProjectDetails] = useState(project_details);

    const dispatch = useDispatch()
    const setProject = () => dispatch(actionsCreator.PROJECT.SET_PROJECT(customId, projectName, projectType, projectStart, projectDetails))
    const nextStep = () => dispatch(actionsCreator.MAIN.STEP.INCREMENT())
    const clearMain = () => dispatch(actionsCreator.MAIN.CLEAR())
    const clearProject = () => dispatch(actionsCreator.PROJECT.CLEAR())
    const clearCustomer = () => dispatch(actionsCreator.CUSTOMER.CLEAR())
    const setTypes = () => dispatch(actionsCreator.PROJECT.SET_TYPES(project_types))

    const handleReset = () => {
        clearMain();
        clearProject();
        clearCustomer();
        setCustomId("")
        setProjectName("")
        setProjectStart("")
        setProjectType("")
        setProjectDetails("")
    }

    const handleNext = () => {
        nextStep();
        setProject();
        setTypes();
    }

    return (
        <div className="h-auto w-auto">
            <div className="p-8">
                <form>
                    <div className="gap-4">
                        <div className="font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">Create New Project</div>

                        <div className="flex flex-row gap-4">
                            <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Customer</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <select
                                        type="text"
                                        name="project_type"     
                                        value={projectType}                                   
                                        className="p-1 px-2 h-8 outline-none w-full text-gray-800" 
                                        onChange={e => setProjectType(e.target.value)}
                                    >
                                        {customers.map(customer => 
                                            <option key={customer.customer_id}>{customer.customer_company}</option>
                                        )}  
                                    </select> 
                                </div>
                            </div>
                            <div className="w-full flex-1 svelte-1l8159u">
                                <div className="pt-8">
                                    <Link to="/new-customer">
                                        <button className="button-type-2">Create New Customer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Project-ID</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <input 
                                        type="text"
                                        name="project_id"
                                        value={customId}
                                        placeholder="Eigene Projekt-ID"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setCustomId(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Project Name</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <input 
                                        type="text"
                                        name="project_name"
                                        value={projectName}
                                        placeholder="Projektname"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setProjectName(e.target.value)}
                                    /> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Start Date</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <input 
                                        type="date"
                                        name="project_start"
                                        value={projectStart}
                                        placeholder="Startdatum"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setProjectStart(e.target.value)}
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Type</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <select
                                        type="text"
                                        name="project_type"     
                                        value={projectType}                                   
                                        className="p-1 px-2 h-8 outline-none w-full text-gray-800" 
                                        onChange={e => setProjectType(e.target.value)}
                                    >
                                        {project_types.map(type => 
                                            <option key={type.id}>{type.name}</option>
                                        )}  
                                    </select>                                  
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Details</div>
                                <div className="bg-white my-2 p-1 flex border 00border-gray-2 rounded svelte-1l8159u">
                                    <textarea 
                                        type="text"
                                        rows="3"
                                        name="project_details"
                                        value={projectDetails}
                                        placeholder="Projektdetails"
                                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
                                        onChange={e => setProjectDetails(e.target.value)}
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
                        <button className="button-type-1" onClick={handleReset} > Reset </button>
                    </div>
                    <div className="justify-end">
                        <button className="button-type-2" onClick={handleNext} > Next </button>
                    </div>
                </div>
            </div>
     
        </div>
    )
}
