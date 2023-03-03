import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FountaineProject(props) {
  return (
    <div className="border-8 border-slate-800 rounded bg-slate-800 w-full m-6">
      <p className="text-2xl text-gray-300  ">Projekt:</p>
      <div class="grid grid-cols-2 text-gray-300 mt-4">
        <div className="col-span-1">Nummer:</div>
        <div class="col-span-1 ">6336</div>
        <div className="col-span-1">Name:</div>
        <div class="col-span-1 ">Armin Großmann</div>

        <div className="col-span-1">Straße:</div>
        <div class="col-span-1 ">Vegesacker Straße 87</div>

        <div className="col-span-1">Ort:</div>
        <div class="col-span-1 ">Bremen</div>
        <div className="col-span-1">Gemarkung:</div>
        <div class="col-span-1 ">Kein Plan</div>
        <div className="col-span-1">Flur:</div>
        <div class="col-span-1 ">-3</div>
        <div className="col-span-1">Flurstück:</div>
        <div class="col-span-1 ">-2</div>
        <div className="col-span-1">Ansprechungspartner:</div>
        <div class="col-span-1 ">Ich selber</div>
        <div className="col-span-1">Name:</div>
        <div class="col-span-1 ">Johannes</div>
        <div className="col-span-1">Telefon:</div>
        <div class="col-span-1 ">Irgendwas mit einer 5</div>
        <div className="col-span-1">Mobil:</div>
        <div class="col-span-1 ">ist das mit dem @</div>
        <div className="col-span-1">E-mail:</div>
        <div class="col-span-1 ">Brieftaube ist auf dem Dach</div>
      </div>
    </div>
  );
}
