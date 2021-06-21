import React from 'react'
import {Container , Box ,Input, Typography , IconButton , AppBar, Button  } from '@material-ui/core'

const AddProduct = () => {
    return (
        <Box className="marginLeaftResposived mt-50 mb-80  flex-center flex justif">
            <Box className="text-center	" >
                <Box  className="text-center py-4	">
                <p>Name Product</p>
                <Input className="w-400"/>
                </Box>
                <p>Catgory</p>
                <Box className="text-center py-4	">
                    
                <Input  className="w-400"/>
                </Box>
                <Box className="text-center	">
                <p>Prix</p>
                <Input  className="w-400"/>
                </Box>
              

                <Box className="text-center py-4	">
                    <p>Name Product</p>
                <Input  className="w-400"/>
                </Box>
                

                <Box className="text-center	 py-4">
                    <p>Name Product</p>
                <Input  className="w-400"/>
                </Box>
                <Box>
                <Button className="text-white" style={{backgroundColor:"#316AAC" }}>Add Product</Button>
                </Box>
            </Box>
            
        </Box>
    )
}

export default AddProduct
