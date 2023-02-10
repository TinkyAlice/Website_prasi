import React from "react";
import dynamic from 'next/dynamic';


import Flag_DE_NI from "../..//Bilder/05-Niedersachsen.png"
import Flag_DE_TH from "../..//Bilder/07-Thüringen.png"
import Flag_DE_HH from "../..//Bilder/09-Hamburg.png"
import Flag_DE_NW from "../..//Bilder/11-Nordrhein-Westfalen.png"
import Flag_DE_HB from "../..//Bilder/13-Bremen.png"
import Flag_DE_HE from "../..//Bilder/16-Hessen.png"

const VectorMap = dynamic(
    // @ts-ignore
    () => import("@react-jvectormap/core").then((m) => m.VectorMap),
    { ssr: false, }
  );


var mapData = {
  "DE-BE": 0, // Berlin
  "DE-ST": 0, // Sachsen-Anhalt
  "DE-RP": 0, // Rheinland-Pfalz
  "DE-BB": 0, // Brandenburg
  "DE-NI": 1300, // Niedersachsen
  "DE-MV": 0, // Mecklenburg-Vorpommern
  "DE-TH": 550, // Thüringen
  "DE-BW": 0, // Baden-Württemberg
  "DE-HH": 600, // Hamburg
  "DE-SH": 0, // Schleswig-Holstein
  "DE-NW": 2920, // Nordrhein-Westfalen
  "DE-SN": 0, // Sachsen
  "DE-HB": 760, // Bremen
  "DE-SL": 0, // Saarland
  "DE-BY": 0, // Bayern
  "DE-HE": 690, // Hessen
};

export const VerctormapDE = ({ series }) =>  {
    
    return (

        <div className=" w-full bg-white">
            <div className="flex w-full">
                <div className="w-1/2">
                    <p className="text-2xl pb-2">Projekte nach Bundesländern</p>
                    <table className="w-full border-collapse">

                        <tbody>
                        <tr className="">
                            <td className="border border-solid border-l-0 border-r-0">
                                <img
                                    alt="Flagge NRW"
                                    src={Flag_DE_NW}
                                    className="rounded border-2 border-gray-400"
                                />
                            </td>
                            <td className="border border-solid border-l-0 border-r-0 text-left">Nordrhein-Westfalen</td>
                            <td className="border border-solid border-l-0 border-r-0 text-right">2.920</td>
                            <td className="border border-solid border-l-0 border-r-0 text-right">53.23%</td>
                        </tr>
                        <tr className="">
                            <td className="border border-solid border-l-0 border-r-0 bg-white">
                                <img
                                    alt="Flagge NDS"
                                    src={Flag_DE_NI}
                                    className="rounded border-2 border-gray-400"
                                />                            
                            </td>
                            <td className="border border-solid border-l-0 border-r-0 bg-white text-left">Niedersachsen</td>
                            <td className="border border-solid border-l-0 border-r-0 bg-white text-right">1.300</td>
                            <td className="border border-solid border-l-0 border-r-0 bg-white text-right">20.43%</td>
                        </tr>
                        <tr className="">
                            <td className="border border-solid border-l-0 border-r-0">
                                <img
                                    alt="Flagge HB"
                                    src={Flag_DE_HB}
                                    className="rounded border-2 border-gray-400"
                                />
                            </td>
                            <td className="border border-solid border-l-0 border-r-0 text-left">Bremen</td>
                            <td className="border border-solid border-l-0 border-r-0 text-right">760</td>
                            <td className="border border-solid border-l-0 border-r-0 text-right">10.35%</td>
                        </tr>
                        <tr className="">
                            <td className="border border-solid border-l-0 border-r-0 bg-white ">
                                <img
                                    alt="Flagge Hessen"
                                    src={Flag_DE_HE}
                                    className="rounded border-2 border-gray-400"
                                />                            
                            </td>
                            <td className="border border-solid border-l-0 border-r-0 bg-white text-left">Hessen</td>
                            <td className="border border-solid border-l-0 border-r-0 bg-white text-right">690</td>
                            <td className="border border-solid border-l-0 border-r-0 bg-white text-right">7.87%</td>
                        </tr>
                        <tr className="">
                            <td className="border border-solid border-l-0 border-r-0">
                                <img
                                    alt="Flagge HH"
                                    src={Flag_DE_HH}
                                    className="rounded border-2 border-gray-400"
                                />                            
                            </td>
                            <td className="border border-solid border-l-0 border-r-0 text-left">Hamburg</td>
                            <td className="border border-solid border-l-0 border-r-0 text-right">600</td>
                            <td className="border border-solid border-l-0 border-r-0 text-right">5.94%</td>
                        </tr>
                        <tr className="">
                            <td className="border border-solid border-l-0 border-r-0 border-b-0 bg-white ">
                                <img
                                    alt="Flagge Thüringen"
                                    src={Flag_DE_TH}
                                    className="rounded border-2 border-gray-400"
                                />                           
                            </td>
                            <td className="border border-solid border-l-0 border-r-0 border-b-0 bg-white text-left">Thüringen</td>
                            <td className="border border-solid border-l-0 border-r-0 border-b-0 bg-white text-right">550</td>
                            <td className="border border-solid border-l-0 border-r-0 border-b-0 bg-white text-right">4.34%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  

    );
}

export default VerctormapDE