import React from 'react'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

const Fotter = () => {
    return (
        <>
        <Container>
            {/* <Box    className="text-white flex   flex-center ml-32  ">
                <Box  className="pr-20 ">
                    <Typography   style={{fontSize:"25px"}}  variant="p">Liens</Typography>
                </Box>
                <Box className="pr-20" >
                    <Typography    style={{fontSize:"25px"}} variant="p">Catégories</Typography>
                </Box>
                <Box className="pr-20" >
                    <Typography    style={{fontSize:"25px"}} variant="p">Contact</Typography>
                </Box>
            
            </Box> */}
          
           
        </Container>
         <Box style={{backgroundColor:"#B10D1E"}} className="lex flex-center">
            <Box className="text-center py-10 text-white	">
         <Typography variant="p">We believe that People with values dliver quality prdycts and nedd quality service <br/> @ 2020 Binpact . All rights reserved contact@binpact.com</Typography>
         </Box>
        </Box>
     </>
    )
}

export default Fotter
