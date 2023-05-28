import { Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material"
import { Box } from "@mui/material"
import { IconLink } from "./IconLink"
import { useLocaleText } from "./translateHooks"

const tr = {
    instagram: "Instagramımız",
    youtube: "Youtube Kanalımız",
    twitter: "Twitter Hesabımız",
    linkedin: "Linkedin Hesabımız"
}

const en = {
    instagram: "Our Instagram",
    youtube: "Our Youtube Channel",
    twitter: "Our Twitter Account",
    linkedin: "Our Linkedin Account"
}

let footerCSS = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'secondary.main',
    color: 'primary.main',
    py: '0.5em',
    gap: '0.1em',
    width: '100vw',
    zIndex: 2,
    boxShadow: 4
}

let iconCSS = {
    color: "primary.main",
    bgcolor: 'secondary.main'
}


export const Footer = () => {
    let text = useLocaleText(tr,en);

    return (
        <>
            <Box sx={{...footerCSS}}>

                <IconLink 
                    title={text["instagram"]}
                    Icon={Instagram} 
                    link='https://www.instagram.com/idd_org/'
                />

                <IconLink 
                    title={text["youtube"]}
                    Icon={YouTube}
                    link='https://www.youtube.com/channel/UCo0ZCGujZ7lFRlBMPLN5P4A'
                />

                <IconLink 
                    title={text["twitter"]}
                    Icon={Twitter}
                    link='https://twitter.com/iddorg'
                />

                <IconLink 
                    title={text["linkedin"]}
                    Icon={LinkedIn}
                    link='https://www.linkedin.com/in/iklim-de%C4%9Fi%C5%9Fmeden-de%C4%9Fi%C5%9F-083511244/'
                />

            </Box>
        </>
    )
}