import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import FountaineCustomer from './FountaineCustomer';
import FountaineProject from './FountaineProject';
import UploadFiles from './UploadFiles';
import FountaineLaws from './FountaineLaws';

import Waermepumpenkreislauf from '../Bilder/heat_pump_circuit.jpg';



const server_ip = '192.168.1.172:8081'


export default function Brunnenakte() {


    return (
        <div className="bg-gray-100">
            <div className="flex">
                <p className="text-4xl text-left text-gray-500 pl-8 pt-8"> Brunnenakte </p>
                <div className="pl-8 pt-8 w-full flex">
                    <div className="w-1/5">
                        <div className="bg-white p-1 flex border border-gray-300 rounded">
                            <select
                                type="text"
                                name="project"
                                className="p-1 px-2 h-8 outline-none w-full text-gray-800"

                            >
                                <option value="default">Projekt wählen</option>
                            </select>
                        </div>
                    </div>

                    <Link to={`/brunnenakte/`} className='flex ml-4' >
                        <button className="button-type-2 text-center items-center">Go</button>
                    </Link>
                    <Link to={'../pdf'} className='flex'>
                        <div className="pl-8 flex">
                            <button className="button-type-2" >PDF erzeugen</button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="w-full h-screen px-8 py-8">
                <div className="w-full h-full rounded border border-gray-300 bg-white">
                    <div className="flex w-full h-full">
                        <div className="w-1/2">
                            <div className=" flex items-left justify-left m-6 bg-slate-800 rounded">

                                <FountaineProject />
                                <FountaineCustomer />
                            </div>
                            <div className="h-1/2 flex items-center justify-center pl-8 pb-8">
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
                            <div className=" flex items-center justify-center">
                                <div className="m-6">
                                    <div className="" >
                                        <FountaineLaws />
                                        
                                        
                                    </div>
                                    <div className="mt-6">
                                        <UploadFiles/>
                                    </div>
                                </div>
                            </div>
                            <div className="h-1/2 flex items-center justify-center pr-8">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
