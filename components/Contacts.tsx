import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

const texts = {
    "tr-TR": {
        "title": "Bize Ulasin!",
        "subject": "Konu",
        "body": "Mesaj",
        "send": "Gonder"
    },
    "en-US": {
        "title": "Get in contact with us!",
        "subject": "Subject",
        "body": "Message",
        "send": "Send"
    }
}

export default function Contacts() {

    const router = useRouter();

    //@ts-ignore
    const text = texts[router.locale];

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
            <Typography variant="h4">
                {text["title"]}
            </Typography>
            <form action={"mailto:idd@gmail.com"} method='get' encType="text/plain">
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    alignItems: 'center',
                    gap: '1em',
                }}>
                    <TextField 
                        type='text'
                        placeholder={text["subject"]}
                        label={text["subject"]}
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
                        placeholder={text["body"]}
                        label={text["body"]}
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
                        {text["send"]}
                    </Button>
                </Box>
            </form>
        </Box>
    )
}