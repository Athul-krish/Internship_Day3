import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name="Boii"
     var[fname,setfname] = useState("Athul")
    const[val,setval] = useState();

     const handleinput=(e)=>{
        console.log(e.target.value);
        setfname(e.target.value) 
     } 

     const submitHandle=()=>{
        console.log("clicked");
        setval(fname)

     }

  return (
    <div>
      <Typography variant='h2'>Welcome {val}</Typography>
      <TextField variant='outlined' label='Enter your name' onChange={handleinput}></TextField><br />
      <Button variant='outlined' onClick={submitHandle}>Change</Button>
    </div>
  )
}

export default StateBasics
