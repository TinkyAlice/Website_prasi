import React, { Component } from "react";

/**
 * Tutorial für Dateiupload: https://www.bezkoder.com/react-hooks-file-upload/
 */

export default class UploadFiles extends Component {

    render() {

        return (
            <div className="border-8 border-slate-800 rounded bg-slate-800">
                <div>
                    <div className="mt-5 flex justify-center">
                        <label>
                            <input type="file" />
                        </label>

                        <button className="button-type-2 text-gray-300"
                        >
                            Hochladen
                        </button>
                    </div>
                </div>
                <br/>

                <div>
                    <p className="text-2xl text-gray-300">Enthaltene Dokumente:</p>
                    <div className="flex justify-center overflow-auto">
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}