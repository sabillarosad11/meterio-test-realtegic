// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Twitter from 'mdi-material-ui/Twitter'
import CartPlus from 'mdi-material-ui/CartPlus'
import Facebook from 'mdi-material-ui/Facebook'
import Linkedin from 'mdi-material-ui/Linkedin'
import GooglePlus from 'mdi-material-ui/GooglePlus'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardMobile = (props) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card style={{ width: '300px', height: '500px' }}>
      <Grid>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img width={137} height={176} alt='Apple iPhone 11 Pro' src={props.data.thumbnail} />
        </CardContent>
        <hr style={{ margin: '0px', border: '1px solid #ede' }} />
        <Grid item xs={12}>
          <CardContent style={{ marginTop: '-8px' }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}  style={{maxHeight: '60px'}}>
              {props.data.title}
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 3.5 }} >
              {props.data.description}
            </Typography>
            <Typography sx={{ fontWeight: 500}}>
              Price:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                {props.data.price}
              </Box>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense' style={{marginTop: '-10px'}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button>
                <CartPlus fontSize='small' sx={{ marginRight: 2 }} />
                Add to Card
              </Button>
              <IconButton
                id='long-button'
                aria-label='share'
                aria-haspopup='true'
                onClick={handleClick}
                aria-controls='long-menu'
                aria-expanded={open ? 'true' : undefined}
              >
                <ShareVariant fontSize='small' />
              </IconButton>
              <Menu
                open={open}
                id='long-menu'
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'long-button'
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Facebook />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Twitter />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Linkedin />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <GooglePlus />
                </MenuItem>
              </Menu>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile
