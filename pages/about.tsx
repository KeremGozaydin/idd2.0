import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import pb from "@/lib/base"
import { useEffect, useState } from "react";
import { Record } from "pocketbase";
import Image from "next/image";

interface uye extends Record {
    isim: string,
    rol: string,
    img_link: string
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
                        gap: '1em 2em',
                        justifyContent: "center",
                        padding: "5em"
                    }}
                >
                    {uyeler?.map((record) => {
                        const {isim,rol,img_link} = record.export()
                        const socials = record.expand['socials(user_id)']
                        console.log(socials)
                        return (
                            <Card>
                                <CardMedia sx={{
                                    width: "300px",
                                    height: "300px",
                                    position: "relative"
                                }}>
                                    <Image src={img_link} alt={isim} fill={true}/>
                                </CardMedia>
                                <CardContent>
                                    <Typography sx={{fontWeight: "500"}} variant="h5">{isim}</Typography>
                                    <Typography>{rol}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
                </Box>
            </div>
        </>
    )
}