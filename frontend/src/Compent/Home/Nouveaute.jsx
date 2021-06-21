import React,{useEffect} from 'react'
import Carousel from 'react-elastic-carousel'
import CarouselMap from './Map/CarouselMap.jsx'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'
import Aos from 'aos'
import "aos/dist/aos.css"
const Nouveaute = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 608, itemsToShow: 3 },
        { width: 700, itemsToShow: 4 },
        { width: 800, itemsToShow: 5 },
      ];
      const Array=[{
        Image:"dzadzzd"
      },{
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },]
    return (
        <Box className="m-100">
            <Box style={{marginTop:"100px" , marginBottom:"100px"}} data-aos="zoom-in" className=" ResposiveText text-center 	">
                <Typography  className="colorBlue text-3xl ResposiveText font-medium" variant="p">Les nouveautés</Typography>
             </Box>
             <Container data-aos="zoom-in"  className=" flex-center  ">
            <Carousel className="px-10"   breakPoints={breakPoints}>
            {Array.map((el)=><CarouselMap el={el}/>)}
            </Carousel>
            </Container>
        </Box>
    )
}

export default Nouveaute
