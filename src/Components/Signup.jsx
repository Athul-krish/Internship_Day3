import { TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography variant='h2'>Signup</Typography>
      <TextField variant='standard' label="Username"></TextField><br />
      <TextField variant='standard' label="Password" type='password'></TextField><br />
      <TextField variant='standard' label='Name'></TextField><br />
      <TextField variant='standard' label='Place'></TextField><br />
    </div>
  )
}

export default Signup
