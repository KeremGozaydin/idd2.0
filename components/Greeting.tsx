import { Height } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"

interface CardProps {
    img: string,
    alt: string
}

export const ImageCard = ({img,alt}: CardProps) => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '300px',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    color: 'white',
                    backgroundPosition: 'center center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    position: 'relative'
                }}
            > 
                <Image 
                    src={img}
                    fill={true}
                    alt={alt}
                    style={{
                        position: 'absolute',
                    }}
                />
                <Typography 
                    variant="h4"
                    sx={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    selam
                </Typography>
            </Box>
        </>
    )
}