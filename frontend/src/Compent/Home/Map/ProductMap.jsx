import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlarmIcon from '@material-ui/icons/Alarm';
import Rate0 from '../../../Function/Rate'
const ProductMap = ({el}) => {
    // Rate Function here 
    const[Rate , setRate]=useState(1)
    return (
        <Box  boxShadow={3} className="w-340 bg-white mr-10 mt-10 rounded-3xl	">
                <Box   className="absolute flex marginLeaftProfile mt-140  "> 
                    <Box> 
                        <Box className=" flex flex-center">
                        <Box className="wp-50">
                        <img  src={process.env.PUBLIC_URL +`/Porifleimage.png` }/>

                        </Box>
                        </Box>
                        <Box className="font-semibold	">
                        <Typography variant="p">Wissem abid</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box boxShadow={5} className="rounded-xl  ">
                <img className="rounded-xl h-250"    src={process.env.PUBLIC_URL +`/${el.image}` }/>

                </Box>
                 <Box className="mb-3 mt-4 ml-4">
                        <Box  className="absolute   marginTopFevoirteIcon marginLeaftFevoiretResposive"  >
                            <FavoriteIcon style={{color:"#56AC5C" , fontSize:"42px"}}/>
                        </Box>
                    <Typography  className="font-semibold pb-10 f-20" variant="p">{el.Name}</Typography>
                   
                    <Box style={{color:"#BCBCBC" }} className="flex pt-2">
                        
                        <Typography className="pr-4 f2-12"  variant="p">Hight tech </Typography>
                        <Typography className="pr-4 f2-12"  variant="p">Phone</Typography>
                        <Typography className="pr-4 f2-12"  variant="p">Samsung </Typography>
        
                    </Box>
                    <Box className="pt-1 ">
                        <Typography className="font-semibold	" variant="p">Etat :</Typography>
                        <Typography className="font-semibold" style={{color:"#56AC5C"}} variant="p"> Parfait</Typography>
                    </Box>
                    <Box style={{width:"100%"}} className="mt-3    " >
                        <Box>
                        <Typography style={{fontSize:"14px"}} className="font-semibold  	" variant="p">lorem ipsum dolor dit amer consecteur adispcing elit sed do eiusmod tempor 
                        inididunt ut labore et dolore magna aliqua</Typography>
                        </Box>
                    </Box>

                    <Box  className="flex border-b-2	mr-4 ">
                        <Box  style={{width:"40%"}} className="bg-red mt-3 rounded-full mb-3	">
                         <Button style={{color:"white" , width:"100%" , paddingRight:"60px"}}><Typography className="f-14" variant="p">Prix </Typography> </Button>
                        </Box>
                        <Box className="mt-3 ml-16">
                            <Rate0  Rate={Rate} setRate={setRate} />
                        </Box>
                    </Box>
                    <Box className="flex mt-2">
                        <Box>
                         <LocationOnIcon style={{fontSize:"20px"}}/>
                        </Box>
                        <Box>
                            <Typography className="f-14 pl-2" variant="p">Kantaoui , Sousse </Typography>
                        </Box>
                        <Box className="ml-8">
                            <AlarmIcon/>
                            <Typography className="f-14" variant="p">il ya 2 heaurs</Typography>
                        </Box>
                    </Box>
                 
                </Box>
                <Box className="rounded-b-lg  text-center py-3	font-semibold	" style={{background:"#2A6AB2"}}>
              
                        <Typography className="text-white  " variant="p">Troquer maintenant</Typography>
                      
                </Box>
        </Box>
    )
}

export default ProductMap
