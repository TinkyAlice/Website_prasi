import React from "react";

export default function FountaineLaws(props) {
  return (
    <div className="border-8 border-slate-800 rounded bg-slate-800 w-full m-6">
      <p className="text-2xl text-gray-300  ">Ergänzende Angaben zum Wasserrecht:Ergänzende Angaben zum Wasserrecht:</p>
      <div class="grid grid-cols-2 text-gray-300 mt-4">
        <div className="col-span-1">Aktenzeichen:</div>
        <div class="col-span-1 ">123</div>
        <div className="col-span-1">Erlaubte Fördermenge:</div>
        <div class="col-span-1 ">1 Liter</div>
        <div className="col-span-1">Erlaubtes Delta-T:</div>
        <div class="col-span-1 ">75</div>
        <div className="col-span-1">Erlaubte min. Temp:</div>
        <div class="col-span-1 ">-210</div>
        <div className="col-span-1">Erlaubte max. Temp:</div>
        <div class="col-span-1 ">-220</div>
      </div>
    </div>
  );
}

export const FountaineLawsFakeData = () => {
  return (
    <div className="w-full pl-16">
      <p className="text-2xl text-gray-500 mt-4">
        Ergänzende Angaben zum Wasserrecht:
      </p>
      <table className="bg-white mt-2">
        <tbody>
          <tr>
            <td className="text-gray-500 w-1/3 text-right">Aktenzeichen:</td>
            <td className="text-gray-500"> HB22/3302H1 </td>
          </tr>
          <tr>
            <td className="text-gray-500 w-1/3 text-right">
              Erlaubte Fördermenge:
            </td>
            <td className="text-gray-500"> 2.000.000 </td>
          </tr>
          <tr>
            <td className="text-gray-500 w-1/3 text-right">
              Erlaubtes Delta-T:
            </td>
            <td className="text-gray-500"> 2 </td>
          </tr>
          <tr>
            <td className="text-gray-500 w-1/3 text-right">
              Erlaubte min. Temp:
            </td>
            <td className="text-gray-500"> 12,0 </td>
          </tr>
          <tr>
            <td className="text-gray-500 w-1/3 text-right">
              Erlaubte max. Temp:
            </td>
            <td className="text-gray-500"> 14,0 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
