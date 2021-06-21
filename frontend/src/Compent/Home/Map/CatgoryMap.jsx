import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'

const CatgoryMap = ({el}) => {
    return (
     
            <Box  boxShadow={5} style={{width:"250px" , height:"300px"}} className="mr-10 mt-10 mb-10">
                <Box className="mb-14 mt-70 ml-11">
                <img  className="w-150 h-150 mb-2" src={`${el.Img}`}/>
                </Box>
                <Box className=" py-1 rounded-b-lg	" style={{backgroundColor:"#2A6BB3"}}>
                <Button className="w-250 text-white 	 " ><Typography style={{fontSize:"16px"}} className="pt-1 py-2 " variant="p">{el.NameProuct}</Typography></Button>
                </Box>
            </Box>
       
    )
}

export default CatgoryMap
