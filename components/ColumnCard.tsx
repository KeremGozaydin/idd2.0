import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { PropsWithChildren } from "react";

interface sizeprop {
    height?: string,
    width?: string
}

interface ColumnCard extends PropsWithChildren{
    img: string,
    alt: string,
    imgPlacement?: 'left' | 'right' | "vertical",
    mainBoxSx?: SxProps<Theme>,
    contentBoxSx?: SxProps<Theme>,
    size?: sizeprop
}

export default function ImageCard(props: ColumnCard) {
    const {img,alt,children,imgPlacement,mainBoxSx,contentBoxSx,size} = props
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'center',
                gap: '1em',
                boxShadow: 4,
                borderRadius: '16px',
                padding: '1em',
                flexDirection: imgPlacement === 'right' ? 'row-reverse' : imgPlacement === "vertical" ? "column" : 'row',
                backgroundColor: "secondary.main",
                width: "fit-content",
                height: "fit-content",
                ...mainBoxSx
            }}>
                <Box sx={{
                    border: '0',
                    width: size?.width ?? '300px',
                    height: size?.height ?? '300px',
                    position: "relative"
                }}>
                    <Image src={img} alt={alt} fill style={{borderRadius: '1em'}}/>
                </Box>
                {          
                    children ?    
                    <Box sx={contentBoxSx}>
                        {children}
                    </Box>
                    : ''
                }
            </Box>            
        </>
    )
}