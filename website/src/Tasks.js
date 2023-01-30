import React from "react";

import { 
    TrashIcon,
    HomeIcon,
    PlusIcon   
} from '@heroicons/react/outline'

import { PencilAltIcon } from '@heroicons/react/solid'


/**
 * Die Aufgaben können alle in die Liste gemappt werden.
 * Erst einmal statisch um das Dashboard fertig zu bekommen.
 */

const tasks = [
    {
        id: 1,
        text: "Aufgabe 1"
    },
    {
        id: 2,
        text: "Aufgabe 2"
    },
    {   
        id: 3,
        text: "Aufgabe 3"
    },
    {
        id: 4,
        text: "Aufgabe 4"
    },
    {
        id: 5,
        text: "Aufgabe 5"
    }
]

export default function Tasks() {

    return (
        <div className="w-full">
            <p className="text-2xl text-left pl-2">Aufgaben</p>
            <p className="text-left text-gray-400 pl-2 pb-2">Checkliste</p>
            <div className="px-3">
                <table className="table-fixed">
                    <tbody>
                        {tasks.map(task => {
                            return (
                                <tr key={task.id}>
                                <td className="border border-solid border-l-0 border-r-0 border-b-0 bg-white w-1/12">
                                    <input type="checkbox" />
                                </td>
                                <td className="border border-solid border-l-0 border-r-0 border-b-0 bg-white text-left">
                                    {task.text}
                                </td>
                                <td className="border border-solid border-l-0 border-r-0 border-b-0 bg-white w-2/12">
                                    <div className="flex">
                                        <PencilAltIcon className="h-5 w-5 text-blue-500" />
                                        <div className="pl-1"></div> {/* Ohne diesen Seperator werden die Icons kleiner wenn man Distanz schaffen möchte */}
                                        <TrashIcon className="h-5 w-5 text-red-500" />
                                    </div>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="p-8 flex">

                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input 
                        type="text"
                        name="firstname"
                        placeholder="Create new task"
                        className="p-1 px-2 h-8 appearance-none outline-none w-full text-gray-800" 
                    /> 
                </div>
                <div className="flex items-center pl-2">
                    <button>
                        <PlusIcon className="pl-2 h-6 w-6"/>
                    </button>
                </div>
            </div>
        </div>
    );
}