import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function FountaineProject(props) {



    return (
        <div className='border-8 border-slate-800 rounded bg-slate-800 '>
            <p className="text-2xl text-gray-300 mt-4  ">Projekt:</p>       
            <table className=" mt-2">
                <tbody>
                    <tr>
                        <td className="text-gray-300 text-left w-10">Nummer:</td>
                        <td className="text-gray-300">
                            <div>6363</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Name:</td>
                        <td className="text-gray-300">
                            <div>Armin</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Straße:</td>
                        <td className="text-gray-300">
                            <div>Baumstraße</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Ort:</td>
                        <td className="text-gray-300"> 
                            <div>Bremne</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Gemarkung:</td>
                        <td className="text-gray-300">  
                            <div>Kein Plan</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Flur:</td>
                        <td className="text-gray-300">
                            <div>-3</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Flurstück:</td>
                        <td className="text-gray-300">
                            <div>-2</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}> <center> <p className="text-gray-300 text-left">Ansprechpartner:</p> </center> </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Name:</td>
                        <td className="text-gray-300">
                            <div>Du selber</div>
                            </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Telefon:</td>
                        <td className="text-gray-300">
                            <div>Weiß nicht darin war aber eine 5</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Mobil:</td>
                        <td className="text-gray-300">  
                            <div>ist das mit dem @</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">E-Mail:</td>
                        <td className="text-gray-300">
                            <div>Brieftaube ist auf dem Dach</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}