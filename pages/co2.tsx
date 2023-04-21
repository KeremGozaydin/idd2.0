import { Box, Button, FormControl, OutlinedInput, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CO2() {
    let [DorG, setDorG] = useState("diesel");
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
                        alignItems: "left",
                        border: "1px solid black",
                        boxShadow: 4,
                        width: "500px",
                        height: "500px",
                        padding: "2em",
                        borderRadius: "10px",
                        gap:"1em"
                }}>
                    <TextField
                        id="electricity"
                        label="Electricity"
                        variant="outlined"
                        helperText="Please enter how much electricity you use in a month in kwh."
                    />
                    <FormControl>
                        <InputLabel sx={{backgroundColor: "white", padding:"0.1em",color:"black"}} htmlFor="gasordiesel">{DorG}</InputLabel>
                        <OutlinedInput id="gasordiesel" endAdornment={
                            <InputAdornment position="end">
                                <Button onClick={() => setDorG(DorG == "diesel" ? "gas" : "diesel")}>{DorG == "diesel" ? "D" : "G"}</Button>
                            </InputAdornment>
                        }/>
                    </FormControl>
                </Box>
            </Box>
        </div>
    )
}