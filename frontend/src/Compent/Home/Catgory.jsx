import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import CatgoryMap from './Map/CatgoryMap'
import Aos from 'aos'
import "aos/dist/aos.css"
const Catgory = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
 
    const[Product , setProduct]=useState([{
    NameProuct:"Pour vous",
    Img:"kisspng-airpods-apple-headphones-iphone-sales-apple-airpods-bluetooth-telenor-nettbutikk-5bab7f85433541.5705478915379659572753.png"
    } , 
    {
    NameProuct:"pour votre maison",
    Img:"pcApp.png"
    }, 
    {
    NameProuct:"pour votre bureu",
    Img:"kisspng-airpods-apple-headphones-iphone-sales-apple-airpods-bluetooth-telenor-nettbutikk-5bab7f85433541.5705478915379659572753.png"
    },
    {
    NameProuct:"pour vos enfants",
    Img:"Casque.png"
    }
])
    return (
        <Box>
            {/* Text */}
            <Container>
                <Box data-aos="fade-up-right" className=" flex flex-center ">
                    <Box className="mt-50R"  style={{marginBottom:"60px" }} >
                    <Typography className="colorBlue text-3xl font-medium" variant="p">Nos catégories</Typography>
                    </Box>
                </Box>
            </Container>
        
                <Box data-aos="fade-up-right" className="displayflex Resposive ml-8  ">
                       {Product.map((el)=>
                       <CatgoryMap el={el}/>)}
                </Box>
                        
        </Box>
    )
}

export default Catgory
