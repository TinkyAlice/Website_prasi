import React from "react";

import UserImage from "../Bilder/active-user.jpg"
import WaterImage from "../Bilder/wasser.jpg"

export default function ProfileCard() {

    return (
        <div>
            {/*<p className="text-2xl text-left mt-2 ml-2"> Profile Card</p>*/}
            <div>
                <div className="z-0"><img className="w-full h-40" src={WaterImage} alt="wasser" /></div>

                <div className="z-10">
                    <div className="flex items-center justify-center">
                        <img className="rounded-full h-36 w-36 object-cover" src={UserImage} alt="user" />
                    </div>
                </div>

                <p>Benutzername</p>
            </div>
        </div> 
    )
}