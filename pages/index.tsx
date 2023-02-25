import ColumnCard from '@/components/ColumnCard';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";

let sectionIntroCSS: SxProps<Theme> = {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    color: 'primary.main',
    padding: '0.5em',
    margin: '0.2em'
}

export default function Home() {
  return (
    <>
      <div className="page">
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          color: 'primary.main',
          margin: '2em',
          gap: '0.5em'
        }}>
          <Typography variant='h3'>Welcome</Typography>
          <Typography>Welcome to the official website of IDD (Iklim Degismeden Degis)!!!</Typography>
        </Box>
        <ColumnCard img='/media/idd-logo.webp' alt='IDD logo'/>
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          color: 'primary.main',
          margin: '2em',
        }}>
         <Typography variant='h4'>Projects!</Typography>
         <Typography>You can check our projects
          <Link href={'/projects'}>
            <Box sx={{
              color: '#183efa',
              transition: 'all 1s',
              ":hover": {
                textDecoration: 'underlined'
              }
            }} component={'span'}> here</Box>!
          </Link>
        </Typography>
        </Box>

        <ColumnCard img={'/media/kerem.jpeg'} alt={'kerem'} imgPlacement={'left'}>
          <Box sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant='h5'>Kerem Gozaydin</Typography>
            <Typography>Our Programmer!</Typography>
          </Box>
        </ColumnCard>

        <Box sx={sectionIntroCSS}>
          <Typography variant='h5'>Our Blog!</Typography>
          <Typography>You can check our latest blog posts here!</Typography>
        </Box>

        <Box sx={sectionIntroCSS}>
          <Typography variant='h5'> Our Team Members!</Typography>
          <Typography>You can learn about our team members here!</Typography>
        </Box>

      </div>
    </>
  )
}
