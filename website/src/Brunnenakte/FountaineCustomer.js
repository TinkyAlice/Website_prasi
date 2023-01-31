import React from 'react'


export default function FountaineCustomer() {


    return (
        <div>
            <p className="text-2xl text-gray-500 mt-4">Auftraggeber:</p>
            <table className="bg-white mt-2">
                <tbody>
                    <tr>
                        <td className="text-gray-500 text-right">Name:</td>
                        <td className="text-gray-500">  
                            <div>Jonas Müller</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Straße:</td>
                        <td className="text-gray-500">  
                           <div>Fahrenheitsstraße 1</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Ort:</td>
                        <td className="text-gray-500"> 
                            <div>28217 Bremen</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}> <p className="text-gray-500">Ansprechpartner:</p> </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Name:</td>
                        <td className="text-gray-500">
                            <div>Tabita Oberste-Berghaus</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Telefon:</td>
                        <td className="text-gray-500">
                            <div>0123456</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">Mobil:</td>
                        <td className="text-gray-500"> 
                            <div>987654</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 text-right">E-Mail:</td>
                        <td className="text-gray-500">  
                            <div>email@mail</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

