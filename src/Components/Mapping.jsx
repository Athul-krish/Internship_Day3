import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[name,setname]=useState([
        {"sname":"olly","age":20},
        {"sname":"oggy","age":22},
        {"sname":"tiki taka","age":20}
    ])
  return (
    <div>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
            {name.map((v,i)=>{
                return (
                    <TableRow>
                    <TableCell>{v.sname}</TableCell>
                    <TableCell>{v.age}</TableCell>
                  </TableRow>
                )
            })}
         </TableBody>
         </Table>
         </TableContainer> 
         
    </div>
  )
}

export default Mapping
