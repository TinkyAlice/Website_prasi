import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FountaineCustomer(props) {
  return (
    <div className="border-8 border-slate-800 rounded bg-slate-800 w-full m-6">
      <p className="text-2xl text-gray-300  ">Auftraggeber:</p>
      <div class="grid grid-cols-2 text-gray-300 mt-4">
        <div className="col-span-1">Name:</div>
        <div class="col-span-1 ">Armin Großmann</div>
        <div className="col-span-1">Straße:</div>
        <div class="col-span-1 ">Vegesacker Straße 87</div>
        <div className="col-span-1">Ort:</div>
        <div class="col-span-1 ">Bremen</div>
        <div className="col-span-1">Ansprechungspartner:</div>
        <div class="col-span-1 ">Johannes</div>
        <div className="col-span-1">Name:</div>
        <div class="col-span-1 ">Projekt Ehre</div>
        <div className="col-span-1">Telefon:</div>
        <div class="col-span-1 ">0648548406</div>
        <div className="col-span-1">Mobil:</div>
        <div class="col-span-1 ">0606060060606</div>
        <div className="col-span-1">E-Mail:</div>
        <div class="col-span-1 ">ehre@mail.com</div>
      </div>
    </div>
  );
}
