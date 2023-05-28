import ImageCard from "@/components/ColumnCard"
import { DATABASE_ID, PROJECTS_ID, databases } from "@/lib/appwrite"
import { Box, Link, Typography } from "@mui/material"
import { useRouter } from "next/router"
import {localeTrans,useLocaleText} from "@/components/translateHooks"

let tr = {
    welcome: "Projeler!",
    projects: "Projelerimizi buradan inceleyebilirsiniz.",
}

let en = {
    welcome: "Projects!",
    projects: "You can browse through our projects here.",
}

interface ProjectInfo {
    collectionId: string,
    collectionName: "projects",
    created: string,
    id: string,
    img_link: string,
    link: string,
    name: string,
    name_en: string,
    updated: string
}

interface ProjectsPage {
    data: ProjectInfo[]
}

export default function Projects({data}: ProjectsPage) {
    let text = useLocaleText(tr,en)

    return (
        <>
            <div className="page">
                <Typography variant="h4">{text["welcome"]}</Typography>
                <Typography>{text["projects"]}</Typography>
                <Box sx={{
                    display: "flex",
                    gap: "5em",
                    marginTop: "5em",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}>     
                    {
                        data.map(({img_link,name, name_en,link}) => {
                            return (
                                <ImageCard imgPlacement="vertical" img={img_link} alt={localeTrans(name,name_en)} size={{height: "400px", width: "400px"}}>
                                    <Typography><Link underline="hover" color="blueviolet" href={link}>{localeTrans(name,name_en)}</Link>!</Typography>
                                </ImageCard>
                            )
                        })
                    }
                </Box>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const data = (await databases.listDocuments(DATABASE_ID,PROJECTS_ID)).documents
    
    return {
        props: {
            data
        }
    }
}