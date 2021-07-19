import React,{useState} from 'react'
import {Container , Box ,Input, Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import {PostProduc} from '../../js/actions/authActions'
import {useDispatch , useSelector} from 'react-redux'

const AddProduct = () => {
    const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const[file , setFile]=useState()
  const[name , setnAME]=useState()
  const[prix , setPrix]=useState()
   
  const[prix_en_euros , setprix_en_euros]=useState()
  const[categorie , setcategorie]=useState()
  const[pernome , setPrenmone]=useState({Name:"wissem"})
  const[marque , setmarque]=useState()
  const[version , setversion]=useState()
  const[modele , setmodele]=useState()
  const[critere , setcritere]=useState()
  const[sous_categorie , setsous_categorie]=useState()
  const[fonctionnel ,setfonctionnel]=useState()
  const[description ,setdescription]=useState()
  const toggle = () => setModal(!modal);
  var formData = new FormData()
  // formData.append('file' , file)
 
  formData.append('images', file);
  formData.append('data',JSON. stringify({nom:name,
  prix_en_euros:prix_en_euros,
  categorie:categorie,
  marque:marque,modele:"KUHN HRB 303",
  version:"2019",
  critere:"A",
  sous_categorie:1,
  fonctionnel:"Yes",
  description:description}))
  const ADDpRODUCT=()=>{
    dispatch(PostProduc(formData))
  }
    return (
        <Box className="marginLeaftResposived mt-50 mb-80  flex-center flex justif">
            <Box className="text-center	" >
            <p>Name</p>
         <input value={name} onChange={(e)=>setnAME(e.target.value)}/>
         <p>Prixonbinz</p>
         
         <input value={prix_en_euros} type="number" onChange={(e)=>setprix_en_euros(e.target.value)}/>
        <p>categorie</p>
        <input type="number" value={categorie} onChange={(e)=>setcategorie(e.target.value)} />
        <p>marque</p>
        <input value={marque} onChange={(e)=>setmarque(e.target.value)}/>
        <p>modele</p>
        <input value={modele} onChange={(e)=>setmodele(e.target.value)}/>
      <p>  versio</p>
       <input value={version} onChange={(e)=>setversion(e.target.value)}/>
       <p>  critere</p>
       <input value={sous_categorie} onChange={(e)=>setsous_categorie(e.target.value)}/>
       {console.log(version)}
       <p>  sous_categorie</p>
       <input type="number" value={critere} onChange={(e)=>setcritere(e.target.value)}/>
       <p>  fonctionnel</p>
       <input  value={fonctionnel} onChange={(e)=>setfonctionnel(e.target.value)}/>
       <p>  description</p>
       <input  value={description} onChange={(e)=>setdescription(e.target.value)}/>
         <input  onChange={e=>setFile(e.target.files[0])} type="file"/>
                <Box>
                <Button onClick={ADDpRODUCT} className="text-white" style={{backgroundColor:"#316AAC" }}>Add Product</Button>
                </Box>
            </Box>
            
        </Box>
    )
}

export default AddProduct
