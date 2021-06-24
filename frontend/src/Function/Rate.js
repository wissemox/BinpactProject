import React from 'react'

const Rate0 = ({Rate , setRate}) => {
    const stars = (x)=>{
        let starsArray =[]
        for(let i=1 ; i<=5 ;i++){
            if(i<=x){
                starsArray.push(<span style={{fontSize:"25px" ,color:"#56AC5C"}} onClick={()=>setRate(i)}>★</span>);
            }else{
                starsArray.push(<span style={{fontSize:"25px",color:"#56AC5C"}} onClick={()=>setRate(i)}>☆</span>)
            }
        }
        return starsArray;
    }

    return (
        <div>
            {stars(Rate)}
        </div>
    )
}

export default Rate0
