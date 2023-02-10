import React, {useEffect, useState} from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import "leaflet/dist/leaflet.css";

import L from 'leaflet';


var size = 0;

export default function MarkersFromRedux() {

    //let projects = useSelector(state => state.mass_storage.projects)

    let projects = [
        {
            project_id:"1132",
            project_location_lat: "53.08119579355737",
            project_location_long: "8.789838863726198",
            project_name:"Beispiel Projekt 1",
            project_type:"Geothermie"
        },
        {
            project_id:"2654",
            project_location_lat: "53.14708720107834",
            project_location_long: "8.222793248595849",
            project_name:"Beispiel Projekt 2",
            project_type:"Geothermie"
        },
        {
            project_id:"3897",
            project_location_lat: "53.110039954409054",
            project_location_long: "9.397153039685167",
            project_name:"Beispiel Projekt 3",
            project_type:"Geothermie"
        },
        {
            project_id:"456662",
            project_location_lat: "53.27634094807885",
            project_location_long: "9.712494969844672",
            project_name:"Beispiel Projekt 4",
            project_type:"Geothermie"
        },
        {
            project_id:"56897",
            project_location_lat: "53.56828969627614",
            project_location_long: "9.0773478830111",
            project_name:"Beispiel Projekt 5",
            project_type:"Geothermie"
        },
        {
            project_id:"66897",
            project_location_lat: "53.54871200392712",
            project_location_long: "8.57472337753848",
            project_name:"Beispiel Projekt 6",
            project_type:"Geothermie"
        },
        {
            project_id:"76897",
            project_location_lat: "53.35735437289905",
            project_location_long: "8.871354233227239",
            project_name:"Beispiel Projekt 7",
            project_type:"Geothermie"
        },
    ]



    const [activeProject, setActiveProject] = useState (null)


    useEffect(() => {
      console.log("MarkersFromRedux");
      console.log(projects);
      /**
      projects.map(project => {
        console.log("Lat", parseFloat(project.project_location_lat));
        console.log("Long", parseFloat(project.project_location_long))
    })
        */
    }, []);


    return (
        <div>
            {projects.map(project => {
                return(
                <Marker
                    key={project.project_id}
                    position={[
                        parseFloat(project.project_location_lat),
                        parseFloat(project.project_location_long)
                    ]}
                    icon={L.divIcon({
                        iconSize: [size, size],
                        iconAnchor: [size / 2, size + 9],
                        className: "mymarker",
                        html: "📍",
                      })}
                    eventHandlers={{
                        click: () => {
                            setActiveProject(project);
                            console.log("marker clicked")
                        },
                    }}
                />
            )})}
            {activeProject && (
                <Popup
                    position={[
                        activeProject.project_location_lat,
                        activeProject.project_location_long
                    ]}
                    offset={[0, -20]}
                    onClose={() => {
                        setActiveProject(null);
                        console.log("popup closed")
                    }}
                    minWidth="352" 
                    minHeight="288"
                >
                    <div className="">ID: {activeProject.project_id}</div>
                    <div className="mt-1 text-xl">{activeProject.project_name}</div>
                    <div className="mt-2 text-base">{activeProject.project_type}</div>
                    <Link className="flex justify-end" to={`/project/${activeProject.project_id}`}>Show Details</Link>
                </Popup>
                )}   
        </div>
    )
}
