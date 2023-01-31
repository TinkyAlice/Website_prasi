import React, { Component } from "react";


export default function UploadFiles()  {

        return (
            <div>
                <div>

                    <div className="mt-5 flex justify-center">
                        <label>
                            <input type="file"  />
                        </label>
                
                        <button className="button-type-2"

                        >
                            Upload
                        </button>
                    </div>
        
                    <div className="alert alert-light" role="alert">
                    </div>
                </div>

                <div>
                    <p className="text-2xl text-gray-500">Enthaltene Dokumente:</p>                
                    <div className="flex justify-center overflow-auto">
                        <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">

                        </ul>
                    </div>
                </div>
            </div>            
        );
    }
