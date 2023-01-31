import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux'

//import FountainOverview from '../components/FountainOverview';  - Probleme beim Laden
//import SystemOverview from '../components/SystemOverview'; - Probleme beim Laden
import ProjectPosition from './ProjectPosition'
import ProjectPicture from './ProjectPicture'

export default function ProjectDetails() {

    let params = useParams();
    let projects = useSelector(state => state.all_projects.projects)
    let project = getProject(params.id);

    const [actualProject, setProject] = useState("default");

    function getProject(project_id) {
        return projects.find(
            project => project.project_id === project_id
        );
    }

    useEffect(() => {   
        console.log("Projekt Details");
        console.log(params);
        console.log(params.id);
    })


    return (
        <div className="w-full bg-gray-100">
            <div className="flex">
            <p className="w-1/5 text-4xl text-left text-gray-500 pl-8 pt-8"> Projekt Details </p>

            <div className="pl-8 pt-8 w-full flex">
                    <div className="w-1/5">
                        <div className="bg-white p-1 flex border border-gray-300 rounded">
                            <select
                                type="text"
                                name="project"     
                                value={actualProject}                                   
                                className="p-1 px-2 h-8 outline-none w-full text-gray-800" 
                                onChange={e => setProject(e.target.value)}
                            >
                                {projects.map(project => <option key={project.project_id} value={project.project_id}>{project.project_name}</option> )}
                                <option value="default">Projekt wählen</option>
                            </select>   
                        </div>
                    </div>
                    <Link to={`/project/${actualProject}`} >
                        <button className="button-type-2">Go</button>
                    </Link>
                </div>
                </div>



            <div className="p-8">
                <div className="rounded border border-gray-300 h-screen bg-white">
                   
                  
                   
                   <div className="flex w-full h-full">
                       <div className="w-1/2">
                           <div className="h-1/2">
                               {/** oben links */}

                                <div className="">
                                    <p className="text-4xl text-gray-500 mt-6">Anlagenübersicht</p>
                                    <br />
                                    {/**
                                    <div className="grid grid-cols-2 gap-4 mx-10">
                                        <div>
                                            <p className="text-gray-500 mb-2">Auftraggeber:</p>
                                            <table>
                                                <tbody>
                                                    <tr><td className="text-right text-sm">Vorname:</td><td className="text-left text-sm">{project.contact_firstname}</td></tr>
                                                    <tr><td className="text-right text-sm">Nachname:</td><td className="text-left text-sm">{project.contact_lastname}</td></tr>
                                                    <tr><td className="text-right text-sm">Straße:</td><td className="text-left text-sm">{project.contact_street}</td></tr>
                                                    <tr><td className="text-right text-sm">Hausnummer:</td><td className="text-left text-sm">{project.contact_housenumber}</td></tr>
                                                    <tr><td className="text-right text-sm">PLZ:</td><td className="text-left text-sm">{project.contact_postalcode}</td></tr>
                                                    <tr><td className="text-right text-sm">Ort:</td><td className="text-left text-sm">{project.contact_place}</td></tr>
                                                    <tr><td className="text-right text-sm">Ansprechpartner:</td><td className="text-left text-sm">{project.contact_firstname} {project.contact_lastname}</td></tr>
                                                    <tr><td className="text-right text-sm">Telefon:</td><td className="text-left text-sm">-</td></tr>
                                                    <tr><td className="text-right text-sm">Mobil:</td><td className="text-left text-sm">{project.contact_mobile}</td></tr>
                                                    <tr><td className="text-right text-sm">E-Mail:</td><td className="text-left text-sm truncate">{project.contact_email}</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 mb-2">Projekt:</p>
                                            <table>
                                                <tbody>
                                                    <tr><td className="text-right text-sm">Nummer:</td><td className="text-left text-sm truncate">{project.project_id}</td></tr>
                                                    <tr><td className="text-right text-sm">Name:</td><td className="text-left text-sm">{project.project_name}</td></tr>
                                                    <tr><td className="text-right text-sm">Projektart:</td><td className="text-left text-sm">{project.project_type}</td></tr>
                                                    <tr><td className="text-right text-sm">Straße:</td><td className="text-left text-sm">{project.project_street}</td></tr>
                                                    <tr><td className="text-right text-sm">Hausnummer:</td><td className="text-left text-sm">{project.project_housenumber}</td></tr>
                                                    <tr><td className="text-right text-sm">PLZ:</td><td className="text-left text-sm">{project.project_postal_code}</td></tr>
                                                    <tr><td className="text-right text-sm">Ort:</td><td className="text-left text-sm">{project.project_place}</td></tr>
                                                    <tr><td className="text-right text-sm">Ansprechpartner:</td><td className="text-left text-sm">{project.contact_firstname} {project.contact_lastname}</td></tr>
                                                    <tr><td className="text-right text-sm">Mobil:</td><td className="text-left text-sm">{project.contact_mobile}</td></tr>
                                                    <tr><td className="text-right text-sm">E-Mail:</td><td className="text-left text-sm truncate">{project.contact_email}</td></tr>
                                                </tbody>
                                            </table>
                                        </div>        
                                    </div>
                                     */}


<div className="grid grid-cols-2 gap-4 mx-10">
                                        <div>
                                            <p className="text-gray-500 mb-2">Auftraggeber:</p>
                                            <table>
                                                <tbody>
                                                    <tr><td className="text-right text-sm">Vorname:</td><td className="text-left text-sm">Max</td></tr>
                                                    <tr><td className="text-right text-sm">Nachname:</td><td className="text-left text-sm">Mustermann</td></tr>
                                                    <tr><td className="text-right text-sm">Straße:</td><td className="text-left text-sm">Musterstraße</td></tr>
                                                    <tr><td className="text-right text-sm">Hausnummer:</td><td className="text-left text-sm">1</td></tr>
                                                    <tr><td className="text-right text-sm">PLZ:</td><td className="text-left text-sm">12345</td></tr>
                                                    <tr><td className="text-right text-sm">Ort:</td><td className="text-left text-sm">Musterstadt</td></tr>
                                                    <tr><td className="text-right text-sm">Ansprechpartner:</td><td className="text-left text-sm">Max Mustermann</td></tr>
                                                    <tr><td className="text-right text-sm">Telefon:</td><td className="text-left text-sm">052116391643</td></tr>
                                                    <tr><td className="text-right text-sm">Mobil:</td><td className="text-left text-sm">01631737743</td></tr>
                                                    <tr><td className="text-right text-sm">E-Mail:</td><td className="text-left text-sm truncate">max.mustermann@email.de</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 mb-2">Projekt:</p>
                                            <table>
                                                <tbody>
                                                    <tr><td className="text-right text-sm">Nummer:</td><td className="text-left text-sm truncate">247593</td></tr>
                                                    <tr><td className="text-right text-sm">Name:</td><td className="text-left text-sm">Beispielprojekt</td></tr>
                                                    <tr><td className="text-right text-sm">Projektart:</td><td className="text-left text-sm">Geothermie</td></tr>
                                                    <tr><td className="text-right text-sm">Straße:</td><td className="text-left text-sm">Musterstraße</td></tr>
                                                    <tr><td className="text-right text-sm">Hausnummer:</td><td className="text-left text-sm">1</td></tr>
                                                    <tr><td className="text-right text-sm">PLZ:</td><td className="text-left text-sm">12345</td></tr>
                                                    <tr><td className="text-right text-sm">Ort:</td><td className="text-left text-sm">Musterstadt</td></tr>
                                                    <tr><td className="text-right text-sm">Ansprechpartner:</td><td className="text-left text-sm">Max Mustermann</td></tr>
                                                    <tr><td className="text-right text-sm">Mobil:</td><td className="text-left text-sm">01631737743</td></tr>
                                                    <tr><td className="text-right text-sm">E-Mail:</td><td className="text-left text-sm truncate">max.mustermann@email.de</td></tr>
                                                </tbody>
                                            </table>
                                        </div>        
                                    </div>

                                </div>

                        
                           </div>
                           <div className="h-1/2">
                               {/** unten links */}
                               <div className="w-full px-8">
                                    <ProjectPicture id={project.project_id} />
                                    <p className="">Bildquelle: image.essen-und-trinken.de - hochgeladen am: k.A.</p>
                               </div>
                           </div>
                       </div>
                       <div className="w-1/2">
                           <div className="h-1/2 pb-8 pt-8 pr-8">
                               {/** oben rechts */}
                           {/**<ProjectPosition id={project.project_id} latitude={project.project_location_lat} longitude={project.project_location_long} />*/}
                           <ProjectPosition id={project.project_id} latitude={"53.29571098577509"} longitude={"8.937873001303064"} />
                           </div>
                           <div className="h-1/2 w-full pb-8 pr-8">
                                {/** unten rechts */}
                                <div className="h-full pt-8 overflow-auto">

                               
                                <div className="flex justify-center items-center">
                                    <div>
                                        <p className="text-2xl text-gray-500 ...">Brunnendaten:</p>
                                    </div>
                                    <div>
                                        <Link to={`/brunnenakte/${project.project_id}`}>
                                            <button className="ml-8 button-type-2">Brunnenakte</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className="ml-16 button-type-2">Brunnensteuerung</button>
                                    </div>
                                </div>
                                <table className="mt-3 table-fixed">
                                    <tbody>
                                        <tr>
                                            <td className="text-right w-3/4 ...">Tiefe Förderbrunnen:</td>
                                            <td className="w-1/4 ...">#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Tiefe Sickerbrunnen:</td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Oberkante Filter:</td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Einbautiefe Pumpe:</td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittlicher Wasserstand Förderbrunnen:</td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittlicher Wasserstand Sickerbrunnen:</td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittliche Absenkung Förderbrunnen:
                                                <br />
                                                <p className="text-xs">(01.01.JAHR bis aktuell / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittliche Absenkung Förderbrunnen:
                                                <br />
                                                <p className="text-xs">(Vorjahr / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittliche Aufstockung Sickerbrunnen:
                                                <br />
                                                <p className="text-xs">(01.01.JAHR bis aktuell / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittliche Aufstockung Sickerbrunnen:
                                                <br />
                                                <p className="text-xs">(Vorjahr / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittliche Förderrate (m³/h):
                                                <br />
                                                <p className="text-xs">(01.01.JAHR bis aktuell / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Durchschnittliche Förderrate (m³/h):
                                                <br />
                                                <p className="text-xs">(Vorjahr / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Gesamtfördermenge (m³):</td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Fördermenge (m³):
                                                <br />
                                                <p className="text-xs">(01.01.JAHR bis aktuell / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">Fördermenge (m³):
                                                <br />
                                                <p className="text-xs">(Vorjahr / Zeitraum xy)</p>
                                            </td>
                                            <td>#Variable</td>
                                        </tr>
                                    </tbody>
                                </table>
                                 

                           
                           </div>
                       </div>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    )
}