import React from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import Header from './Header';



export function SelectColumnFilter({ }) {

    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-700">: </span>
            <select
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                <option value="">All</option>
                <option>

                </option>

            </select>
        </label>
    )
}

export function StatusPill() {

    return (
        <span
        >
        </span>
    );
};

export function AvatarCell() {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900"></div>
                <div className="text-sm text-gray-500"></div>
            </div>
        </div>
    )
}

function Tabelle() {
    return (
        <>
            <header>
                <Header/>
            </header>
            <div className='ml-8 mr-8 m-8'>
                <div className="sm:flex sm:gap-x-2 m-8">
                    <label className="flex gap-x-2 items-baseline">
                        <span className="text-gray-700">Suche: </span>
                        <input
                            type="text"
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </label>
                </div>
                {/* table */}
                <div className="mt-4 flex flex-col">
                    <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr >
                                            <th
                                                scope="col"
                                                className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span>

                                                        <button className="w-4 h-4 text-gray-400" />
                                                        <button className="w-4 h-4 text-gray-400" />
                                                        <button className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                                    </span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y divide-gray-200"
                                    >
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pagination */}
                <div className="py-3 flex items-center justify-between">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button>Davor</button>
                        <button>Nächste</button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="flex gap-x-2 items-baseline">
                            <span className="text-sm text-gray-700">
                                Seite <span className="font-medium"></span> von <span className="font-medium"></span>
                            </span>
                            <label>
                                <span className="sr-only">Objekte pro Seite </span>
                                <select
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    <option >
                                        01
                                    </option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <nav className="relative z-0 rounded-md shadow-sm -space-x-px flex" aria-label="Pagination">
                                <button
                                    className="rounded-l-md"
                                >
                                    <span className="sr-only">First</span>
                                    <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </button>
                                <button
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </button>
                                <button
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </button>
                                <button
                                    className="rounded-r-md"
                                >
                                    <span className="sr-only">Last</span>
                                    <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabelle;