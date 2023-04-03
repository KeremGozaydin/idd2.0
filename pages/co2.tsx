import { Box, TextField, Typography } from "@mui/material";

export default function CO2() {
    return (
        <div className="page">
            <Box sx={{
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
                gap: "1em"
            }}>
                <Typography variant="h3">Welcome!</Typography>
                <Typography variant="h5">to our CO2 Emissions Estimate Calculator!</Typography>
                <Box sx={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        alignItems: "center",
                        border: "1px solid black",
                        boxShadow: 4,
                        width: "500px",
                        height: "500px",
                        borderRadius: "10px"
                }}>
                    <form>
                        <TextField
                            id=""
                            label="Elektrik"
                            variant="outlined"
                            helperText=""
                        />
                        <TextField
                            id=""
                            label=""
                            variant="outlined"
                            helperText=""
                        />
                    </form>
                </Box>
            </Box>
        </div>
    )
}