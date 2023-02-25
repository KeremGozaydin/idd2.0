import { IconButton, SvgIconTypeMap, Tooltip } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

interface IconLinkProps {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    title: string,
    link: string
}

let iconCSS = {
    color: 'primary.main', 
    transition: 'all 0.2s', 
    "&:hover": {
        transform: 'scale(1.05)'
    }
}

export const IconLink = ({Icon, title, link}: IconLinkProps) => {
    let handleClick = (link: string) => {
        return () => {
            window.open(link)
        }
    }

    return (
        <>
                <Tooltip title={title}>
                    <IconButton onClick={handleClick(link)}>
                        <Icon sx={iconCSS} fontSize="large"/>
                    </IconButton>
                </Tooltip>
        </>
    )
}