import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
     var[count,setCount]=useState(0);

    const add=()=>{
        console.log("clicked"); 
        setCount(count+1);
    }

    const sub=()=>{
        console.log("clicked");
        setCount(count-1)
    }

    const name=()=>{
        alert("nee moonji")
    }

  return (
    <div>
        <Typography variant='h3' > {count} </Typography>
      <Button variant='outlined' onClick={add}>+</Button>&nbsp;
      <Button variant='outlined' onClick={sub}>-</Button>
      <Button variant='outlined' onClick={name}>Alert</Button>

    </div>
  )
}

export default Counter
