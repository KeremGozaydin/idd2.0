import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { Url } from "url";

interface ColumnCard extends PropsWithChildren{
    img: string,
    alt: string,
    imgPlacement?: 'left' | 'right'
}

export default function ImageCard(props: ColumnCard) {
    const {img,alt,children,imgPlacement} = props
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
                flexDirection: imgPlacement === 'right' ? 'row-reverse' : 'row'
            }}>
                <Box sx={{
                    width: '300px',
                    height: '300px',
                    position: 'relative',
                    border: '0'
                }}>
                    <Image src={img} alt={alt} fill style={{borderRadius: '1em'}}/>
                </Box>
                {          
                    children ?    
                    <Box>
                        {children}
                    </Box>
                    : ''
                }
            </Box>            
        </>
    )
}