import { BLOG_ID, DATABASE_ID, databases } from "@/lib/appwrite"
import { bgColorsBlack, pickRandFromArr } from "@/lib/usefulFunctions"
import { Avatar, Box, Tooltip, Typography } from "@mui/material"
import { Query } from "appwrite"
import { useEffect } from "react"

export default function BlogPost(props:any){
    useEffect(() => {
       console.log(props.data) 
    },[])

    let {author,title,post} = props.data
    return (
        <div className="page">
            <Typography sx={{marginTop: "1em"}} variant="h3">{title}</Typography>
            <Typography sx={{fontStyle: "italic"}}>Written by {author}</Typography>
            <Box sx={{
                width: "max(70%,300px)",
                borderRadius: "0.5em",
                backgroundColor: "#536878",
                color: "white",

                marginTop: "2em",
                padding: "3em",
                display: "flex",
                flexFlow: "column nowrap",
                overflowWrap: "break-word",
                position: "relative"

            }}>
                <Box dangerouslySetInnerHTML={{__html:post}} sx={{display: "flex", flexFlow: "column nowrap", gap: "1em"}}></Box>
            </Box>
        </div>
    )

}

export async function getStaticPaths() {
    const paths = (await databases.listDocuments(DATABASE_ID,BLOG_ID)).documents.map((rec) => ({params: {post: rec.$id}}))
    return {
        paths,
        fallback: false 
    }
}

export async function getStaticProps({params}:any) {
    const data = (await databases.listDocuments(DATABASE_ID,BLOG_ID,[Query.equal("$id",params.post)])).documents[0]
    return {
        props: {
            data
        }
    }
}