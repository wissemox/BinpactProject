import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ProductinProgres01 from './map/ProductinProgres'
const ProductinProgres = () => {
    const [Product , setProduct]=useState([
        {Name:"Casque" , image:"Casque.jpg"} , 
        {Name:"Casque" , image:"Casque.jpg"}, 
        {Name:"Casque" , image:"Casque.jpg"}, 
        {Name:"Casque" , image:"Casque.jpg"},
        {Name:"Casque" , image:"Casque.jpg"}
    ])
    return (
        <Container >
            <Box  className=" ">
            {/* Text */}
                <Box style={{marginLeft:"17%" , marginRight:"17%"}}  className="flex flex-center bg-white wp-30 mt-10 mb-10 h-150 ">
                    <Box>
                        <AccessAlarmIcon  className="mt-40 " style={{fontSize:"60px" , color:"#C12026"}}/>
                    </Box>      
                    <Typography className="font-bold f-18  pt-14 pl-10" variant="p">Product in Progress</Typography>
                
             
                
                </Box>
                <Box  className="flex widht800     flex-center  	  flex-wrap	 ">
                        {Product.map((el)=><ProductinProgres01 el={el}/>)}
                </Box>
            </Box>
        </Container>
    )
}

export default ProductinProgres
