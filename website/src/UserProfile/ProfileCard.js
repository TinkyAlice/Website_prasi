import React from "react";

import UserImage from "../Bilder/active-user.jpg"

export default function ProfileCard() {

    return (
        <section class="w-64 mx-auto bg-slate-800 rounded-2xl px-8 py-6 shadow-lg">
            <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">Sourcetronic GmbH</span>
                <span class="text-emerald-400">

                </span>
            </div>
            <div class="mt-6 w-fit mx-auto">
                <img src={UserImage} class="rounded-full w-28 " alt="profile picture" />
            </div>
            <div class="mt-8 ">
                <h2 class="text-white font-bold text-2xl tracking-wide">Jens <br /> Smith</h2>
            </div>
            <p class="text-gray-400 font-semibold mt-2.5" >
                Pumpenbesitzer
            </p>
            <div class="h-1 w-full bg-black mt-8 rounded-full">
                <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
            </div>
            <div class="mt-3 text-white text-sm">
                <span class="text-gray-400 font-semibold">Gespeicherte Pumpen:</span>
                <span> 2 / 5</span>
            </div>
        </section>
    )
}