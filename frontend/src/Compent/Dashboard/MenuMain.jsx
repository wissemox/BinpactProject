import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import {Link} from 'react-router-dom'
function MenuMain() {
    return (
    <Box>
            <Box className="h-vh100 bg-white mt-1 StickyLeft    px-10 py-10  mt-10 ">
                    <Box className="font-extrabold ml-3">
                        <Typography variant="p">Main</Typography>
                    </Box>
                    <Link className="no-underline" to="/Dashboard" style={{color:"#AEAEAE"}}>
                    <Box className="mt-4">
                        <IconButton>
                        <DashboardIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                        <Typography  variant="p"> Dashboard</Typography>
                    </Box> 
                    </Link>
                    <Link to="/Dashboard/butqiue" style={{  textDecoration: "none",color:"#AEAEAE"}}>
                    <Box className="mt-2">
                        <IconButton>
                        <StoreIcon />
                        </IconButton>
                        <Typography  variant="p"> Store</Typography>
                    </Box>
                    </Link>

                    <Box className="mt-2">
                        <IconButton>
                        <TimelineIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                    <Link className="no-underline  text-gray-400	" to="/Dashboard/Addproduct"> <Typography  variant="p"> AddProduct</Typography></Link>
                    </Box>

                    <Box className="mt-2">
                        <IconButton>
                        <StoreIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                    <Link className="no-underline text-gray-400	" to="/Dashboard/FevoireProduct"> <Typography  variant="p"> Fevoire</Typography></Link>
                    </Box>


                    <Box className="mt-2">
                        <IconButton>
                        <AccessAlarmIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                        <Link className="no-underline text-gray-400	" to="/Dashboard/ProductInProgress"> <Typography  variant="p"> Product in Progress</Typography></Link>
                    </Box>


                <Typography className="font-extrabold ml-3 mb-2" variant="p">Apps</Typography>
                    <Box className="mt-2">
                        <IconButton>
                        <StoreIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                        <Typography  variant="p"> Store</Typography>
                    </Box>

                    <Box className="mt-2">
                        <IconButton>
                        <StoreIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                        <Typography  variant="p"> Store</Typography>
                    </Box>
                    <Box className="mt-2">
                        <IconButton>
                        <TimelineIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                        <Typography  variant="p"> Analytics</Typography>
                    </Box>

                    <Box className="mt-2 mb-4">
                        <IconButton>
                        <TimelineIcon style={{color:"#AEAEAE"}}/>
                        </IconButton>
                        <Typography  variant="p"> Analytics</Typography>
                    </Box>

            
            </Box>     
    </Box>
    )
}

export default MenuMain
