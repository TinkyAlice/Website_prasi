import React, { useEffect } from "react";

export default function UserTable() {

    return (
        <div className="h-screen w-full bg-gray-100">
            <p className="text-4xl text-left text-gray-500 pl-8 pt-8"> Benutzertabelle </p>
            <div className="px-8 pt-8">
                <div className="rounded border border-gray-300 bg-white">
                    <div className="p-8">
                        <table>
                            <thead>
                                <tr>
                                    <td className="w-1/5 font-bold">ID</td>
                                    <td className="w-1/5 font-bold">Firma</td>
                                    <td className="w-1/5 font-bold">Name</td>
                                    <td className="w-1/5 font-bold">Telefon</td>
                                    <td className="w-1/5 font-bold">E-Mail</td>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>1234</td>
                                    <td>Bob GmbH</td>
                                    <td>BoB Johannes</td>
                                    <td>987654</td>
                                    <td>mail@mail</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}