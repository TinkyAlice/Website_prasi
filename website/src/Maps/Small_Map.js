import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import MarkersFromRedux from './MarkersFromRedux'
import "leaflet/dist/leaflet.css";


const startposition = [53.108473084806796, 8.848039280233772] //sourcetronic

export default function MapView() {

    useEffect(() => {
        console.log("Map")
    }, []);

    return (
        <div className="w-full h-96 overflow-hidden">
            <MapContainer className="w-full h-screen overflow-hidden z-0" center={startposition} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'                 
                />
                <MarkersFromRedux />
                <Circle center={startposition} radius={20} />
            </MapContainer>
        </div>
    )
}