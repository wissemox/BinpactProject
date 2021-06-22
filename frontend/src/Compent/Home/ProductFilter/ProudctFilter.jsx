import React,{useState , useEffect} from 'react'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Parallax} from 'react-parallax'
import Aos from 'aos'
import "aos/dist/aos.css"
import {Link} from 'react-router-dom'
const ProductFilter = () => {
    
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
 
    const [active , setactive]=useState(false)
    const[Menu , setMenud]=useState(false)
    // OnScroll function
    const[Scroll , setScroll]=useState(false)
    const[Acceuil , setAcceuil]=useState(false)
    const[CommentCaMarche , setCommentCaMarche]=useState(false)
    const[PourqoiBinpact , setPourqoiBinpact]=useState(false)
    const[Catgories , setCatgories]=useState()
    const[Produtct , setProduct]=useState([{
        Name:"Smartphone"
    }, 
    {Name:"Ordinater"}, 
    {Name:"Souris"}
])
    const changeBackground =()=>{
     
        if(window.scrollY>20){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    window.addEventListener('scroll' ,changeBackground )
 

    // Here Accueil function change Color 
    const AcceuilChangeColor =()=>{
        console.log(window.scrollY)
        if(window.scrollY<=1660){
            setAcceuil(true)
        }else{
            setAcceuil(false)
        }
    }
    window.addEventListener('scroll' ,AcceuilChangeColor )
    // Here Comment ca marche function cahnge color 
    const CommentCaMarcheChangeColor =()=>{
        console.log(window.scrollY)
        if(window.scrollY<=2184){
            setCommentCaMarche(true)
        }else{
            setCommentCaMarche(false)
        }
    }
    window.addEventListener('scroll' ,CommentCaMarcheChangeColor )
    //Herer Porqoi Binpact ? change color on scrol 
    const PourqoiBinpactChangeColor =()=>{
        console.log(window.scrollY)
        if(window.scrollY<=3004){
            setPourqoiBinpact(true)
        }else{
            setPourqoiBinpact(false)
        }
    }
    window.addEventListener('scroll' ,PourqoiBinpactChangeColor )
    // Main code 
    {console.log(CommentCaMarche)}
    return (
        <>
        <Box  className="ParallaxResposive1400widht "  bgImage={"Untitled-2.jpg"} strength={60}> 
        <Box className="w-15  	h-900 ">
           
                {/* NavBar */}
                <AppBar data-aos="fade" style={{backgroundColor:"#F0F0F0" ,boxShadow:"none"}} position={`${Scroll&&"fixed"}`} className={`${Scroll && "AnimaiionNavbarSticky"} ${Scroll && "bg-gray-300	"}  `}>
                    {!Menu && <>  <Box data-aos="fade" className="flex ml-8pR  pt-10 flex-center mb-20  ">
                        <Box>
                            {!Scroll ?     <img  className="w-190 imgResposive"   src="binpact002.png"/> :  <img  className="w-190 imgResposive"   src="binpact002.png"/>}
                        </Box>
                        <Box className={`mt-40R  ml-20pR flex text-sm NavBarResposive  ${Scroll ?"text-gray-500	":"gray-500"}  `}>
                            <Typography data-aos="fade" variant="p" className="pr-40 text-gray-700	">ACCEUIL</Typography>
                            <Typography  data-aos="fade"  variant="p" className="pr-40 text-gray-700	">COMMUNAUTES</Typography>
                            <Typography data-aos="fade" variant="p" className="pr-40 text-gray-700	">POURQOI BINPACT ?</Typography>
                            <Typography data-aos="fade" variant="p" className="pr-40 text-gray-700	">QUI SOMMES NOUS</Typography>
                          
                        </Box>
                     
                            <Box  className="Mt-RButton NavBarResposive text-sm   ">
                             <Button style={{color:"white" , backgroundColor:"#C01526" ,borderRadius:"20px"}} data-aos="fade" variant="p" className="pr-40  "><a className="no-underline text-white	" href="http://localhost:3000/Register"><Typography className="text-sm " variant="p">SE CONNECTER</Typography></a></Button> 
                            </Box>
                        <Box  className="hidden flex  mt-3 wp-80	   MenuResposive  text-left">
                       
                             <MenuIcon onClick={()=>setMenud(!Menu)} style={{marginLeft:"80%"}} className={`${Scroll ?"text-gray-500	":"text-gray-400	"} `}/>
                       
                  
                     
                        </Box> 
                        </Box> 
                        </>}  
                  

                       
                        {Menu&&
                         <AppBar  boxShadow={5} position="fixed"  className={`bg-gray-100    ${Menu && "AnimaiionNavbarSticky"} `} >
                                <Box className="flex flex-center mt-2">
                                <Box className="wp-50 mt-1 ml-10">
                                <img className="w-190 imgResposive" src="binpact002.png"/>
                                </Box>
                                <Box className="wp-50 mt-4" >
                                <MenuIcon onClick={()=>setMenud(!Menu)} style={{marginLeft:"80%"}} className={`text-gray-500`}/>
                                </Box>
                                


                                </Box>
                                <Box  className={`text-gray-500  h-400 `}>
                                    <Box  className="pb-10 font-semibold text-l py-4 HoverBackGround pl-5 ">
                                        <Typography variant="p">Acceuil</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5 py-4 HoverBackGround	">
                                        <Typography variant="p">Comment ca marche ?</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5 py-4 HoverBackGround	">
                                        <Typography variant="p"> Pourqoi Binpct ?</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5 py-4 HoverBackGround	">
                                        <Typography variant="p">Categories</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5  py-4 HoverBackGround	">
                                        <Typography variant="p">Communautes</Typography>
                                    </Box>
                                </Box>
                            </AppBar>
                            }
                    </AppBar>
                    <Container>
                        
                     
                 <Container> {/* Title */}
                     {!Menu && <>
                        <Box className="ml-3p">
                            
              
                            {/* Descraption */}
                                  
                            {/* Mobile resposive show reserche bar */} 
                           {/* style={{justifyContent:"flex-end"}}  */}
                                <Box  className="bg-red items-end ResercherResposiveMobile	hidden  m-3 bg-white rounded-full mt-5  flex opacity-90 ">
                                    <Box className="wp-90">
                                        <input className="ml-5 wp-90" />
                                    </Box>
                                    <Box     className="py-2 pr-2  flex wp-10 flex-left">
                                        <Box>
                                        <SearchIcon />
                                        </Box>
                                    </Box>
                                  
                            </Box>
                         
                             </Box>
                        <Box style={{width:"91%"}} boxShadow={2} className=" rounded-full  HaideResercheBar	mt-12 flex opacity-90 ml-9 bg-white">
                            <Box style={{height:"30px" , justifyContent:"start" , marginTop:"2%"}} className={`   ${active ?"hidden":"flex"} `}>
                                <Box className="ml-5 fontResposive flex paddinTopResposive"  >
                                <Box className="mt-1">
                                <Typography className="pr-10 w-250   text-center " variant="p">Categories</Typography>
                                </Box>
                                <Box className="pr-10 mt-1 w-250   text-center	" >
                                <Typography  variant="p">Sous catégorie</Typography>
                                </Box>
                                <Box className="pr-10  mt-1   text-center " >
                                <Typography variant="p">Ville</Typography> 
                                </Box> 
                                <Box  className="pr-10 mt-1 w-250   text-center">
                                <Typography  variant="p">Prix en binz</Typography>
                                </Box>
                                <Box className="pr-10 mt-1 w-110r   text-center ">
                                <Typography  variant="p">Rating user</Typography>
                                </Box >
                                <Box className="pr-10  mt-1 w-250   text-center ">
                                <Typography  variant="p"> Catactéristique</Typography> 
                                </Box>
                                </Box>
                            </Box>
                          
               
                              
                           
                            <Box className={` ${active ?"flex":"hidden"} `}>
                                <Box  className="flex flex-center f-14 bg-gray-100 rounded-full">
                                   <Box boxShadow={5} className="bg-gray-200 rounded-full AnimationCatgeories	">
                                    <Box className="pl-10 pt-2">
                                    <Typography  variant="p">Categories</Typography>
                                    </Box>
                                    <Box>
                                    <Input value={Catgories} onChange={(e)=>setCatgories(e.target.value)} placeholder="Serche categories"  className="bg-gray-200 rounded-full	ml-5 wp-80 "/>
                                    </Box>
                                    
                                   </Box>
                                <Box className="flex	rounded-r-full	">
                                    <Box className="mt-20" >
                                    <Typography className="pr-60 pl-10" variant="p">Sous catégorie</Typography>
                                    </Box>
                                    <Box className="mt-20"  >
                                    <Typography className="pr-60" variant="p">Ville</Typography> 
                                    </Box>
                                    <Box className="mt-20">
                                    <Typography className="pr-60" variant="p">Prix en binz</Typography>
                                    </Box>
                                    <Box className="mt-20">
                                    <Typography className="pr-60" variant="p">Rating user</Typography>
                                    </Box >
                                    <Box className="mt-20">
                                    <Typography className="pr-60" variant="p"> Catactéristique</Typography> 
                                    </Box>
                                    </Box>
                                </Box>
                            </Box>
                        
                            <Box   onClick={()=>setactive(!active)} className={`bg-red rounded-full h-12 w-12 mt-3 mb-2 justify-center mr-4	  ${active ? "Animationlogo" : "Animationlogo02"}`} > 
                            <img className="w-15 h-10 ml-1 mr-10 mt-1" src="TESt05zd.png"/>
                            </Box>
                     
                    </Box> 
                        {Catgories && 
                        <Box  boxShadow={5}   style={{height:"150px"}} className="bg-gray-200 flex-left	 rounded-3xl flex	 AnimationMenu	bg-gray-200	 wp-30 mt-2  mb-10">
                        <Box className="px-10 py-3">
                            {Produtct.filter((el)=>el.Name.toLocaleLowerCase().includes(Catgories.toLocaleLowerCase().trim())).map((el)=><p>{el.Name}</p>)}
                            
                        </Box>
                         </Box> 
                        }
                        </>}
                    {/* Serche */}
                       
                </Container>  
         
            </Container>
           
        </Box>
     
        </Box>



{/* 600 RESPOSIVE */}
<Box className="ParallaxResposive hidden"  bgImage={"Untitled-1.jpg"} strength={600}> 
<Box className="w-15  	h-720 ">
    <Container>
        {/* NavBar */}
            <AppBar data-aos="fade" style={{backgroundColor:"#F0F0F0",boxShadow:"none"}} position={`${Scroll&&"fixed"}`} className={`${Scroll && "AnimaiionNavbarSticky"} ${Scroll && "bg-white"}  `}>
            <Box  className="flex  ml-4 pt-10  ">
            {!Scroll ?     <img  className="w-190  imgResposive"   src="binpact002.png"/> :  <img  className="w-190 imgResposive"   src="binpact002.png"/>}
           
         
            <Box className="mt-20 ml-40 flex text-sm NavBarResposive  text-white  		">
            <Typography variant="p" className="pr-40">accueil</Typography>
            <Typography  variant="p" className="pr-40">pourquoi Binpac</Typography>
            <Typography variant="p" className="pr-40">Communautés</Typography>
            <Typography variant="p" className="pr-40">qui sommes nous</Typography>
            <Typography variant="p" className="pr-40">se connecter</Typography>
           
            </Box>
           
                            
            <Box    style={{width:"100%"}} className="hidden flex  	   MenuResposive  text-left">
               
                <MenuIcon   onClick={()=>setMenud(!Menu)} style={{marginLeft:"75%" , marginTop:"10px"}} className={`${Scroll ?"text-gray-500	":"text-gray-400"}`}/>
                
           
              
            </Box> 
             
            </Box>
            </AppBar>
            {Menu&&
                         <AppBar  boxShadow={5} position="fixed"  className={`bg-gray-100 bg-white  ${Menu && "AnimaiionNavbarSticky"} `} >
                                <Box className="flex flex-center mt-4">
                                <Box className="wp-50 mt-1 ml-4">
                                <img className="w-190 imgResposive" src="binpact002.png"/>
                                </Box>
                                <Box className="wp-50 mt-4" >
                                <MenuIcon onClick={()=>setMenud(!Menu)} style={{marginLeft:"80%"}} className={`text-gray-500`}/>
                                </Box>
                                


                                </Box>
                                <Box  className={`text-gray-500  h-400 `}>
                                    <Box  className="pb-10 font-semibold text-l py-4 HoverBackGround pl-5 ">
                                        <Typography variant="p">Acceuil</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5 py-4 HoverBackGround	">
                                        <Typography variant="p">Comment ca marche ?</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5 py-4 HoverBackGround	">
                                        <Typography variant="p"> Pourqoi Binpct ?</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5 py-4 HoverBackGround	">
                                        <Typography variant="p">Categories</Typography>
                                    </Box>
                                    <Box className="pb-10 font-semibold text-l	pl-5  py-4 HoverBackGround	">
                                        <Typography variant="p">Communautes</Typography>
                                    </Box>
                                </Box>
                            </AppBar>
                            }
             
         <Container> {/* Title */}
                <Box data-aos="fade-down-left" className="ml-3p">
               
                    {/* Descraption */}
                
                    {/* Mobile resposive show reserche bar */} 
                   {/* style={{justifyContent:"flex-end"}}  */}
                   {/* Here */}
                        <Box  className="bg-red items-end ResercherResposiveMobile	hidden  m-3 bg-white rounded-full mt-5  flex opacity-90 ">
                            <Box className="wp-90">
                                <Input  value={Catgories} onChange={(e)=>setCatgories(e.target.value)} className="ml-5 wp-90" />
                            </Box>
                            <Box     className="py-2 pr-2  flex wp-10 flex-left">
                                <Box>
                                <SearchIcon />
                                </Box>
                                {console.log(Catgories)}
                            </Box>
                            
                          
                    </Box>
                    {Catgories && 
                        <Box  boxShadow={5}   style={{height:"150px"}} className="bg-gray-200 flex-left	 rounded-3xl flex	 AnimationMenu	bg-gray-200	 wp-30 mt-2  mb-10">
                        <Box className="px-10 py-3">
                            {Produtct.filter((el)=>el.Name.toLocaleLowerCase().includes(Catgories.toLocaleLowerCase().trim())).map((el)=><p className="f-14">{el.Name}</p>)}
                            
                        </Box>
                         </Box> 
                        }
                     </Box>
                     
                <Box boxShadow={2} className=" rounded-full  HaideResercheBar	mt-12 flex opacity-90	  bg-white">
                    <Box style={{height:"30px" , justifyContent:"start" , marginTop:"2%"}} className={`   ${active ?"hidden":"flex"} `}>
                        <Box className="ml-5 fontResposive flex paddinTopResposive "  >
                        <Box className="mt-1 ">
                        <Typography className="pr-90" variant="p">Categories</Typography>
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Sous catégorie</Typography>
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Ville</Typography> 
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Prix en binz</Typography>
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Rating user</Typography>
                        </Box >
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p"> Catactéristique</Typography> 
                        </Box>
                        </Box>
                    </Box>
                  
       
                      
                   
                    <Box className={`pt-4 ${active ?"flex":"hidden"} `}>
                    <Input className="w-1000 mb-3 mr-10"></Input>
                    </Box>
                
                    <Box  onClick={()=>setactive(!active)} className={`bg-red rounded-full h-12 w-12 mt-3 mb-2 justify-center	  ${active ? "Animationlogo" : "Animationlogo02"}`} > 
                    <img className="w-15 h-10 ml-1 mr-10 mt-1" src="TESt05zd.png"/>
                    </Box>
             
            </Box>
        </Container>  
    </Container>
</Box>
</Box>
</>
    )
}

export default ProductFilter
