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
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="multiple_files"
            >
              
            </label>
            <input
              class="block mr-4 ml-6 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
            />

            <button className="button-type-2 text-gray-300">Hochladen</button>
          </div>
        </div>
        <br />

        <div>
          <p className="text-2xl ml-6 text-gray-300">Enthaltene Dokumente:</p>
          <div className="flex justify-center overflow-auto"></div>
        </div>
        <br />
      </div>
    );
  }
}
