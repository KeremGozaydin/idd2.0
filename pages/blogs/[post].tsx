import { localeTrans } from "@/components/translateHooks"
import { BLOG_ID, DATABASE_ID, databases } from "@/lib/appwrite"
import { Avatar, Box, Tooltip, Typography } from "@mui/material"

export default function BlogPost({data}:any){

    let {author,title,post} = data
    return (
        <div className="page">
            <Typography sx={{marginTop: "1em"}} variant="h3">{title}</Typography>
            <Typography sx={{fontStyle: "italic"}}>
                {localeTrans(author + ` tarafından yazıldı`, `Written by ` + author)}
            </Typography>
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


export async function getStaticPaths(){ 
    let posts = await databases.listDocuments(DATABASE_ID, BLOG_ID)
    let paths = posts.documents.map(post => {
        return {
            params: {
                post: post.$id
            }
        }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}:any){
    console.log(params)
    let post = await databases.getDocument(DATABASE_ID, BLOG_ID, params.post)
    return {
        props: {
            data: post
        }
    }
}