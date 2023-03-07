import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import pb from "@/lib/base"
import { useEffect, useState } from "react";
import { Record } from "pocketbase";
import Image from "next/image";
import ImageCard from "@/components/ColumnCard";
import { isJSDocImplementsTag } from "typescript";
import { AnyMxRecord } from "dns";
import { IconLink } from "@/components/IconLink";
import { LinkedIn, Mail } from "@mui/icons-material";

interface uye extends Record {
    isim: string,
    rol: string,
    img_link: string
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function AboutPage() {
    let [uyeler, setUyeler] = useState<null | uye[]>();
    
    useEffect(() => {
        async function fetchUyeler() {
            setUyeler(await (await pb.collection('team_members').getFullList(undefined,{expand:'socials(user_id)'})));
        }
        fetchUyeler();
    },[])

    return (
        <>
            <div className="page">
                <Box
                    sx={{
                        display: 'flex',
                        flexFlow: 'wrap row',
                        gap: '2em',
                        justifyContent: "center",
                        padding: "2em"
                    }}
                >
                    {uyeler?.map((record,index) => record.export()).map((record,index) => {
                        const {isim,rol,img_link} = record
                        const socials = record.expand["socials(user_id)"]

                        return (
                            <ImageCard 
                                key={index}
                                img={img_link} 
                                alt={isim} 
                                imgPlacement={index % 2 === 0 ? "left" : "right"} 
                                contentBoxSx={{
                                    display:"flex",
                                    flexFlow: "column nowrap",
                                    width:"200px",
                                    textAlign:"center",
                                    padding:"1em"
                                }}
                            >
                                <Typography sx={{fontWeight: "500"}} variant="h5">{isim}</Typography>
                                <Typography>{rol}</Typography>
                                <Box sx={{paddingTop: "1em"}}>
                                    {socials.map((social:any,index:number) => {

                                        return (
                                            <IconLink 
                                                key={index}
                                                Icon={social.social_type === "linkedin" ? LinkedIn : Mail} 
                                                link={social.link} 
                                                title={`${isim} ${capitalize(social.social_type)}`}
                                            />
                                        )
                                    })}
                                </Box>
                            </ImageCard>
                        )
                    })}
                </Box>
            </div>
        </>
    )
}