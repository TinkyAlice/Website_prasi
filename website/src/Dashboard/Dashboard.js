import React from 'react'
import DemoMultiLineChart from './DingImDashboard/DemoMultiLineChart'
import Tasks from './DingImDashboard/Tasks'
import DemoBarChart from './DingImDashboard/DemoBarChart'
import DemoBarChart2 from './DingImDashboard/DemoBarChart2'
import VerctormapDE from './DingImDashboard/VectormapDE'


const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-100 h-full w-full">

                <div className="w-full px-8 pt-8" >
                    

                        <div className="w-full bg-gray-100 grid grid-cols-4 gap-8">
                            <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                                <div className="text-gray-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fountain" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16v-5a2 2 0 1 0 -4 0" />
                                        <path d="M15 16v-5a2 2 0 1 1 4 0" />
                                        <path d="M12 16v-10a3 3 0 0 1 6 0" />
                                        <path d="M6 6a3 3 0 0 1 6 0" />
                                        <path d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2z" />
                                    </svg>
                                </div>
                                <div className="pl-3 pr-10 mt-1">
                                    <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Aktive Brunnen</h3>
                                    <div className="flex items-end mt-4">
                                        <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">130</h2>
                                        <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 130</p>
                                    </div>
                                </div>

                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                                <div className="text-gray-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </div>
                                <div className="pl-3 pr-10 mt-1">
                                    <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Fehler insgesamt</h3>
                                    <div className="flex items-end mt-4">
                                        <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">3</h2>
                                        <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 3</p>
                                    </div>
                                </div>
                            </div>
                           

                            <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                                <div className="text-gray-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                                    </svg>
                                </div>
                                <div className="pl-3 pr-10 mt-1">
                                    <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Aktuelle Fehler</h3>
                                    <div className="flex items-end mt-4">
                                        <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">2</h2>
                                        <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-wrench" viewBox="0 0 16 16">
                                    <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
                                </svg>
                                <div className="pl-3 pr-10 mt-1">
                                    <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Notfalldienst</h3>
                                    <div className="flex items-end mt-4">
                                        <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">0</h2>
                                        <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="w-full pl-8 pt-8">
                    <div className="flex gap-8 pr-8">
                        <div className="bg-white w-2/3">
                            <div className="mx-5 my-5">

                                <DemoMultiLineChart />

                            </div>
                        </div>
                        <div className="bg-white w-1/3">
                            <div className="">
                                <Tasks />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full pl-8 pt-8">
                    <div className="flex gap-8 pr-8">
                        <div className="bg-white w-1/2">
                            <div className="mx-5 my-5">
                                <DemoBarChart />
                            </div>
                        </div>
                        <div className="bg-white w-1/2">
                            <div className="mx-5 my-5">
                                <DemoBarChart2 />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full pl-10 pb-5 pt-8 pr-8 gap-8">
                    <div className="bg-white w-full">
                        <div className="mx-5 my-5">
                            <VerctormapDE/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard