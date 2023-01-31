import React from "react";

export default function UserProfileFormular() {

    return (
        <div>
            {/*<p className="text-2xl text-left mt-2 ml-2"> User-Profile Formular</p>*/}

            <div>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-4 svelte-1l8159u">
                        <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">Firma</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input 
                                type="text"
                                name="company"
                                //value={customId}
                                placeholder="Firma"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                //onChange={e => setCustomId(e.target.value)}
                                disabled={true}
                            /> 
                        </div>
                    </div>
                    <div className="w-full flex-1 mx-4 svelte-1l8159u">
                        <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">Phone</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input 
                                type="tel"
                                name="phone"
                                //value={projectName}
                                placeholder="Telefonnummer"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                //onChange={e => setProjectName(e.target.value)}
                            /> 
                        </div>
                    </div>
                    <div className="w-full flex-1 mx-4 svelte-1l8159u">
                        <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">E-Mail</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input 
                                type="text"
                                name="email"
                                //value={projectName}
                                placeholder="E-Mail"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                //onChange={e => setProjectName(e.target.value)}
                            /> 
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-4 svelte-1l8159u">
                        <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">Firstname</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input 
                                type="text"
                                name="firstname"
                                //value={customId}
                                placeholder="Vorname"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                //onChange={e => setCustomId(e.target.value)}
                            /> 
                        </div>
                    </div>
                    <div className="w-full flex-1 mx-4 svelte-1l8159u">
                        <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">Lastname</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input 
                                type="text"
                                name="lastname"
                                //value={projectName}
                                placeholder="Nachname"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                //onChange={e => setProjectName(e.target.value)}
                            /> 
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-4 svelte-1l8159u">
                        <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">Adress</div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                            <input 
                                type="text"
                                name="adress"
                                //value={customId}
                                placeholder="Adresse"
                                className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                                //onChange={e => setCustomId(e.target.value)}
                            /> 
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row">
                <div className="w-full flex-1 mx-4 svelte-1l8159u">
                    <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">Postal Code</div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input 
                            type="text"
                            name="postal_code"
                            //value={customId}
                            placeholder="PLZ"
                            className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                            //onChange={e => setCustomId(e.target.value)}
                        /> 
                    </div>
                </div>
                <div className="w-full flex-1 mx-4 svelte-1l8159u">
                    <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">City</div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input 
                            type="text"
                            name="city"
                            //value={projectName}
                            placeholder="Ort"
                            className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                            //onChange={e => setProjectName(e.target.value)}
                        /> 
                    </div>
                </div>
                <div className="w-full flex-1 mx-4 svelte-1l8159u">
                    <div className="font-bold text-gray-600 text-xs text-left leading-8 uppercase h-6 mx-2 mt-3">Country</div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input 
                            type="text"
                            name="country"
                            //value={projectName}
                            placeholder="Land"
                            className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                            //onChange={e => setProjectName(e.target.value)}
                        /> 
                    </div>
                </div>
            </div>

            <div className="flex items-start mx-4 pt-8">
                <button className="button-type-2">
                Save Changes
                </button>
            </div>

        </div>

    )
}