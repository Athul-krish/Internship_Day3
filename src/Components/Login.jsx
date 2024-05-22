import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography variant='h5'>Login</Typography>
      <TextField variant='standard' label="Username"></TextField><br />
      <TextField variant='standard' label="Password" type='password'></TextField>
    </div>
  )
}

export default Login
