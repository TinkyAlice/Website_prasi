import React from 'react'


export default function FountaineLaws(props) {

    return (
        <div className="rounded border-8 border-slate-800  bg-slate-800"> 
            <p className="text-2xl text-gray-300 text-left mt-4">Ergänzende Angaben zum Wasserrecht:</p>
            <table className="bg-slate-800 mt-2">
                <tbody className='grid grid-cols-2'>
                    <tr>
                        <td className="text-gray-300 text-left">Aktenzeichen:</td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">123</td>

                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Erlaubte Fördermenge:</td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">1 Liter</td>
                    </tr>
                    <tr>
                        <td className="text-gray-300 text-left">Erlaubtes Delta-T:</td>
                    </tr>
                    <tr>
                      <td className='text-gray-300 text-left'>75</td>
                    </tr>
                    <tr>
                      <td className='text-gray-300 text-left'>Erlaubte min. Temp</td>
                    </tr>
                    <tr>
                      <td className='text-gray-300 text-left'>-200</td>
                    </tr>
                    <tr>
                      <td className='text-gray-300 text-left'>Erlaubte max. Temp</td>
                    </tr>
                    <tr>
                      <td className='text-gray-300 text-left'>-220</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const FountaineLawsFakeData = () => {

    return (
        <div className="w-full pl-16"> 
            <p className="text-2xl text-gray-500 mt-4">Ergänzende Angaben zum Wasserrecht:</p>
            <table className="bg-white mt-2">
                <tbody>
                    <tr>
                        <td className="text-gray-500 w-1/3 text-right">Aktenzeichen:</td>
                        <td className="text-gray-500"> HB22/3302H1 </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 w-1/3 text-right">Erlaubte Fördermenge:</td>
                        <td className="text-gray-500"> 2.000.000 </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 w-1/3 text-right">Erlaubtes Delta-T:</td>
                        <td className="text-gray-500"> 2 </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 w-1/3 text-right">Erlaubte min. Temp:</td>
                        <td className="text-gray-500"> 12,0 </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500 w-1/3 text-right">Erlaubte max. Temp:</td>
                        <td className="text-gray-500"> 14,0 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}