import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar ,Button } from '@material-ui/core'
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from '../../js/actions/authActions'
import {Redirect} from 'react-router-dom'
import RegisterStep4 from './RegisterStep4'
const RegisterStep3 = ({setRedirectRegister2}) => {
    // Get information
    const dispatch=useDispatch()
    const email =JSON.parse(localStorage.getItem('Email')) 
    const Prenom =JSON.parse(localStorage.getItem('Prenom')) 
    const name =JSON.parse(localStorage.getItem('name')) 
    const Nomcommunauté =JSON.parse(localStorage.getItem('Nomcommunauté')) 
    const password =JSON.parse(localStorage.getItem('password')) 
    var role = localStorage.getItem('role');
    const[Sexe , setSexe]=useState("")
    const[DateNaissance , setDateNaissance]=useState("")
    const[Photo , setPhoto]=useState("")
    const[adresse , setadresse]=useState("")
    const[pays , setpays]=useState("")
    const[ville , setville]=useState("")
    const RegisterUser =() =>{
    
        dispatch(registerUser({ prenom:Prenom,email:email, adresse:adresse ,tel:"string",pays:pays,ville:pays,nom:"string",code_postal:150, username:name,password:password , role:role ,nom_communaute:Nomcommunauté,sexe:Sexe,date_naissance:DateNaissance}))
    }
    const Goback =()=>{
        setRedirectRegister2(false)
    }
    const Redirect  = useSelector(state => state.authReducer.data)
    return (
        
        <>
        {Redirect ? <RegisterStep4/>:  <Box className=" w-15 h-720 BackgroundImageurl02 placeholder-blue-500">
             {console.log(email)}
                {/* Typograpqh */}
                <Box   className="flex flex-center  mb-10 pt-10 TestResposive paddindTopResposive ">
                    <Box >
                     <Typography data-Aos="fade" variant="p" className="colorBplue  font-medium 	text-2xl		" >INSCRIPATION</Typography>
                     </Box>
                </Box>
                    <Box>

                    <Box className="flex flex-center">
                        <Box>
                            {/* Sexe */}
                            <Box>
                            <input value={Sexe} onChange={(e)=>setSexe(e.target.value)} placeholder="Sexe" className="bg-white   w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                            </Box>
                            {/*  Date */}
                            <Box>
                            <input value={DateNaissance} onChange={(e)=>setDateNaissance(e.target.value)} type="Date" placeholder="Date de naissance" className="bg-white  pl-10 w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                            </Box>
                            {/*Upload*/}
                            <Box>
                            <input type="file" placeholder="Sexe" className="bg-white  w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                            </Box>
                            {/*  Linkedin*/}
                            <Box>
                            <input placeholder="Linkedin (ou autre)" className="bg-white  w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                            </Box>
                            {/*  */}
                            <Box>
                                <Box className="flex bg-white w-330 rounded-full h-100   ">
                                <input value={adresse} onChange={(e)=>setadresse(e.target.value)} className="w-50 py-2 border-l	 rounded-full pl-5"   placeholder="Addred"/>
                                <input value={pays} onChange={(e)=>setpays(e.target.value)} className="w-50   pl-5 border-l border-black 	" placeholder="Ville"/>
                                <input value={ville} onChange={(e)=>setville(e.target.value)} className="w-50 rounded-r-full pl-5 border-l border-black		" placeholder="Pays"/>
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                    </Box>
                    <Container>
                        <Box className="flex flex-center mt-10">
                            <Box>
                            <button className="bg-red text-white rounded-full w-90 mr-8 h-30  	" onClick={Goback} >Precedent</button>
                            </Box>
                            <Box>
                            <button  className="bg-red text-white rounded-full w-90 " onClick={RegisterUser}>Suivant</button> 
                            </Box>
                        </Box>
                    </Container>
             {/* Progress */}
             <Box className="ml-80 ResponsiveMargin h-1 pt-10">
                    {/* ml-80 */}
                    <Container>
                    <Box className="flex flex-left "> 
                       
                    </Box>
                    </Container>
                </Box>
                <Container>
                <Box style={{marginLeft:"20%"}} className="flex flex-left bg-red">
                <Box   className=" absolute  AnimationProgresBar bg-Bluegr  rounded-l-full  mt-40  h-35  ResposiveMarginProgresBar widhtResposive02 ">
                
                </Box>
                </Box>
                </Container>
                <Container>
                <Box className="bg-red flex flex-center ">
                <Box style={{marginTop:"30px"}} className="absolute flex   flex-center  wp-100 ">
                    <Box   className="Box-Shadow bg-Bluegr  colorBplue mr-40 ml-10  w-55 text-center   rounded-full shadow-lg		">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 ">1</Typography>
                    </Box>
                    <Box   className="Box-Shadow bg-Bluegr colorBplue mr-40  h-12 w-55 text-center  rounded-full	">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >2</Typography>
                    </Box>
                    <Box  className="Box-Shadow  bg-Bluegr  bg colorBplue bg-bluelow  mr-40  w-55 text-center rounded-full	">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >3</Typography>
                    </Box>
                    <Box  className="Box-Shadow bg-bluelow colorBplue w-55 mr-40  text-center rounded-full  shadow-lg	">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >4</Typography>
                    </Box>
                    </Box>
                    
                </Box>
                </Container>
                
                <Container>
                <Box className="flex flex-center"> 
                <Box className="ml-70  mt-10     bg-bluelow wp-50 rounded-full h-35">
       
                </Box>
                
                </Box>
                
                </Container>
        </Box>}
        
    </>
    )
}

export default RegisterStep3
