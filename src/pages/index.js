// ** MUI Imports
import Link from 'next/link'


import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Dashboard = () => {
  return (
    // <ApexChartWrapper>
      <Box className='content-center' style={{marginTop: '120px'}}>
        <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <BoxWrapper>
            <Typography variant='h3'>Hallo</Typography>
            <Typography variant='h5' sx={{ mb: 4, fontSize: '1.5rem !important' }}>
              Let's see Products !
            </Typography>
          </BoxWrapper>
          <Link passHref href='/products'>
            <Button component='a' variant='contained' sx={{ px: 5.5 }}>
              Go to Products
            </Button>
          </Link>
        </Box>
      </Box>
    // </ApexChartWrapper>
  )
}

export default Dashboard
