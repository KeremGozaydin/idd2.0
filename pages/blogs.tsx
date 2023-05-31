import ImageCard from "@/components/ColumnCard"
import { BLOG_ID, DATABASE_ID, databases } from "@/lib/appwrite"
import { bgColorsBlack, getFirst100char, pickRandFromArr } from "@/lib/usefulFunctions"
import { Avatar, Box, Tooltip, Typography } from "@mui/material"
import Link from "next/link"

export default function BlogPage({data}: any) {

    return (
        <div className="page">
            <Box sx={{
                display: "flex",
                flexFlow: "column nowrap",
                width: "100%",
                marginTop: "2em",
                gap: "1em"
            }}>
                <Typography variant="h2" sx={{textAlign: "center"}}>Recent Posts</Typography>
                <Box sx={{
                    display: "flex",
                    gap: "3em",
                    width: "100%",
                    justifyContent: "center"
                }}>
                    {data.slice(0,2).map((rec:any) => {
                        return (
                            <ImageCard imageLink={`/blogs/${rec.$id}`} img={rec.cover_img} alt={rec.title} imgPlacement="vertical" 
                            headerEl={
                                <Box sx={{
                                    display:"flex",
                                    flexFlow: "row nowrap",
                                    gap: "1em",
                                    alignItems: "center"
                                }}>
                                    <Tooltip placement="top" title={rec.author}>
                                        <Avatar sx={{backgroundColor: pickRandFromArr(bgColorsBlack),color: "black", boxShadow: 3}}>{rec.author.slice(0,1)}</Avatar>
                                    </Tooltip>
                                    <Box>
                                        <Typography sx={{fontWeight: "600"}}>{rec.title}</Typography>
                                        <Typography>{new Date(rec.publish_date).toLocaleDateString()}</Typography>
                                    </Box>
                                </Box>
                            } mainBoxSx={{width:"min-content"}}>
                                <Link href={`/blogs/${rec.$id}`}>
                                    <Typography>{getFirst100char(rec.post_in_str)}...</Typography>
                                </Link>
                            </ImageCard>
                        )
                    })}
                </Box>
            </Box>
        </div>
    )
}

export async function getStaticProps() {
    const data = (await databases.listDocuments(DATABASE_ID,BLOG_ID)).documents
    return {
        props: {
            data
        }
    }
}