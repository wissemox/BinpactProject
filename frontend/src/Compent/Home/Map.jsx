import React from 'react'
import { GoogleMap, LoadScript  } from '@react-google-maps/api';
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

const Map = () => {
    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }
      const style = {
        width: "680px",
        height: "350px",
        overflowX: "hidden",
        overflowY: "hidden"
       };
      
    return (
      <Box m={2}>
        <Box className="flex  flex  flex-center mt-10 mb-10	">
          <Box className=" wp-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d335995.64619267266!2d2.34706!3d48.85885900000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2stn!4v1623875360237!5m2!1sen!2stn" 
              allowfullscreen="" className="wp-100 h-350R" loading="lazy"></iframe>      
          </Box>   
          <Box  className="ml-4 b wp-100">
            <iframe className="wp-100 h-350R" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6790062.949006274!2d5.068608978026732!3d33.80042942484742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1624015425430!5m2!1sen!2stn" 
              allowfullscreen="" loading="lazy"></iframe>      
          </Box>        {/* <LoadScript
       googleMapsApiKey='AIzaSyC8HQDMM3bWCC7K07x2zAuzGnUq0CCBbVI'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript> */}
          </Box>
        </Box>
    )
}

export default Map
