import React , {useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import {Link} from 'react-router-dom'
import {logiUser} from '../../../js/actions/authActions'
import {useDispatch , useSelector} from 'react-redux'

const Login = () => {
    const dispatch =useDispatch() 
    const [username ,setName]=useState('')
    const [Password ,setPassword]=useState('')
    const EeroreDetail = useSelector(state => state.Errore.detail)

    const LoginUser =()=>{
        dispatch(logiUser( {email:username ,password:Password} ))
        //  "email": "sender.binpact@gmail.com",

    }
    return (
        <Box style={{height:"100vh"}} className="BackgroundImageurl05 flex">

   
               <Box   className="flex flex-left paddingLeaftResposive paddinTopResposiveLogin   pl-30">
                    <Box >
                        {console.log(EeroreDetail)}
                        <Box className="text-center">
                        <p>{EeroreDetail&&EeroreDetail}</p>

                     <Typography className="font-semibold 	" style={{fontSize:"30px" , color:"#1F4385"}} variant="p">CONNECTEZ-VOUS</Typography>
                     </Box>
                     <Box className="mt-10  " >
                         <PersonIcon style={{fontSize:"40px" , marginLeft:"2%"}}  className="absolute text-white mt-1  "/>
                         <input value={username} onChange={(e)=>setName(e.target.value)} placeholder="E-mail" style={{backgroundColor:"#184981",height:"50px"  }} className="rounded-full text-center widhtLoginInput	  placeholder-white text-xl  text-white		  " />
                     </Box>
                     <Box className="mt-8">
                         <LockIcon style={{fontSize:"40px" , marginLeft:"2%" }}  className="absolute text-white mt-1 "/>
                        <input value={Password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Mot de passe" style={{backgroundColor:"#184981",height:"50px" }} className="rounded-full text-center widhtLoginInput	  placeholder-white text-xl  text-white		  "/>
                     </Box>
                     <Box className="flex flex-center text-center mt-4">
                         <Box >
                             <Box className="mb-1">
                             <Typography className="text-gray-400" variant="p">Mot de passe oublié ? </Typography>
                             </Box>                            
                             <Box>
                        <Link  className="no-underline" to="/Register"><Typography style={{color:"#184981"}}  className="text-gray-400" variant="p">inscription </Typography></Link>
                             </Box>
                         </Box>
                     </Box>
                     <Box className="flex flex-center mt-4">
                        <Box>
                        <Button onClick={LoginUser}  style={{backgroundColor:"#C12026" , color:"#FFFFFF" , borderRadius:"20px" , width:"180px" , height:"40px"}}>Connexin</Button>
                        </Box>
                     </Box>
                   </Box>
               </Box>    
                <Box className="marginLeaftlogin marginToplogin">
                    <img src="LoginImage.png"/>
                </Box>
        
        </Box>
    )
}

export default Login
