import { Box, Button, Typography } from "@mui/material"
import ColumnCard from "./ColumnCard"
import {useRouter} from "next/router"
import { useState } from "react"

interface PreviewExample {
    image: string,
    text: string
}

interface PreviewBox {
    data: PreviewExample[],
    buttonText: string,
    pagePath: string,
    excited?: boolean
}

export default function PreviewBox({data,buttonText,pagePath,excited}: PreviewBox) {
    const router = useRouter();
    const [hoverState, sethoverState] = useState()
    return (
        <>
            <Box className="index-element-cont" sx={{
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
                {data.map((element) => {
                    return (
                        <ColumnCard 
                            size={{
                                width: "200px", 
                                height: "200px"
                            }} 
                            img={element.image} 
                            alt={element.image}
                            imgPlacement={"vertical"}
                            mainBoxSx={{height: "300px", textAlign: "center"}}
                            >
                        <Typography>{element.text}{excited && "!"}</Typography>
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
                <Button className='index-element-button' variant='outlined' sx={{
                    position: "absolute",
                    opacity: "0.2",
                    transition: "all 0.5s",
                    ":hover": {
                        backgroundColor: "secondary.main",
                        scale: "1.05",
                        opacity: "1"
                    },
                    width: "15em",
                    height: "fit-content",
                    paddingY: "0.5em",
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    margin: "auto",
                    zIndex: "999",
                    transform: "scale(1)"
                    }} onClick={() => router.push(pagePath)}>
                    {buttonText}
                </Button>
            </Box>
        </>
    )
}