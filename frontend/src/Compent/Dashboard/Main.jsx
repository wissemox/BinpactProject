import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import {Bar , Line} from 'react-chartjs-2'
const Main = () => {
    return (
        <Container>
           <Box className="flex flex-left      marginLeaftResposived    flex-wrap  ">
               {/* PrestangeBox */}
               <Box className="flex bg-white mt-4 mb-4 py-4 mr-10 wp-Resposive">
                    {/* TypographeBox */}
                    <Box>
                    <Box className="ml-4 mr-10 flex wp-Resposive ">     
                         <Typography className="text-6xl font-bold" variant="p">86</Typography>
                         <Box>
                              <Box className="ml-2" style={{height:"30px"}}>
                                   <Typography className="text-4xl font-bold	" variant="p">%</Typography>
                              </Box>
                              <Box className="ml-2 text-gray-500	">
                                   <Typography className="f-14" variant="p">Increased</Typography>
                              </Box>
                         </Box>
                    </Box>
                    {/* TextCongrationHere */}
                    <Box className=" ml-4 pr-8 ">
                         <Typography className="font-black text-center	text-xl " variant="p">Congratulation!</Typography>
                    </Box>
                    <Box className="w-200 text-gray-500 ml-4">

                        <Typography className="f-14"  variant="p"> You've finished all of your 
                        tasks for this week.</Typography>
                    </Box>
                </Box>
                    {/* ImageBoxhere */}
                    <Box className=" mt-4 mr-4 " >
                         <img   src="Prestange.png"/>
                    </Box>
               </Box>
               {/* GraphBox */}
               <Box className=" bg-white py-4 mt-4 mb-4 mr-10 px-4 wp-Resposive">
                    <Box className="FlexRespoive">
                         <Box>
             
               </Box> 
                         <Box>
                              <Box className="font-extrabold">
                                   <Typography variant="p">Income</Typography>
                              </Box>
                                   
                                   <Box style={{color:"#76C093"}} className="f-14 w-Dashboard ">
                                   <Typography variant="p">Increase in Average</Typography> 
                                   </Box>
                         </Box>
                         
                         <Box className="text-3xl font-bold	pl-4 pt-2 ">
                              <Typography variant="p">50%</Typography>
                         </Box>
                         <Box>
                    
                         </Box>
                         
                    </Box>
                    {/* <Box className="f-14  ">
                    <Line
               data={{
                   
               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
               datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                         'rgba(255, 99, 132, 0.2)',
                         'rgba(54, 162, 235, 0.2)',
                         'rgba(255, 206, 86, 0.2)',
                         'rgba(75, 192, 192, 0.2)',
                         'rgba(153, 102, 255, 0.2)',
                         'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                         'rgba(255, 99, 132, 1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                         'rgba(75, 192, 192, 1)',
                         'rgba(153, 102, 255, 1)',
                         'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
               }]
               
               }} 
               height={40}
               width={40} 
               
               />
               </Box> */}
 
              </Box>



              <Box className=" bg-white  py-4 mt-4 mb-4 mr-10 px-4 wp-Resposive">
                    <Box className="FlexRespoive">
                         <Box>
             
               </Box> 
                         <Box>
                              <Box className="font-extrabold">
                                   <Typography variant="p">Income</Typography>
                              </Box>
                                   
                                   <Box style={{color:"#76C093" }} className="f-14   w-Dashboard   ">
                                   <Typography variant="p">Increase in Average</Typography> 
                                   </Box>
                         </Box>
                         
                         <Box className="text-3xl font-bold 	pl-4 pt-2">
                              <Typography variant="p">50%</Typography>
                         </Box>
                         <Box>
                    
                         </Box>
                         
                    </Box>
                    {/* <Box className="f-14  ">
                    <Line
               data={{
                   
               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
               datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                         'rgba(255, 99, 132, 0.2)',
                         'rgba(54, 162, 235, 0.2)',
                         'rgba(255, 206, 86, 0.2)',
                         'rgba(75, 192, 192, 0.2)',
                         'rgba(153, 102, 255, 0.2)',
                         'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                         'rgba(255, 99, 132, 1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                         'rgba(75, 192, 192, 1)',
                         'rgba(153, 102, 255, 1)',
                         'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
               }]
               
               }} 
               height={40}
               width={40} 
               
               />
               </Box> */}
 
              </Box>




              <Box className=" bg-white py-4 mt-4 mb-4 mr-10 px-4 wp-Resposive" >
                    <Box className="FlexRespoive">
                         <Box>
             
               </Box> 
                         <Box>
                              <Box className="font-extrabold">
                                   <Typography variant="p">Income</Typography>
                              </Box>
                                   
                                   <Box style={{color:"#76C093"}} className="f-14  w-Dashboard  ">
                                   <Typography variant="p">Increase in Average</Typography> 
                                   </Box>
                         </Box>
                         
                         <Box className="text-3xl font-bold	pl-4 pt-2  ">
                              <Typography variant="p">50%</Typography>
                         </Box>
                         <Box>
                    
                         </Box>
                         
                    </Box>
                    {/* <Box className="f-14  ">
                    <Line
               data={{
                   
               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
               datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                         'rgba(255, 99, 132, 0.2)',
                         'rgba(54, 162, 235, 0.2)',
                         'rgba(255, 206, 86, 0.2)',
                         'rgba(75, 192, 192, 0.2)',
                         'rgba(153, 102, 255, 0.2)',
                         'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                         'rgba(255, 99, 132, 1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                         'rgba(75, 192, 192, 1)',
                         'rgba(153, 102, 255, 1)',
                         'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
               }]
               
               }} 
               height={40}
               width={40} 
               
               />
               </Box> */}
 
              </Box>

                
              <Box className="  bg-white py-4 mt-4 mb-4 mr-10 px-4 wp-Resposive ">
                    <Box className="FlexRespoive flex-center">
                    <Box>
                    
                    </Box> 
                         <Box>
                              <Box className="font-extrabold">
                                   <Typography variant="p">Income</Typography>
                              </Box>
                                   
                                   <Box style={{color:"#76C093"}} className="f-14    ">
                                   <Typography variant="p">Increase in Average</Typography> 
                                   </Box>
                         </Box>
                         
                         <Box className="text-3xl font-bold	pl-4 pt-2">
                              <Typography variant="p">50%</Typography>
                         </Box>
                         <Box>
                    
                         </Box>
                         
                    </Box>
                    <Box className="f-14   ">
                    <Line
               data={{
                   
               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
               datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                         'rgba(255, 99, 132, 0.2)',
                         'rgba(54, 162, 235, 0.2)',
                         'rgba(255, 206, 86, 0.2)',
                         'rgba(75, 192, 192, 0.2)',
                         'rgba(153, 102, 255, 0.2)',
                         'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                         'rgba(255, 99, 132, 1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                         'rgba(75, 192, 192, 1)',
                         'rgba(153, 102, 255, 1)',
                         'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
               }]
               
               }} 
               height={40}
               width={40} 
               
               />
               </Box>
 
              </Box>
      
             
           </Box>
           <Box className="mb-20" >

               </Box>
        </Container>
    )
}

export default Main
