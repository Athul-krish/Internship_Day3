import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <AppBar>
        <Toolbar>
            <Typography variant='h5'>MyApp</Typography>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/login'} style={{color:'white'}}>Login</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/signup'} style={{color:'white'}}>Sign in</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/s'} style={{color:'white'}}>State</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/count'} style={{color:'white'}}>Counter</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/button'} style={{color:'white'}}>Button</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/list'} style={{color:'white'}}>List</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/map'} style={{color:'white'}}>Map</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/api'} style={{color:'white'}}>API</Link></Button>&nbsp;
            <Button variant='contained' color='primary'><Link to={'/card'} style={{color:'white'}}>Card</Link></Button>

        </Toolbar>
     </AppBar>
     <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar
