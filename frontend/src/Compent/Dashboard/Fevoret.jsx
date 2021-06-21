import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import Product01 from './map/Proudct'

const Fevoret = () => {
    const [Product , setProduct]=useState([
        {Name:"Casque" , image:"Casque.jpg"} , 
        {Name:"Casque" , image:"Casque.jpg"}, 
        {Name:"Casque" , image:"Casque.jpg"}, 
        {Name:"Casque" , image:"Casque.jpg"},
        {Name:"Casque" , image:"Casque.jpg"}
    ])
    return (
        <Container>
            
            <Box className="marginLeaftResposived ProductFevoiret flex-center py-4 mt-50 mb-40">
                <Box className="WidhtResposinvePrestage MarginLeftRepsoiveProductFevoire bg-red bg-white mr-4 py-2 " >
                <Box className="px-10 font-bold	 ">
                <Typography variant="p">Country Status</Typography>
                <Box className="pt-2 pb-3">
                    <Typography className="f-14   text-gray-400	" variant="p">Country Name</Typography>
                </Box>
                </Box>
                <Box style={{backgroundColor:"#F0F0F0"}} className="py-0 px-10 ">
                    <Box className="f-14 font-bold pb-2">
                    <Typography variant="p">Tody</Typography>
                    </Box> 
                  
                </Box>
                <Box className="px-10 py-4">
                    <Box className="pb-4 ">
                        <Typography variant="p">California</Typography>
                    </Box>
                    <Box className="pb-4 ">
                        <Typography variant="p">California</Typography>
                    </Box>
                    <Box className="pb-4 ">
                        <Typography variant="p">California</Typography>
                    </Box>
                    <Box className="pb-4 ">
                        <Typography variant="p">California</Typography>
                    </Box>
                    <Box className="pb-4 ">
                        <Typography variant="p">California</Typography>
                    </Box>
                </Box>
                </Box>
                {/* Product Map here Buotique */}
                <Box className="wp-70 MarginLeftRepsoiveProductFevoire  bg-white flex flex-wrap" >
                {Product.map((el)=>            <img className="rounded-xl MarginLeftRepsoiveFevoireProduct mt-10 mb-10	w-200 h-150"  src={process.env.PUBLIC_URL +`/uploads/${el.image}` }/>)}
                </Box>
            </Box>
          
        </Container>
    )
}

export default Fevoret
