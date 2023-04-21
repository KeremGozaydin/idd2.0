import ImageCard from "@/components/ColumnCard"
import { DATABASE_ID, PROJECTS_ID, databases } from "@/lib/appwrite"
import pb from "@/lib/base"
import { Box, Link, Typography } from "@mui/material"
import { useEffect } from "react"

interface ProjectInfo {
    collectionId: string,
    collectionName: "projects",
    created: string,
    id: string,
    img_link: string,
    link: string,
    name: string,
    updated: string
}

interface ProjectsPage {
    data: ProjectInfo[]
}

export default function Projects({data}: ProjectsPage) {
    useEffect(() => {
        console.log(data)
    })

    return (
        <>
            <div className="page">
                <Typography variant="h4">Welcome to our projects page!</Typography>
                <Typography>Here you can browse through our projects!</Typography>
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
                        data.map(({img_link,name,link}) => {
                            return (
                                <ImageCard imgPlacement="vertical" img={img_link} alt={name} size={{height: "400px", width: "400px"}}>
                                    <Typography><Link underline="hover" color="blueviolet" href={link}>{name}</Link>!</Typography>
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