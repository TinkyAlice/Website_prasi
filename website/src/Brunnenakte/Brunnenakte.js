import React from 'react'
import FountaineCustomer from './FountaineCustomer';
import FountaineProject from './FountaineProject';
import UploadFiles from './UploadFiles';
import FountaineLaws from './FountaineLaws';
import Waermepumpenkreislauf from '../Bilder/heat_pump_circuit.jpg';

export default function Brunnenakte() {

    return (
        <div className="bg-gray-100">
            <div className="flex">
                <p className="w-1/5 text-4xl text-left text-gray-500 pl-8 pt-8"> Brunnenakte </p>
                <div className="pl-8 pt-8 w-full flex">
                    <div className="w-1/5">
                        <div className="bg-white p-1 flex border border-gray-300 rounded">
  
                                <option value="default">Projekt wählen</option>
                               
                        </div>
                    </div>
                    
                    
                        <button className="button-type-2">Go</button>

                    <div className="pl-8">
                        <button className="button-type-2">PDF erzeugen</button>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-screen px-8 py-8">
                <div className="w-full h-full rounded border border-gray-300 bg-white">
                    <div className="flex w-full h-full">
                        <div className="w-1/2">
                            <div className="h-1/2 flex items-center justify-center">
                                {/* Links oben */}
                                <UploadFiles />  
                            </div>
                            <div className="h-1/2 flex items-center justify-center pl-8 pb-8">
                                {/* Links unten */}
                                <img 
                                    className="mt-10"
                                    src={Waermepumpenkreislauf}
                                    alt="Waermepumpenkreislauf"
                                    width="80%"
                                    height="80%"
                                />
                            </div>
                        </div>
                        
                        <div className="w-1/2">
                            <div className="h-1/2 flex items-center justify-center">
                                <div className="flex w-full gap-4 pr-8 pt-8">
                                    <div className="w-1/2" >
                                         <FountaineCustomer />                    
                                    </div>
                                    <div className="w-1/2" >
                                        <FountaineProject /> 
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="h-1/2 flex items-center justify-center pr-8">
                               {/**<FountaineLaws/>
                            */}
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}
