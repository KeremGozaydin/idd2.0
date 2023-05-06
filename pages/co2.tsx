import { GlobalContext } from "@/context/global";
import { Box, TextField, Typography } from "@mui/material";
import { useContext } from "react";

let values:
{
    [key:string]: number
} = {
    electricity: 0.38,
    naturalGas: 1.9,
    carFuel: 2.3
}

let eatingStyle = [
{
    label: "Select",
    value: 0
},
{
    label: "Vegan",
    value: 1059
},
{
    label: "Vegetarian",
    value: 1387
},
{
    label: "Omnivore",
    value: 2372
}
]

export default function CO2() {
    let {setCo2Values, co2Values} = useContext(GlobalContext);
    let handleEatingStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) return
        setCo2Values({...co2Values, [event.target.id]: parseInt(event.target.value)})
    }
    let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) return
        setCo2Values({...co2Values, [event.target.id]: parseInt(event.target.value)*values[event.target.id] * 12})
    }

    return (
        <div className="page">
            <Box sx={{
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
                gap: "1em",
                marginTop: "2em"
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
                        onChange={handleChange}
                        type="number"
                    />
                    <TextField 
                        id="naturalGas"
                        label="Natural Gas"
                        variant="outlined"
                        helperText="Please enter how much natural gas you use in a month in m^3. Skip if you don't use gas."
                        onChange={handleChange}
                        type="number"
                    />
                    <TextField 
                        id="carFuel"
                        label="Car Fuel"
                        variant="outlined"
                        helperText="Please enter how much fuel you use in a month in liters. Skip if you don't use a car."
                        onChange={handleChange}
                        type="number"
                    />
                    <TextField 
                        id="eatingStyle"
                        select
                        label="Eating Style"
                        variant="outlined"
                        helperText="Please select your eating style."
                        onChange={handleEatingStyleChange}
                        SelectProps={{
                            native: true,
                          }}
                    >
                        {eatingStyle.map((option) => {
                            return (
                                <option key={option.label} value={option.value}>
                                    {option.label}
                                </option>
                            )
                        })
                        }
                    </TextField>
                </Box>
                <Typography variant="h3">Result is {Math.round(Object.keys(co2Values).reduce((a,b) => a + co2Values[b],0) * 100)/100}</Typography>
                <Typography>{
                    Math.round(Object.keys(co2Values).reduce((a,b) => a + co2Values[b],0) * 100)/100 < 5000 ? "You are doing great!" :
                    Math.round(Object.keys(co2Values).reduce((a,b) => a + co2Values[b],0) * 100)/100 < 8000 ? "Right around the average." :
                    "You should consider reducing your emissions!"
                }</Typography>
            </Box>
        </div>
    )
}