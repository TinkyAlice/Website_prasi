import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function FountaineProject(props) {



    return (
        <div>
            <p className="text-2xl text-gray-500 mt-4">Projekt:</p>       
            <table className="bg-white mt-2">
                <tbody>
                    <tr>
                        <td className="text-gray-500 text-right w-10">Nummer:</td>
                        <td className="text-gray-500">
                            <div>6363</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Name:</td>
                        <td className="text-gray-500">
                            <div>Armin</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Straße:</td>
                        <td className="text-gray-500">
                            <div>Baumstraße</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Ort:</td>
                        <td className="text-gray-500"> 
                            <div>Bremne</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Gemarkung:</td>
                        <td className="text-gray-500">  
                            <div>Kein Plan</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Flur:</td>
                        <td className="text-gray-500">
                            <div>-3</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Flurstück:</td>
                        <td className="text-gray-500">
                            <div>-2</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}> <center> <p className="text-gray-500">Ansprechpartner:</p> </center> </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Name:</td>
                        <td className="text-gray-500">
                            <div>Du selber</div>
                            </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Telefon:</td>
                        <td className="text-gray-500">
                            <div>Weiß nicht darin war aber eine 5</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Mobil:</td>
                        <td className="text-gray-500">  
                            <div>ist das mit dem @</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">E-Mail:</td>
                        <td className="text-gray-500">
                            <div>Brieftaube ist auf dem Dach</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}