import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseButton = () => {
    var[name,setName] = useState();

    const c1=()=>{
        setName("React")
    }

    const c2=()=>{
        setName("Angular")
    }

    const c3=()=>{
        setName("Next")
    }

    useEffect(()=>{
        c2()
    },[])


  return (
    <div><br /><br /><br />
        <Typography variant='h4'>Welcome to {name}</Typography><br />
      <Button variant='outlined' color='primary' onClick={c1}>React</Button>&nbsp;
      <Button variant='outlined' color='primary' onClick={c2}>Angular</Button>&nbsp;
      <Button variant='outlined' color='primary' onClick={c3}>Next</Button>
    </div>
  )
}

export default UseButton
