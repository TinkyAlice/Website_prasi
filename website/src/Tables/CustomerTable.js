import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { actionsCreator } from 'redux-cool'



import { SearchIcon } from '@heroicons/react/outline'


export default function CustomerTable() {



    return (
        <div className="h-screen w-full bg-gray-100">
            <p className="text-4xl text-left text-gray-500 pl-8 pt-8"> Kundentabelle </p>
            <div className="px-8 pt-8">
                <div className="rounded border border-gray-300 bg-white">
                    <div className="p-8">
                        <table>
                            <thead>
                                <tr>
                                    <td className="w-1/5 font-bold">ID</td>
                                    <td className="w-1/5 font-bold">Firma</td>
                                    <td className="w-1/5 font-bold">Anprechpartner</td>
                                    <td className="w-1/5 font-bold">Telefon</td>
                                    <td className="w-1/5 font-bold">E-Mail</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>Johannes GmbH</td>
                                    <td>Johannes Bob </td>
                                    <td>0123456</td>
                                    <td>email@mail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}