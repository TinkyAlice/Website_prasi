import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMapEvent, useMap } from 'react-leaflet'


export default function ProjectPosition(props) {

    const [zoom, setZoom] = useState(16)


    function GiveInfo() {
      const map = useMap()
      console.log('map center:', map.getCenter())
      const actualZoom = map.getZoom()
      console.log("actualZoom", actualZoom)
      setZoom(map.getZoom())
      return null
    }

    function ChangeZoom() {
      const map = useMap()
      useCallback(
          () => {
              var newZoom = map.getZoom();
              if (newZoom !== zoom){
                  console.log("newZoom",newZoom)
              }
          }
      )
      console.log("Zoom", zoom)
      return null
    }


    function MapCreator() {
        return(
            <MapContainer center={[props.latitude, props.longitude]} zoom={zoom} scrollWheelZoom={false} animate={true}> 
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[props.latitude, props.longitude]} />

            <GiveInfo />
            <ChangeZoom />
            </MapContainer>  
        )
    }


    return (
        <MapCreator />
    )
     
}


