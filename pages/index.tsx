import ColumnCard from '@/components/ColumnCard';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import PreviewBox from '@/components/Preview';
import { localeTrans, useLocaleText } from '@/components/translateHooks';

const uyelerExamples = [
  {
    image : "/media/aydan.webp",
    textTr : "Aydan Cemre Comba",
    textEn : "Aydan Cemre Comba"
  },
  {
    image : "/media/ibrahim.webp",
    textTr : "İbrahim Musan",
    textEn: "İbrahim Musan"
  },
  {
    image : "/media/defne.webp",
    textTr : "Defne Deniz Özek",
    textEn : "Defne Deniz Özek"
  }
]

const projelerExamples = [
  {
    textTr: "Asansör Otopark Sistemi",
    textEn: "Elevator Parking System",
    image: "/media/asansör.webp"
  },
  {
    textTr: "Kaliforniya Solucani ile Tarim",
    textEn: "Farming with California Worms",
    image: "/media/solucan.webp"
  },
  {
    textTr: "Tahta Solar Panel",
    textEn: "Wooden Solar Panel",
    image: "/media/Gunes-Paneli-Acisi.webp"
  }
]

const blogExamples = [
  {
    textTr: "Sürdürülebilir ekolojik yaşam",
    textEn: "Sustainable ecological life",
    image: "/media/sürdürülebilir.jpeg"
  },
  {
    textTr: "Yedinci kitayla tanıştınız mı?",
    textEn: "Have you met the seventh continent?",
    image: "/media/7.kita.jpeg"
  }
]

interface texts {
  [key: string]: {
    welcome: string,
    projects: string,
    projectsButton: string,
    team: string,
    teamsButton: string,
    blog: string,
    blogButton: string
  }
}

let tr = {
  welcome: "IDD (Iklim Degismeden Degis) resmi web sitesine hoşgeldiniz!!!",
  projects: "Projelerimizi görmek için butona tıklayın!",
  projectsButton: "Projelerimiz",
  team: "Takımımızı görmek için butona tıklayın!",
  teamsButton: "Takımımız",
  blog: "Blogumuzu görmek için butona tıklayın!",
  blogButton: "Blogumuz"
}

let en = {
  welcome: "Welcome to the official website of IDD (Iklim Degismeden Degis)!!!",
  projects: "Click the button to view our projects!",
  projectsButton: "Our Projects",
  team: "Click the button to see the whole team!",
  teamsButton: "Our Team",
  blog: "Click the button to see our blog!",
  blogButton: "Our Blog"
}

export default function Home() {
  let text = useLocaleText(tr,en);

  return (
    <>
      <div className="page">

        <Box
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: "1em",
            padding: "1em",
            textAlign: "center"
          }}
        >
          {/* intro header */}

          <Box sx={{
            textAlign: "center",
            display: "flex",
            flexFlow: "column nowrap",
            padding: "1em"
          }}>
            <Typography variant='h3'>{localeTrans("Hosgeldiniz","Welcome")}</Typography>
            <Typography>{text.welcome}</Typography>
          </Box>

          {/* LOGO */}

          <ColumnCard size={{height: "500px", width: "500px"}} img='/media/idd-logo.webp' alt='IDD logo'/>

          {/* Projects */}

          <Box sx={{
            display: "flex",
            flexFlow: "column nowrap",
            padding: "1em"
          }}>
            <Typography variant="h4" >{localeTrans("Projelerimize göz gezdirin!","Check our projects out!")}</Typography>
            <Typography sx={{marginBottom: "0.5em"}}>{text.projects}</Typography>
          </Box>

          <PreviewBox buttonText={text.projectsButton} data={projelerExamples} pagePath='/projects'/> 
          
          {/* Team */}

          <Box sx={{
            display: "flex",
            flexFlow: "column nowrap",
            padding: "1em"
          }}>
            <Typography variant="h4" >{localeTrans("Takimiza göz gezdirin","Check our team out!")}</Typography>
            <Typography sx={{marginBottom: "0.5em"}}>{text.team}</Typography>
          </Box>

          <PreviewBox buttonText={text.teamsButton} data={uyelerExamples} pagePath='/about' excited={true}/>
          
          <Box sx={{
            display: "flex",
            flexFlow: "column nowrap",
            padding: "1em"
          }}>
            <Typography variant='h4'>{localeTrans("Blogumuza göz gezdirin","Check our blog out!")}</Typography>
            <Typography>{text.blog}</Typography>
          </Box>

          <PreviewBox buttonText={text.blogButton} data={blogExamples} pagePath='/blog'/>
          </Box>

      </div>
    </>
  )
}
