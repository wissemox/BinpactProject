import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import {Bar , Line , Doughnut} from 'react-chartjs-2'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Product01 from '../map/Proudct'
import DoneAllIcon from '@material-ui/icons/DoneAll';
const Boutique = () => {
    const [Product , setProduct]=useState([
        {Name:"Casque" , image:"Casque.jpg"} , 
        {Name:"Casque" , image:"Casque.jpg"}, 
        {Name:"Casque" , image:"Casque.jpg"}, 
        {Name:"Casque" , image:"Casque.jpg"},
        {Name:"Casque" , image:"Casque.jpg"}
    ])
    return (
        
        <Box>
              <Container>
                
            <Box className="MarginLeftProduct  mt-4  widhtPrestange flex flex-left px-10 	" >
                {/* BinUser */}
            <Box className="flex flex-center  ml-16 flex-wrap	">
                {/* Img here */}
            
                <Box className="bg-white px-10  py-4  mr-2 mb-4 flex">
                            <img style={{height:"60px" , width:"60px"}} className=" mt-2" src={process.env.PUBLIC_URL+`/Binz.png` }/>
                        <Box className="mr-8 pl-6" >
                        <Typography variant="p">Annual Taxes EMS</Typography>
                        <Typography variant="h4">$251K</Typography>
                        </Box>
                    </Box>
                  
                    <Box className="bg-white  px-10 py-4  mr-2 mb-4 flex">
                        <QueryBuilderIcon className="mr-10 mt-2"  style={{color:"#184981" , fontSize:"52px"}}/>
                        <Box className="mr-8">
                        <Typography variant="p">Product in progress</Typography>
                        <Typography variant="h4">60</Typography>
                        </Box>
                    </Box>
                    <Box className="bg-white  px-10 py-4  mr-2 mb-4 flex">
                        <DoneAllIcon className="mr-10 mt-2"  style={{color:"#184981" , fontSize:"52px"}}/>
                        <Box className="">
                        <Typography variant="p">Nombre de transaction <br/>complétées </Typography>
                        <Typography variant="h4">60</Typography>
                        </Box>
                    </Box>
                  
                    
                  
                   

             </Box>           
            
               
            </Box> 
           </Container>
            <Container >
              
            <Box className="MarginLeftProduct  mb-40"  >
                
                <Box  className="flex widht800    flex-left  MarginLeftProduct	  flex-wrap	 ">
                    {Product.map((el)=><Product01 el={el}/>)}
               </Box>
              
 
            </Box>
          
            </Container>
            
        
        </Box>
        
    )
}

export default Boutique
