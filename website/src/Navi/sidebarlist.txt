import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
    UserCircleIcon,
    ClipboardListIcon,
    NewspaperIcon,
    TableIcon,
    TemplateIcon,
    TrendingUpIcon,
    BellIcon,
    LocationMarkerIcon,
    BookOpenIcon
} from '@heroicons/react/outline'

export default function SideBarList() {

    var user;

    if (localStorage.getItem("user")) {
        console.log(localStorage.getItem("user"));
        user = JSON.parse(localStorage.getItem("user"));
        console.log(user.roles);
        console.log("E-Mail bestätigt? " + user.activated);
    } else {
        console.log("Kein User im Cache");
    }


    return (
        <div className="w-60 pt-20 absolute sm:relative bg-gray-800 shadow md:h-screen flex-col justify-between hidden sm:flex">
            <nav className="flex flex-col space-y-1">

                <ul>

                    <li className="flex w-full pl-4 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/dashboard">
                            <div className="flex items-center">
                                <TemplateIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">Dashboard</span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex w-full pl-4 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/user-profile">
                            <div className="flex items-center">
                                <UserCircleIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">User Profile</span>
                            </div>
                        </Link>
                    </li>
                    <details className="group">
                        <summary className="flex items-center px-4 pb-2 text-gray-300 rounded-lg cursor-pointer hover:text-gray-500">
                            <ClipboardListIcon className="h-8 w-8" />
                            <span className="ml-3 text-xl font-medium"> Forms </span>
                            <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>
                        <nav className="flex flex-col ml-12 justify-between text-gray-300 hover:text-gray-500 cursor-pointer">
                            <ul>
                                <li>
                                    <Link to="/new-user">
                                        <div className="flex items-center ">
                                            <span className="text-lg text-gray-300 hover:text-gray-500">New User</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/new-customer">
                                        <div className="flex items-center ">
                                            <span className="text-lg text-gray-300 hover:text-gray-500">New Customer</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/new-project">
                                        <div className="flex items-center">
                                            <span className="text-lg text-gray-300 hover:text-gray-500">New Project</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </details>

                    <details className="group">
                        <summary className="flex items-center px-4 py-4 text-gray-300 rounded-lg cursor-pointer hover:text-gray-500">
                            <TableIcon className="h-8 w-8" />
                            <span className="ml-3 text-xl font-medium"> Tables </span>
                            <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>
                        <nav className="flex flex-col ml-12 justify-between text-gray-300 hover:text-gray-500 cursor-pointer">
                            <ul>

                                <div>
                                    <li>
                                        <Link to="/user-table">
                                            <div className="flex items-center ">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">Table of Users</span>
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                                <li>
                                    <Link to="/customer-table">
                                        <div className="flex items-center">
                                            <span className="text-lg text-gray-300 hover:text-gray-500">Table of Customers</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/project-table">
                                        <div className="flex items-center">
                                            <span className="text-lg text-gray-300 hover:text-gray-500">Table of Projects</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </details>

                    <li className="flex w-full pl-4 pt-2 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/projects/">
                            <div className="flex items-center">
                                <NewspaperIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">Projekte</span>
                            </div>
                        </Link>
                    </li>




                    <li className="flex w-full pl-4 pt-2 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/brunnenakte/">
                            <div className="flex items-center">
                                <NewspaperIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">Brunnenakte</span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex w-full pl-4 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/worldmap">
                            <div className="flex items-center">
                                <LocationMarkerIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">Map</span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex w-full pl-4 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/charts">
                            <div className="flex items-center">
                                <TrendingUpIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">Charts</span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex w-full pl-4 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/map">
                            <div className="flex items-center">
                                <BellIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">Notifications</span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex w-full pl-4 justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" >
                        <Link to="/api-doku">
                            <div className="flex items-center">
                                <BookOpenIcon className="h-8 w-8" />
                                <span className="text-xl  ml-2">API Dokumentation</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

