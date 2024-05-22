import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    var[user,setuser] = useState([]);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            setuser(res.data)
            },[])
})


  return (
    <div>
       <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
            {user.map((v,i)=>{
                return (
                    <TableRow>
                    <TableCell>{v.id}</TableCell>
                    <TableCell>{v.name}</TableCell>
                    <TableCell>{v.address.city}</TableCell>
                  </TableRow>

                )
            })}
         </TableBody>
         </Table>
         </TableContainer> 
    </div>
  )
}

export default Api
