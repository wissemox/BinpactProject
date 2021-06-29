import React from 'react'

const Rate0 = ({Rate }) => {
    const stars = (x)=>{
        let starsArray =[]
        for(let i=1 ; i<=5 ;i++){
            if(i<=x){
                starsArray.push(<span style={{fontSize:"25px" ,color:"#2A6AB2"}} >★</span>);
            }else{
                starsArray.push(<span style={{fontSize:"25px",color:"#2A6AB2"}} >☆</span>)
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
