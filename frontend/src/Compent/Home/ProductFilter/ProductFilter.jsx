import React,{useState} from 'react'
import NavbarFilter from './NavbarFilter'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'
import ProductMap01 from '../Map/ProductMap'
import Fotter from './Fotter'
const ProductFilter = ({match}) => {
    // Product Filter
    const [Rate , setRate]=useState(0)
    const [ProductMap , setProductMap]=useState([{
        Catgory :"Smartphone",
        Rate:4,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Samsung-Galaxy-S21-Ultra-Spen-XDA-234235.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",

    },
    {
        Catgory :"Smartphone",
        Name:"Msi Ds100", 
        Rate:2,
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Souris",
        Rate:4,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Ordinater",
        Rate:3,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Ordinater",
        Rate:5,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Ordinater",
        Rate:4,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Ordinater",
        Rate:4,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Ordinater",
        Rate:5,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Ordinater",
        Rate:3,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    },
    {
        Catgory :"Souris",
        Rate:4,
        Name:"Msi Ds100", 
        Prix:"15dt", 
        image:"Huawei-Watch-Fit-09.jpg", 
        Descarpation:"dadazdazdqazdijdzaopdjazd zda",
        
    }
    ])
    return (
        <Box>
            <NavbarFilter Rate={Rate} setRate={setRate}/>
            <Container>
                <Box className="flex flex-center  mt-80  ">
                    
                    <Box className="w-400 NavBarResposive">
                   <img src={process.env.PUBLIC_URL +`/Product04.png` }/>
                    </Box>
                    <Box  style={{color:"#12385F"}}className="paddingTopResposive font-extrabold	">
                        <Typography className="fonsizeChange"  variant="p">TROQUEZ<br/>en quelques clics !</Typography>
                    </Box>
                </Box>
                {/* ProductMap */}
                
            </Container>
          {/* Product map and filter  */}
            <Box className="marginLeftResposive04 mb-150" >
                    <Box  className="wp-100 scalAnimation flex-center displayflex ">
                  {!Rate &&   ProductMap.filter((catgorie)=>catgorie.Catgory==match ).map((el)=><ProductMap01 el={el}/>)}
                  {Rate &&   ProductMap.filter((catgorie)=>catgorie.Rate==Rate && catgorie.Catgory==match  ).map((el)=><ProductMap01 el={el}/>)}

                    </Box>
            </Box>
           
            <Container>
                <Box className="flex flex-center mb-20 DisplayNoneResposive">
                    <Box className="mr-10">
                        <Typography className="px-4 py-2" style={{background:"#DFE9F5"}} variant="p">1</Typography>
                    </Box>
                    <Box  className="mr-10">
                        <Typography className="px-4 py-2" style={{background:"#DFE9F5"}} variant="p">2</Typography>
                    </Box>
                    <Box className="mr-10">
                        <Typography className="px-4 py-2" style={{background:"#DFE9F5"}} variant="p">3</Typography>
                    </Box>
                    <Box className="mr-10" >
                        <Typography className="px-4 py-2" style={{background:"#DFE9F5"}} variant="p">4</Typography>
                    </Box>
                    <Box  className="mr-10">
                        <Typography className="px-4 py-2" style={{background:"#DFE9F5"}} variant="p">5</Typography>
                    </Box>
                </Box>
                
            </Container>
            <Box  >
          <Fotter/>
          </Box>
        </Box>
    )
}

export default ProductFilter
