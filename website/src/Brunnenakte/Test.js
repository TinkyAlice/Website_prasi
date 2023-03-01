import React from "react";

const test = () => {
  return (
    <div className="border-8 border-slate-800 rounded bg-slate-800 m-4 ">
      <p className="text-2xl text-gray-300">Ergänzenden Angaben zum Wasserrecht:</p>
      <table className=" mt-2 ">
        <tbody className="grid grid-cols-2">
          <tr>
            <td className="text-gray-300 text-left ">Aktenzeichen:</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">1223</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Erlaubte Fördermenge:</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">1Liter</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Erlaubtes Delta-T:</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">75</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Erlaubte min. Temp:</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">-200 </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Erlaubte max. Temp</td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">-220</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default test;
