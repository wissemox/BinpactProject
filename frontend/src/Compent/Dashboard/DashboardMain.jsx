import React,{useState} from 'react';
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import Navbar from './Navbar'
import MenuMain from './MenuMain'
import Main from './Main'
import ProductinProgres from './ProductinProgres'
import {Route , BrowserRouter } from 'react-router-dom'
import Buutique from './Butique/Boutique'
import AddProduct from './AddProduct';
import Fevoret from './Fevoret'
function DashboardMain() {
    const [Bollent , setBollen]=useState(false)
    return (
        <div>
            <BrowserRouter>
            <Navbar setBollen={setBollen} Bollent={Bollent} />
            <Box   className="flex ">
                {!Bollent&& <Box  className="absolute  "  >
                    <MenuMain />
                </Box>}
                 
                <Box className="Backgroundchangehv wp-100"   style={{backgroundColor:"#F0F0F0"    }}>
                    <Box> 
                      
                       <Route exact path="/Dashboard" render={()=><Main/>}></Route>   
                       <Box >

                       <Route exact path="/Dashboard/butqiue" render={()=><Buutique/>}></Route>
                       <Route  exact path="/Dashboard/Addproduct" render={()=><AddProduct/>}></Route> 
                       <Route  exact path="/Dashboard/Fevoret" render={()=><Fevoret/>}></Route> 
                       <Route exact path="/Dashboard/FevoireProduct"  ><Fevoret/></Route>
                       <Route exact path="/Dashboard/ProductInProgress"  ><ProductinProgres/></Route>

                       </Box>

                       
                    </Box>

                </Box>
            </Box>
            </BrowserRouter>
        </div>
    );
}

export default DashboardMain;