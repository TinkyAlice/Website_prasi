import React from 'react'



export default function NewUserForm1() {

    

    return (
        <div className="p-5">
            <form>
                <div className="p-4">
                    <div>
                    <div className="font-bold text-gray-600 text-xl leading-8 uppercase h-6 mx-2 mt-3">Create New User</div>
                        <div className="flex flex-col md:flex-row">                        
                            <div className="w-full flex-1 mx-2">
                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Firstname</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="firstname"
                                        
                                        placeholder="Vorname"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
                                    /> 
                                </div>
                            </div>
                            <div className="w-full flex-1 mx-2">
                            <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Lastname</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="lastname"
                                        
                                        placeholder="Nachname"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
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
                                        
                                        placeholder="E-Mail"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
                                    /> 
                                </div>
                            </div>
                            <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Mobile Phone</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="mobile"  
                                                                              
                                        placeholder="Mobil"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
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
                                        
                                        placeholder="Straße"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
                                    /> 
                                </div>
                            </div>
                            <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> Housenumber</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="housenumber"        
                                                                       
                                        placeholder="Hausnummer"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
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
                                        
                                        placeholder="PLZ"
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
                                    /> 
                                </div>
                            </div>
                            <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 text-gray-600 text-xs leading-8 uppercase"> City</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input 
                                        type="text"
                                        name="city"  
                                                                              
                                        placeholder="Ort" 
                                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                        
                                    /> 
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </form>
            <div className="flex w-full">
                <div className="w-1/2 pl-6 flex justify-start">
                    <button className="button-type-1 flex justify-left" > Back </button>
                </div>
                <div className="w-1/2 pr-6 flex justify-end">
                    <button className="button-type-2"  > Next </button>
                </div>
            </div>
        </div>
    );
}


