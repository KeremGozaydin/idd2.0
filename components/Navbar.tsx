import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { useRouter } from "next/router"
import MenuIcon from '@mui/icons-material/Menu'
import { useContext, useState } from "react"
import Link from "next/link"
import { GlobalContext } from "@/context/global"
import { localeTrans, useLocaleText } from "./translateHooks"

interface navlinks {
    [index:string]: {
        textEn: string,
        textTr: string,
        path: any
    }
}

let navlinks: navlinks = {
    "/": {
      "textEn": "Home",
      "textTr": "Anasayfa",
      "path": "/"
    },
    "/about": {
      "textEn": "About Us",
      "textTr": "Hakkımızda",
      "path": "/about"
    },
    "/blogs": {
      "textEn": "Blog",
      "textTr": "Blog",
      "path": "/blogs"
    },
    "/projects": {
      "textEn": "Projects",
      "textTr": "Projelerimiz",
      "path": "/projects"
    },
    "/co2": {
      "textEn": "CO2",
      "textTr": "CO2",
      "path": "/co2"
    },
    '/blogs/[post]': {
        "textEn": "Blog",
        "textTr": "Blog",
        "path": "/blogs/[post]"
    }
}

export default function NavBar() {
    const router = useRouter();
    const [navMenuAnchorEl, setNavMenuAnchorEl] = useState<null | HTMLElement>();

    let menuOpen = Boolean(navMenuAnchorEl);

    const handleMainMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNavMenuAnchorEl(event.currentTarget);
    };
    const handleMainMenuClose = () => {
        setNavMenuAnchorEl(null);
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1em 2em 1em 1em",
                boxShadow: 4,
                width: "100%",
            }} color="secondary">
                <Box sx={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    gap: "1em",
                    alignItems: "center"
                }}>
                    <IconButton id="menu-navbar" onClick={handleMainMenuClick}>
                        <MenuIcon sx={{color: 'primary.main'}}/>
                    </IconButton>

                    <Typography variant="h6">{
                        localeTrans(navlinks[router.route].textTr,navlinks[router.route].textEn)
                    }</Typography>
                    <Menu 
                        open={menuOpen}    
                        anchorEl={navMenuAnchorEl}
                        onClose={handleMainMenuClose}
                    >
                        {Object.keys(navlinks).map((link:any,index:number) => 
                            router.asPath !== navlinks[link]["path"] ? 
                            (
                                <Link 
                                    key={index}
                                    onClick={handleMainMenuClose} 
                                    href={navlinks[link]["path"]}
                                >
                                    <MenuItem>
                                    {localeTrans(navlinks[link]["textTr"],navlinks[link]["textEn"])}
                                    </MenuItem>
                                </Link>
                            ) : ''
                        )}
                    </Menu>
                </Box>
                {// create a button to change locale}
                }
                <Tooltip title={localeTrans("Dili ingilizceye cevir?",`Change the language to turkish?`)}>
                    <IconButton sx={{fontSize: "1.25em"}} size="large">
                        <Link href={router.asPath} locale={router.locale === "tr-TR" ? "en-US" : "tr-TR"}>
                            {localeTrans("TR","EN")}
                        </Link>
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    )
}