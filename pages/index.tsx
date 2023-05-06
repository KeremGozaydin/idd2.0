import ColumnCard from '@/components/ColumnCard';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import PreviewBox from '@/components/Preview';

const uyelerExamples = [
  {
    image : "/media/aydan.webp",
    text : "Aydan Cemre Comba"
  },
  {
    image : "/media/ibrahim.webp",
    text : "İbrahim Musan"
  },
  {
    image : "/media/defne.webp",
    text : "Defne Deniz Özek"
  }
]

const projelerExamples = [
  {
    text: "Asansör Otopark Sistemi",
    image: "/media/asansör.webp"
  },
  {
    text: "Kaliforniya Solucani ile Tarim",
    image: "/media/solucan.webp"
  },
  {
    text: "Tahta Solar Panel",
    image: "/media/Gunes-Paneli-Acisi.webp"
  }
]

const BlogExamples = [
  {
    text: "Sürdürülebilir ekolojik yaşam",
    image: "/media/sürdürülebilir.jpeg"
  },
  {
    text: "Yedinci kitayla tanıştınız mı?",
    image: "/media/7.kita.jpeg"
  }
]

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="page">

        {/* intro header */}

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

        {/* LOGO */}

        <ColumnCard size={{height: "500px", width: "500px"}} img='/media/idd-logo.webp' alt='IDD logo'/>

        {/* Projects */}

        <Typography variant="h4" >Projects!</Typography>
        <Typography sx={{marginBottom: "0.5em"}}>Click the button to view our projects!</Typography>

        <PreviewBox buttonText='View our Projects!' data={projelerExamples} pagePath='/projects'/> 
        
        {/* Team */}
        
        <Typography variant="h4" >Meet our Team!</Typography>
        <Typography sx={{marginBottom: "0.5em"}}>Click the button to see the whole team!</Typography>

        <PreviewBox buttonText='Meet our Team!' data={uyelerExamples} pagePath='/about' excited={true}/>
        
        <Typography variant='h4'>Our Blog!</Typography>
        <Typography>You can check our latest blog posts here!</Typography>

        <PreviewBox buttonText='Check our Blog!' data={BlogExamples} pagePath='/blog'/>

      </div>
    </>
  )
}
