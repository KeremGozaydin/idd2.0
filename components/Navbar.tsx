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
    "/faq": {
      "text": "FAQ",
      "tooltip": "Frequently Asked Questions!",
      "path": "/faq"
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

    const [navMenuAnchorEl, setNavMenuAnchorEl] = useState<null | HTMLElement>();

    let menuOpen = Boolean(navMenuAnchorEl);

    const handleMainMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNavMenuAnchorEl(event.currentTarget);
    };
    const handleMainMenuClose = () => {
        setNavMenuAnchorEl(null);
    };

    useEffect(() => {
        console.log(router.route.split('/')[1]);
    },[])
    return (
        <>
            <AppBar color="secondary">
                <Toolbar>
                <IconButton sx={{mr: 2}} id="menu-navbar" onClick={handleMainMenuClick}>
                    <MenuIcon sx={{color: 'primary.main'}}/>
                </IconButton>

                <Typography sx={{flexGrow: 1}} variant="h6">{router.route.split('/')[1] === '' ? 'home' : router.route.split('/')[1]}</Typography>
                <Menu 
                    open={menuOpen} 
                    anchorEl={navMenuAnchorEl}
                    onClose={handleMainMenuClose}
                >
                    {Object.values(navlinks).map((link:any,index:number) => 
                        router.asPath !== link.path ? 
                        (
                            <Link 
                                key={index}
                                style={{flexGrow: 1}} 
                                onClick={handleMainMenuClose} 
                                href={link.path}
                            >
                                <MenuItem>
                                {link.text}
                                </MenuItem>
                            </Link>
                        ) : ''
                    )}
                </Menu>
                {
                    context.user !== undefined ?
                    <>
                        <Tooltip title={context.user.userName}>
                            <Avatar sx={{bgcolor: 'primary.main', color: 'secondary.main', fontWeight: "600", mr: 2}}>
                                {context.user.userName?.slice(0,1)}
                            </Avatar>
                        </Tooltip>
                        <Button variant="contained">
                            Log Out
                        </Button>
                    </> : 
                        <Typography>Log In</Typography>
                }
                </Toolbar>
            </AppBar>
        </>
    )
}