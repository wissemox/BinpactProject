import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'

const ProductinProgres = ({el}) => {
    return (
        // Image
        <Box style={{height:"400px"  , width:"250px"}} boxShadow={5} className=" rounded-xl	  MarginLefrReposniveProduuct300px    mt-8  bg-white	   "  >
            <Box boxShadow={3} className=" rounded-xl	">
            <img className="rounded-xl	" style={{width:"300px" , height:"200px"}}  src={process.env.PUBLIC_URL +`/uploads/${el.image}` }/>
          
            </Box>
            {/* Text */}
            <Box className="mt-4 w-250 font-bold px-4  pt-2	">
                <Box>
                <Typography variant="p">Name Produtct : {el.Name}</Typography>
                </Box>
               <Box>
               <Typography variant="p">Prix:24$</Typography>
               </Box>
               <Box>
               <Typography variant="p">Descraption:dzdazdaz<br/>dazdadz</Typography>
               </Box>
            </Box>
            <Box>

            </Box>
            {/* Button */}
            <Box className="bg-gray-400	rounded-b-lg py-2 mt-20 text-center	  ">
                <Button><Typography className="text-white font-bold	 " variant="p">Exchange</Typography></Button>
            </Box>
        </Box>
    )
}

export default ProductinProgres
