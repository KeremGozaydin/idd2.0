import ColumnCard from '@/components/ColumnCard';
import { Box, Button, SxProps, Theme, Typography } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
import pb from '@/lib/base';
import { Record } from 'pocketbase';
import { useRouter } from 'next/router';

let sectionIntroCSS: SxProps<Theme> = {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    color: 'primary.main',
    padding: '0.5em',
    margin: '0.2em'
}

const uyeler = [
  {
    img_link : "/media/aydan.webp",
    isim : "Aydan Cemre Comba",
    rol : "Kurucu Lider"
  },
  {
    img_link : "/media/ibrahim.webp",
    isim : "İbrahim Musan",
    rol : "Proje ve Kampanya Koordinatörü"
  },
  {
    img_link : "/media/defne.webp",
    isim : "Defne Deniz Özek",
    rol : "Sosyal Medya Koordinatörü"
  }
]

interface uye {
  [key: string]: any
}
type uyeler = uye[] | null

export default function Home() {
  const router = useRouter();
  const [indUyeHover,setindUyeHover] = useState<boolean>(false);

  return (
    <>
      <div className="page">
        <Box sx={{
          textAlign: "center",
          display: "flex",
          flexFlow: "column nowrap",
          gap: "0.5em",
          padding: "1em"
        }}>
          <Typography variant='h3'>Welcome</Typography>
          <Typography>Welcome to the official website of IDD (Iklim Degismeden Degis)!!!</Typography>
        </Box>
        <ColumnCard size={{height: "500px", width: "500px"}} img='/media/idd-logo.webp' alt='IDD logo'/>
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
        <Typography variant="h4" >Meet our Team!</Typography>
        <Typography sx={{marginBottom: "0.5em"}}>Click the button to see the whole team!</Typography>
        { !uyeler ? "loading" : (
          <Box className="index-uye-cont" sx={{
            width: "600px",
            height: "350px",
            overflow: "hidden",
            display: "flex",
            borderRadius: '16px',
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
            border: "20px black",
            zIndex: 999,
            position: "relative"
          }}
          >
            {uyeler.map((uye) => {
              return (
                <ColumnCard 
                  size={{
                    width: "200px", 
                    height: "200px"
                  }} 
                  img={uye.img_link} 
                  alt={uye.img_link}
                  imgPlacement={"vertical"}
                >
                  <Typography>{`${uye.isim.split(" ")[0]}!`}</Typography>
                </ColumnCard>
              )
            })}
            <Box sx={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              boxShadow: "0 0 10px 6px rgb(0 0 0 / 20%) inset",
              transition: "all 0.5s",
              ":hover": {
                boxShadow: "0 0 20px 12px rgb(0 0 0 / 20%) inset"
              }
            }}/>
            <Button className='index-uye-button' variant='outlined' sx={{
              position: "absolute",
              opacity: "0.2",
              transition: "all 0.5s",
              ":hover": {
                backgroundColor: "secondary.main",
                scale: "1.05"
              },
              width: "fit-content",
              height: "fit-content",
              backgroundColor: "secondary.main",
              color: "primary.main",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              margin: "auto",
              zIndex: "999",
              transform: "scale(1)"
            }} onClick={() => router.push('/about')}>
              Meet them! →
            </Button>
          </Box>
        )}

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
