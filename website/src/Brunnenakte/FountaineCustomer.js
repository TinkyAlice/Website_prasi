import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function FountaineCustomer(props) {



    return (
        <div className='border-8 border-slate-800 rounded bg-slate-800 '>
            <p className="text-2xl text-gray-300 mt-4 flex left bg-slate-800">Auftraggeber:</p>
            <table className="bg-slate-800 mt-2">
                <tbody>
                    <tr>
                        <td className="text-gray-300 text-left">Name:</td>
                        <td className="text-gray-300 text-left">  
                            <div>Armin Großmann</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Straße:</td>
                        <td className="text-gray-300">  
                            <div>Vegesacker Straße 87</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Ort:</td>
                        <td className="text-gray-300"> 
                            <div>28259 Bremen</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}> <p className="text-gray-300 text-left">Ansprechpartner:</p> </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Name:</td>
                        <td className="text-gray-300">
                            <div>Projekt Ehre</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Telefon:</td>
                        <td className="text-gray-300">
                            <div>0648548406</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Mobil:</td>
                        <td className="text-gray-300"> 
                            <div>640646440</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">E-Mail:</td>
                        <td className="text-gray-300">  
                            <div>Armin@mail.com</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

