import { Box, Button, TextField, Typography } from "@mui/material";

export default function Contacts() {
    return (
        <Box sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            width: 'calc(100% - 4em)',
            margin: '2em',
            backgroundColor: 'secondary.main',
            color: 'primary.main',
            paddingY: '1em',
            boxShadow: 3,
            paddingX: '2em',
            gap: '2em',
            maxWidth: '768px'
        }}>
            <Typography variant="h4">Get in contact with us!</Typography>
            <form action={"mailto:idd@gmail.com"} method='get' encType="text/plain">
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    alignItems: 'center',
                    gap: '1em',
                }}>
                    <TextField 
                        type='text'
                        placeholder="Enter the subject"
                        label='Subject'
                        variant="outlined"
                        fullWidth
                        required
                        name="subject"
                        sx={{
                            width: '20em',
                            marginBottom: '0.5em'
                        }}
                    />
                    <TextField 
                        type=''
                        placeholder="Enter the body"
                        label='Body'
                        variant="outlined"
                        fullWidth
                        multiline
                        required
                        name="body"
                        sx={{
                            width: '20em'
                        }}
                    />
                    <Button sx={{
                        width: '12em',
                        paddingY: '0.75em'
                    }} variant="outlined" type='submit'>
                        Send
                    </Button>
                </Box>
            </form>
        </Box>
    )
}