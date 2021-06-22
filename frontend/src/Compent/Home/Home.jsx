import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar  } from '@material-ui/core'
import MainPage from './MainPage1.jsx'
import Catgory from './Catgory'
import Nouveaute from './Nouveaute.jsx'
import Commentcamarche from './Commentcamarche.jsx'
//UPDATE
import MainPage2 from './MainPage2.jsx'
import EssayezBinpact from './EssayezBinpact'
import Buyers from './Buyers'
import Map from './Map'
import Contact from './Contact/Contact'
import {Route , BrowserRouter } from 'react-router-dom'
import Fotter from './Fotter'
import ProductFilter from './ProductFilter/ProudctFilter.jsx'
const Home = () => {
  
    return (
        <>
        <BrowserRouter>
          
            <Route exact path="/" render={()=> <MainPage /> } />
            <Route exact path="/" render={()=> <Catgory/> } />
            <Route exact path="/" render={()=> <Nouveaute/> } />
            <Route exact path="/" render={()=> <Commentcamarche/>  } />
            <Route exact path="/" render={()=> <MainPage2/>  } />
            <Route exact path="/" render={()=><EssayezBinpact />  } />
            <Route exact path="/" render={()=><Buyers/>  } />
            <Route exact path="/" render={()=><Map/> } />
            <Route exact path="/" render={()=><Fotter/> } />
        </BrowserRouter>
        {/* Update */}
        {/* <EssayezBinpact />
       
        <Buyers/>
        <Map/> */}
        </>
         
    )
}

export default Home
