import React from 'react'

import { useParams } from "react-router-dom";


export default function ProjectPicture(id) {

    //et params = useParams();
    //let project = getProject(parseInt(params.projectId, 10));

    return (
        <div className="w-full h-full flex justify-center items-center">
            <img
                src={"https://image.essen-und-trinken.de/11910456/t/O5/v9/w1440/r1.7778/-/wasserglaeser2-jpg--48704-.jpg"}
                alt={"https://image.essen-und-trinken.de/11910456/t/O5/v9/w1440/r1.7778/-/wasserglaeser2-jpg--48704-.jpg"}
                className="h-5/6 rounded"
            />
        </div>
    )
}
