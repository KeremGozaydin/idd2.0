import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { useRouter } from "next/router"
import MenuIcon from '@mui/icons-material/Menu'
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { GlobalContext } from "@/context/global"

interface navlinks {
    [index:string]: {
        text: String,
        tooltip: String,
        path: any
    }
}

let navlinks: navlinks = {
    "/": {
      "text": "Home",
      "tooltip": "Home Page!",
      "path": "/"
    },
    "/about": {
      "text": "About Us",
      "tooltip": "Questions You Might Have For Us!",
      "path": "/about"
    },
    "/blogs": {
      "text": "Blog",
      "tooltip": "Our Blog!",
      "path": "/blogs"
    },
    "/projects": {
      "text": "Projects",
      "tooltip": "Our Projects",
      "path": "/projects"
    },
    "/co2": {
      "text": "CO2",
      "tooltip": "Calculate Your CO2!",
      "path": "/co2"
    }
}

export default function NavBar() {
    const context = useContext(GlobalContext);
    const router = useRouter();

    useEffect(() => {
        Object.keys(navlinks).map((obj) => {
            console.log(navlinks[obj].text)
        })
    },[])

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
            <AppBar color="secondary">
                <Toolbar>
                <IconButton sx={{mr: 2}} id="menu-navbar" onClick={handleMainMenuClick}>
                    <MenuIcon sx={{color: 'primary.main'}}/>
                </IconButton>

                <Typography sx={{flexGrow: 1}} variant="h6">{navlinks[router.route].text}</Typography>
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
                                style={{flexGrow: 1}} 
                                onClick={handleMainMenuClose} 
                                href={navlinks[link]["path"]}
                            >
                                <MenuItem>
                                {navlinks[link]["text"]}
                                </MenuItem>
                            </Link>
                        ) : ''
                    )}
                </Menu>
                </Toolbar>
            </AppBar>
        </>
    )
}