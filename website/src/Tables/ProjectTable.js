import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { SearchIcon } from '@heroicons/react/outline'


export default function ProjectTable() {

    return (
        <div className="h-screen w-full bg-gray-100">
            <p className="text-4xl text-left text-gray-500 pl-8 pt-8"> Projekttabelle </p>
            <div className="px-8 pt-8">
                <div className="rounded border border-gray-300 bg-white">
                    <div className="p-8">
                        <table>
                            <thead>
                                <tr>
                                    <td className="w-1/4 font-bold">ID</td>
                                    <td className="w-1/4 font-bold">Name</td>
                                    <td className="w-1/4 font-bold">Kunde</td>
                                    <td className="w-1/4 font-bold">Details</td>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>123</td>
                                    <td>Johannes Projekt</td>
                                    <td>Johannes Bobchen</td>
                                    <td>
                                        <center>
                                            <div className="w-1/6">
                                                
                                                    <SearchIcon className="h-4" />
                                                
                                            </div>
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}