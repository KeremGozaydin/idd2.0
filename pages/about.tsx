import { Box, Typography } from "@mui/material"
import ImageCard from "@/components/ColumnCard";
import { IconLink } from "@/components/IconLink";
import { LinkedIn, Mail } from "@mui/icons-material";
import { DATABASE_ID, TEAM_MEMBERS_ID, databases } from "@/lib/appwrite";
import { localeTrans } from "@/components/translateHooks";

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getStaticProps() {
    let uyeler = (await databases.listDocuments(DATABASE_ID,TEAM_MEMBERS_ID)).documents;
    return {
        props: {
            uyeler
        }
    }
}

export default function AboutPage({uyeler}: {uyeler:any}) {

    return (
        <>
            <div className="page">
                <Box
                    sx={{
                        display: 'flex',
                        flexFlow: 'wrap row',
                        justifyContent: "center",
                        padding: "2em",
                        gap: "3em"
                    }}
                >
                    <Typography variant="h4">{localeTrans("Takimimizla Tanisin!","Meet our Team!")}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexFlow: 'wrap row',
                            gap: '2em',
                            justifyContent: "center"
                        }}
                    >
                        {
                            uyeler?.map((uye:any,index:number) => {
                                let {img_link,isim,rol,rol_en,social_links} = uye
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
                                    <Typography>{localeTrans(rol,rol_en)}</Typography>
                                    <Box sx={{paddingTop: "1em"}}>
                                        {social_links.map((social:any,index:number) => {

                                            return (
                                                <IconLink 
                                                    key={index}
                                                    Icon={social.slice(0,1) === "h" ? LinkedIn : Mail}
                                                    link={social.link} 
                                                    title={`${isim} ${capitalize(social.slice(0,1) === "h" ? "LinkedIn" : "Mail")}`}
                                                />
                                            )
                                        })}
                                    </Box>
                                </ImageCard>)
                            })
                        }
                    </Box>
                </Box>
            </div>
        </>
    )
}