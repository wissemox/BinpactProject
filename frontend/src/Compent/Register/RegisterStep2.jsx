
import React,{useEffect , useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar ,Button } from '@material-ui/core'
import ModalComunite from '../Modal/ModelCommunite'
import {useDispatch , useSelector} from 'react-redux'
import {Getallcomunte} from '../../js/actions/authActions'
import RegisterStep3 from './RegisterStep3.jsx'
const RegisterStep2 = ({setRedirectRegister , RegisterFunction2,RedirectRegister2 ,setRedirectRegister2}) => {
    const dispatch =useDispatch()
    const [BackGroundChange , setBackGroundChange]=useState(false)
    
    const[Communte , setCommunte]=useState("")
    
    const[Entreprise , setEntreprise]=useState()
    const[input02 , setInput02]=useState(false)
    const[NomCommunte , setNomCommunte]=useState()
    const[Siret , setSiret]=useState()
    //  Return function
    const Presendnt =()=>{
        setRedirectRegister(false)
    }
    // Model function
    const SwitchBackGroundValue=()=>{
       
        setBackGroundChange(false)
    } 
    const SwitchBackGroundValue01=()=>{
       
        setBackGroundChange(true)
    } 
    // Get communte
    useEffect(()=>{
        dispatch(Getallcomunte()) 
    },[])
    // Onclick secture
    const Redirect03 =()=>{
        RegisterFunction2(Communte,Entreprise,Siret,NomCommunte)
        localStorage.setItem("Nomcommunauté",  JSON.stringify(NomCommunte));
        localStorage.setItem("sectur",  JSON.stringify(Communte));
        localStorage.setItem("Siret",  JSON.stringify(Siret));
        localStorage.setItem("nomentreprize",  JSON.stringify(Entreprise));
        if(!BackGroundChange){
            localStorage.setItem("role", "leader" );
        }
        if(BackGroundChange){
            localStorage.setItem("role", "membre" );
        }
    }
    return (
        // Register Step2
     
        <Box>
            {RedirectRegister2 ? <RegisterStep3 setRedirectRegister2={setRedirectRegister2}/> : 
            <Box className="  pt-10 h-720 BackgroundImageurl01">
                {/* Inscraption */}
                <Box   className="flex flex-center  mb-10 TestResposive paddindTopResposive ">
                    <Box >
                     <Typography data-Aos="fade" variant="p" className="colorBplue  font-medium 	text-2xl		" >INSCRIPATION</Typography>
                     </Box>
                </Box>
             {/*Input Here  */}
             <Container>
                 <Box className="flex flex-center">
                   <Box>
                       <Box>
                        <input value={NomCommunte} onChange={(e)=>setNomCommunte(e.target.value)} data-Aos="fade-left"  placeholder="Nom communauté" className="bg-white  w-330 pladceholder h-40 mb-8  text-center	 rounded-full 	"/>
                        </Box>
                        {/* Probhere */}
                        {/* COmmunite */}
                        <Box className="flex w-330 bg-white mb-8 h-12 Animation   rounded-full">
                        <Box  style={{backgroundColor:BackGroundChange&&"#1C2D4F",color:BackGroundChange&&"white"}} className="rounded-l-full" onClick={SwitchBackGroundValue01} >
                        <p style={{paddingTop:"14px"}} className="w-165   	    text-center"><ModalComunite setCommunte={setCommunte} Communte={Communte} BackGroundChange={BackGroundChange}/></p> 
                        </Box>
                        <Box onClick={SwitchBackGroundValue} className="rounded-r-full " style={{backgroundColor:!BackGroundChange&&"#1C2D4F",color:!BackGroundChange&&"#f4f4f4"}}>
                        <p style={{paddingTop:"10px"}} className="w-165  f-16 	font-semibold	 text-center">Leader</p>
                        </Box>
                        </Box>
                        <Box>
                        {BackGroundChange ? <Box className="w-330 bg-white mb-8 h-10 rounded-full" > 
                        <p>{Communte&&Communte}</p>
                        </Box> :<Box>
                                
                                <input className="w-330 rounded-full h-10 mb-8 text-center	" value={Communte}  onChange={(e)=>setCommunte(e.target.value)} placeholder="Secteur"/>
                                
                                {input02&& 
                                <h6  data-Aos="fade">Entre your Communte</h6>} 
                                </Box>}
                        </Box>
                         {/* Siret */}
                        <Box>
                        <input className="w-330 rounded-full h-10 mb-8 text-center	" value={Siret}  onChange={(e)=>setSiret(e.target.value)} placeholder="Siret"/>
                        </Box>   
                          {/* Upload */}
                        <Box>
                        <input placeholder="Upload"  className="bg-white  w-330 text-center pladceholder mb-10  rounded-full " id="formFileSm" type="file" />
                        </Box>
                        {/* Name entreprise */}
                        <Box>
                        <input value={Entreprise} onChange={(e)=>setEntreprise(e.target.value)} data-Aos="fade-left"  placeholder="Nom entreprise" className="bg-white text-center w-330 pladceholder h-40  mb-8  rounded-full 	"/>
                        </Box>
                        </Box>
                        
                       
                 </Box>
                 <Box className="flex flex-center">
                        <Box>
                        <button onClick={Presendnt} className="bg-red text-white rounded-full w-90 mr-8 	"  >Presdent</button>
                         <button  className="bg-red text-white rounded-full w-90" onClick={Redirect03}>Suivant</button>
                        </Box>
                 </Box>
             </Container>
            
        <Box className="ml-80 ResponsiveMargin h-1 pt-10">
                    {/* ml-80 */}
                    <Container>
                    <Box className="flex flex-left "> 
                        
                    </Box>
                    </Container>
                </Box>
                <Container>
                <Box  className="flex flex-left bg-red ResposiveWidhtMargin">
                <Box   className=" absolute  AnimationProgresBar bg-Bluegr  rounded-l-full  mt-40  h-35  ResposiveMarginProgresBar widhtResposive01 ">
                
                </Box>
                </Box>
                </Container>
                <Container>
                <Box className="bg-red flex flex-center ">
                <Box style={{marginTop:"30px"}} className="absolute flex  flex-center  wp-100 ">
                    <Box   className="Box-Shadow bg-Bluegr  colorBplue mr-40 ml-10  w-55 text-center   rounded-full shadow-lg		">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 ">1</Typography>
                    </Box>
                    <Box   className="Box-Shadow bg-Bluegr colorBplue mr-40  h-12 w-55 text-center  rounded-full	">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >2</Typography>
                    </Box>
                    <Box  className="Box-Shadow bg colorBplue bg-bluelow mr-40  w-55 text-center rounded-full	">
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
{console.log(RedirectRegister2)}
  
</Box>}
             
        </Box>
    )
}

export default RegisterStep2
