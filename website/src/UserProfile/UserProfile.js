import React from "react";

import UserProfileFormular from './UserProfileFormular'
import ProfileCard from "./ProfileCard";

export default function UserProfile() {

    return (
        <div>
        
        <div className="h-full w-full bg-gray-100">
            <p className="text-4xl text-left text-gray-500 pl-8 pt-8">Profile</p>

            
            <div className="flex gap-8 pl-8 pr-8 pt-8">
                <div className="w-2/3 h-screen pb-8">
                    <div className="h-1/2 rounded border border-gray-300 bg-white">
                        <UserProfileFormular />
                    </div>
                </div>
                <div className="flex gap-8 pl-8 pr-8 pt-8">
                    <div className="h-1/2 ">
                        <ProfileCard />
                    </div>
                </div>
            </div>


        </div>
        </div>

    )
}