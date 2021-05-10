import React, {useEffect, useState} from 'react'
import { Box, Paper, Typography} from '@material-ui/core/';
import './App.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

let width = getWindowDimensions().width
let height = getWindowDimensions().height

const pathCoordinates = [
  { lat:37.958900,  lng:-91.779962 },
  { lat:37.958788, lng:-91.780284 },
  { lat:37.958725, lng:-91.782458 },
  { lat:37.956821, lng:-91.782872 },
  { lat:37.955573, lng:-91.781023 },
  { lat:37.955412, lng:-91.780594 },
  { lat:37.955260,  lng: -91.780111},
  { lat:37.955184,  lng: -91.779473},
  { lat:37.955167,  lng: -91.777112},
  { lat:37.953323,  lng: -91.777112},
  { lat:37.953331,  lng: -91.776581},
  { lat:37.953716,  lng: -91.775861},
  { lat:37.953724,  lng: -91.775369},
  { lat:37.954553,  lng: -91.775331},

];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  draggable: false
}

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 37.9585,
  lng: -91.77954,
};

function getZoom (width, height) {
  if(width<height){
    return Math.log((width/0.0038147)) / Math.log(2.0)
  }
  else
{
  return Math.log((height/0.0050147)) / Math.log(2.0)
}
};

var i = 0
var zoom = getZoom(width, height)
const useFetch = url => {
  
  const [data, setData] = useState(null);
  async function fetchData(){
    const response = await(fetch(url))
    const json = await response.json();
    setData(json);
    }
  

  useEffect(() => {
    fetchData()

    const interval=setInterval(() => {
      fetchData()
    }, 3000)

    return()=>clearInterval(interval)
  },[url]);

  return data
};


export default function App() {
  const {isLoaded, loadError} = useLoadScript({ googleMapsApiKey: "AIzaSyBNDR5mOl6MbebASdfhTR4eBqwv7fySJEA" })
  
  const data = useFetch('https://realtime-location-gateway-waz932k.uc.gateway.dev/shuttle/1')
  if (loadError) return "Error Loading maps";
  if (!isLoaded) return "Loading Maps";
  if(!data){
    return(<h1>Loading Data...</h1>)
    }
  else{
    return (<div>
      <Box
      bgcolor="grey.200"
      color="black"
      p={1}
      position="absolute"
      top={40}
      width="2000"
      left="5%"
      right="5%"
      zIndex={2000}
      >
        
        <Typography align='center' variant="h6" component="h2">
          Hours:
        </Typography>
        <Paper>
          <Typography align='center' variant="subtitle1" component="p">
            7:30am-10:00am
            - 2 shuttles
          </Typography>
          <Typography align='center' variant="subtitle1" component="p">
            10:00am -5:00pm
            - 1 shuttle
          </Typography>
        </Paper>
        
      </Box>

      <Box zIndex={1800}>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle}
        zoom={zoom-1}
        center={center}
        options = {options}
        >
          <Polyline
          path={pathCoordinates}
          geodesic={true}
          options={{
            strokeColor: "#1e81b0",
            strokeOpacity: 1,
            strokeWeight: Math.min(width, height)/200,
            icons: [{             
              offset: "0",
              repeat: "20px"
              }]
            }}
          />
          <Marker 

          position={{
            lat: data.latitude,
            lng: data.longitude,
          }} />
        </GoogleMap>
      </Box>
    </div>
    );
  }
}