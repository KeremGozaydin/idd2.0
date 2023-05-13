import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { useRouter } from "next/router"
import MenuIcon from '@mui/icons-material/Menu'
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { GlobalContext } from "@/context/global"

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
    }
}

export default function NavBar() {
    const context = useContext(GlobalContext);
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

                    <Typography variant="h6">{router.locale === "en-US" ? navlinks[router.route]["textEn"] : navlinks[router.route]["textTr"]}</Typography>
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
                                    {router.locale === "en-US" ? navlinks[link]["textEn"]: navlinks[link]["textTr"]}
                                    </MenuItem>
                                </Link>
                            ) : ''
                        )}
                    </Menu>
                </Box>
                {// create a button to change locale}
                }
                <Tooltip title={router.locale === "en-US" ? `Change the language to turkish?` : "Dili ingilizceye cevir?"}>
                    <IconButton sx={{fontSize: "1.25em"}} size="large">
                        <Link href="/" locale={router.locale === "en-US" ? "tr-TR" : "en-US"}>
                            {router.locale === "en-US" ? "EN" : "TR"}
                        </Link>
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    )
}