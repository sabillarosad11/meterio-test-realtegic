// ** MUI Imports
import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardMobile from 'src/views/cards/CardMobile'

const CardBasic = () => {
  const [products, setProducts] = useState([])


  const getProducts = () => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json.products)
        setProducts(json.products)
      })
  }
  
  
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Grid container spacing={6} style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sx={{ paddingBottom: 2 }}>
        <Typography variant='h5'>Products</Typography>
      </Grid>

      {products.map(data => {
        return (
          <Grid item xs={12} sm={6} md={4} style={{ marginTop: '10px' }} key={data.id}>
            <CardMobile data={data} />
          </Grid>
        )
      }) }
      
    </Grid>
  )
}

export default CardBasic
