import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CardView = () => {
    var[user,setuser] = useState([]);
    useEffect
    (()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setuser(res.data)
            },[])
        .catch((error)=>{
            console.log(error);
        })
})

  return (
    <div>
        <Grid container spacing={2}>
          {user.map((val,i)=>{
            return(
            <Grid item xs={12} sm={6} md={4}>
          
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
              {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
            )
          })}
    </Grid>

    </div>
  )
}

export default CardView
