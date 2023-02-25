import { Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material"
import { Box } from "@mui/material"
import { IconLink } from "./IconLink"

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
    return (
        <>
            <Box sx={{...footerCSS}}>

                <IconLink 
                    title='Our Instagram' 
                    Icon={Instagram} 
                    link='https://www.instagram.com/idd_org/'
                />

                <IconLink 
                    title='Our Youtube'
                    Icon={YouTube}
                    link='https://www.youtube.com/channel/UCo0ZCGujZ7lFRlBMPLN5P4A'
                />

                <IconLink 
                    title="Our Twitter"
                    Icon={Twitter}
                    link='https://twitter.com/iddorg'
                />

                <IconLink 
                    title="Our Linkedin"
                    Icon={LinkedIn}
                    link='https://www.linkedin.com/in/iklim-de%C4%9Fi%C5%9Fmeden-de%C4%9Fi%C5%9F-083511244/'
                />

            </Box>
        </>
    )
}