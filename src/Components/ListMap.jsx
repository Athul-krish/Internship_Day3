import { Button, Table, TextField } from '@mui/material'
import React, { useState } from 'react'

const ListMap = () => {
    var[inp,setinp] = useState()
    var[data,setdata] = useState(["ICTAK"])

    const inputHandler=(e)=>{
        setinp(e.target.value)
        console.log(e.target.value);

    }
    const add=()=>{
        console.log("clicked");
        setdata([...data,inp])
    }    


  return (
    <div>
      <TextField variant='outlined' label="Enter your name" onChange={inputHandler} value={inp}></TextField><br /><br />
      <Button  variant='contained' onClick={add}> SUBMIT</Button>
      <ul>
        {data.map((v,i)=>{
            return <li>{v}</li>
        })}
      </ul>
    </div>
  )
}

export default ListMap
