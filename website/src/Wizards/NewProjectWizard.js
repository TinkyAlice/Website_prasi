import React from "react";

import { useSelector } from 'react-redux'

import NewProjectForm1 from './forms/project_forms/NewProjectForm1'
import NewProjectForm2 from './forms/project_forms/NewProjectForm2'
import NewProjectForm3 from './forms/project_forms/NewProjectForm3'
import NewProjectForm4 from './forms/project_forms/NewProjectForm4'

import NewProjectStep1 from './forms/project_forms/NewProjectStep1'
import NewProjectStep2 from './forms/project_forms/NewProjectStep2'
import NewProjectStep3 from './forms/project_forms/NewProjectStep3'
import NewProjectStep4 from './forms/project_forms/NewProjectStep4'


const getStepContent = (stepindex) => {
    switch (stepindex) {
        case 0:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                            <NewProjectStep1 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                            <NewProjectForm1 />
                        </div>
                    </div>
                </div>
            );
        case 1:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                            <NewProjectStep2 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                            <NewProjectForm2 />
                        </div>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                            <NewProjectStep3 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                            <NewProjectForm3 />
                        </div>
                    </div>
                </div>
            );         
        case 3:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                            <NewProjectStep4 />
                        </div>
                    </div>
                    <div className="pt-8 pb-8">
                        <div className="rounded border border-gray-300 bg-white">
                            <NewProjectForm4 />
                        </div>
                    </div>
                </div>
            );   
        default:
            return (
                <div className="pt-8">
                    <div className="rounded border border-gray-300 bg-white">
                        <div className="pb-8 px-4">
                            <NewProjectStep1 />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="rounded border border-gray-300 bg-white">
                            <NewProjectForm1 />
                        </div>
                    </div>
                </div>
            );
    }
}


export default function NewProjectWizard() {

    const activeStep = useSelector(state => state.main.activeStep)

    return (
        <div className="bg-gray-100">
            <p className="text-4xl text-left text-gray-500 pl-8 pt-8"> New Project Wizard </p>
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