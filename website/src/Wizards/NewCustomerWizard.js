import React from "react";

import { useSelector } from 'react-redux'

import NewCustomerForm1 from "./forms/customer_forms/NewCustomerForm1";
import NewCustomerForm2 from "./forms/customer_forms/NewCustomerForm2";
import NewCustomerStep1 from "./forms/customer_forms/NewCustomerStep1";
import NewCustomerStep2 from "./forms/customer_forms/NewCustomerStep2";


const getStepContent = (stepindex) => {
    switch (stepindex) {
        case 0:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                            <NewCustomerStep1 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                            <NewCustomerForm1 />
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
                        <NewCustomerStep2 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                        <NewCustomerForm2 />
                        </div>
                    </div>
                </div>
            ); 
        default:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                        <NewCustomerStep1 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                        <NewCustomerForm1 />
                        </div>
                    </div>
                </div>
            );
             */}
    }
}


export default function NewUserWizard() {

    const activeStep = useSelector(state => state.main.newUserActiveStep)

    return (
        <div className="h-full w-full bg-gray-100">
            <p className="text-4xl text-left text-gray-500 pl-8 pt-8"> New Customer Wizard </p>
            <div className="px-8 pb-8">
                <div  className="h-screen w-full">
                    <div>
                        {getStepContent(activeStep)}
                    </div>
                </div>
            </div>
        </div>

    )
}