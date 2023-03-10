import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { ICoords,MapProps } from '../../utils';
import './map.css'

const Map = ({cities, currentCityIndex, scoreHandler}:MapProps) => {
  const apiKey:string = process.env.REACT_APP_API_KEY!
  const [center, setCenter] = useState({
    lat: 47.751569,
    lng: 1.675063
  })
  const [answerPosition, setAnswerPosition] = useState<ICoords | null>(null)
  const [realPosition, setRealPosition] = useState<ICoords| null>(null)

  const answerPositioner = (ev:google.maps.MapMouseEvent) => {
    const lat = ev.latLng?.lat()!
    const lng = ev.latLng?.lng()!
    setAnswerPosition({
      lat,lng
    })
    setCenter({
      lat:ev.latLng?.lat()!,
      lng:ev.latLng?.lng()!
    })
    setRealPosition({
      lat:cities[currentCityIndex].position.lat,
      lng:cities[currentCityIndex].position.lng
    })
  }
  useEffect(()=>{
    if (answerPosition !== null && realPosition !==null){
      scoreHandler(answerPosition,realPosition)
    }
  },[answerPosition, realPosition])

  const polylineOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1
  };

  return (
    <section className='map-Section'>
      <LoadScript
      googleMapsApiKey={apiKey}
      >
      <GoogleMap
        mapContainerStyle={{
          width: '70%',
          height: '60vh'
        }}
        center={center}
        zoom={4}
        options={{ mapId: "368ca3275817e3d8" ,streetViewControl: false, mapTypeControl: false}}
        onClick={answerPositioner}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {(answerPosition !== null && realPosition !==null)?
          <>
            <Marker
            // onLoad={onLoad}
            position={answerPosition}
            icon={{
              url: ("http://maps.google.com/mapfiles/ms/icons/pink-dot.png")
          }}
          />
          <Marker
            // onLoad={onLoad}
            position={realPosition}
          />
          <Polyline
            // onLoad={onLoad}
            path={[
              {lat: answerPosition.lat, lng: answerPosition.lng},
              {lat: realPosition.lat, lng: realPosition.lng}
            ]}
            options={polylineOptions}
          />
          </> 
          : false
        }
      </GoogleMap>
      </LoadScript>
    </section>

  )
}

export default Map