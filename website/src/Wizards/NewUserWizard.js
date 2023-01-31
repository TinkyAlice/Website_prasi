import React from "react";

import { useSelector } from 'react-redux'

import NewUserForm1 from "./forms/user_forms/NewUserForm1";
import NewUserForm2 from "./forms/user_forms/NewUserForm2";
import NewUserStep1 from "./forms/user_forms/NewUserStep1";
import NewUserStep2 from "./forms/user_forms/NewUserStep2";


const getStepContent = (stepindex) => {

            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                            <NewUserStep1 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                            <NewUserForm1 />
                        </div>
                    </div>
                </div>
            );
            {/**
        case 1:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                        <NewUserStep2 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                        <NewUserForm2 />
                        </div>
                    </div>
                </div>
            ); 
        default:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                        <NewUserStep1 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                        <NewUserForm1 />
                        </div>
                    </div>
                </div>
            );
             */}
    }



export default function NewUserWizard() {

    const activeStep = useSelector(state => state.main.newUserActiveStep)

    return (
        <div className="h-full w-full bg-gray-100">
            <p className="text-4xl text-left text-gray-500 pl-8 pt-8"> New User Wizard </p>
            <div className="px-8 pb-8">
                <div  className="h-screen w-full">
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}