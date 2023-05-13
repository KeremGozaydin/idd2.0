import { GlobalContext } from "@/context/global";
import { Box, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";

interface anyany {
    [key: string]: any
}

let enENText:anyany = {
    headers: {
        h3: "Welcome!",
        h5: "to our CO2 Emissions Estimate Calculator!",
    },
    textFields: {
        electricity: {
            id: "electricity",
            label: "Electricity",
            helperText: "Please enter how much electricity you use in a month in kwh.",
        },
        naturalGas: {
            id: "naturalGas",
            label: "Natural Gas",
            helperText: "Please enter how much natural gas you use in a month in m^3. Skip if you don't use gas.",
        },
        carFuel: {
            id: "carFuel",
            label: "Car Fuel",
            helperText: "Please enter how much fuel you use in a month in liters. Skip if you don't use a car.",
        },
        eatingStyle: {
            id: "eatingStyle",
            label: "Eating Style",
            helperText: "Please select your eating style.",
        }
    },
    resultText: {
        good: "You are doing great!",
        average: "Right around the average.",
        bad: "You should consider reducing your emissions!"
    },
    result: "Result is "
}

let trTRText:anyany = {
    headers: {
        h3: "Hoşgeldiniz!",
        h5: "CO2 Emisyon Tahmin Hesaplayıcımıza hoşgeldiniz!",
    },
    textFields: {
        electricity: {
            id: "electricity",
            label: "Elektrik",
            helperText: "Lütfen bir ayda kullandığınız elektrik miktarını kwh cinsinden giriniz.",
        },
        naturalGas: {
            id: "naturalGas",
            label: "Doğal Gaz",
            helperText: "Lütfen bir ayda kullandığınız doğal gaz miktarını m^3 cinsinden giriniz. Doğal gaz kullanmıyorsanız boş bırakınız.",
        },
        carFuel: {
            id: "carFuel",
            label: "Araba Yakıtı",
            helperText: "Lütfen bir ayda kullandığınız araba yakıtı miktarını litre cinsinden giriniz. Araba kullanmıyorsanız boş bırakınız.",
        },
        eatingStyle: {
            id: "eatingStyle",
            label: "Yeme Stili",
            helperText: "Lütfen yeme stilinizi seçiniz.",
        }
    },
    resultText: {
        good: "Çok iyi gidiyorsunuz!",
        average: "Ortalama civarındasınız.",
        bad: "Emisyonlarınızı azaltmayı düşünmelisiniz!"
    },
    result: "Sonuç "
}


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
    labelEn: "Select",
    labelTr: "Seçiniz",
    value: 0
},
{
    labelEn: "Vegan",
    labelTr: "Vegan",
    value: 1059
},
{
    labelEn: "Vegetarian",
    labelTr: "Vejetaryen",
    value: 1387
},
{
    labelEn: "Omnivore",
    labelTr: "Omnivor",
    value: 2372
}
]

export default function CO2() {
    let {locale} = useRouter();
    let usedText = locale === "en-EN" ? enENText : trTRText;
    let {setCo2Values, co2Values, co2Result} = useContext(GlobalContext);
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
                <Typography variant="h3">{usedText["headers"].h3}</Typography>
                <Typography variant="h5">{usedText["headers"].h5}</Typography>
                <Box sx={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        alignItems: "left",
                        border: "1px solid black",
                        boxShadow: 4,
                        width: "500px",
                        padding: "2em",
                        borderRadius: "10px",
                        gap:"1em"
                }}>
                    {
                        Object.keys(usedText["textFields"]).map((key,index) => {
                            if (index === 3) return 
                            return (
                                <TextField 
                                    key={key}
                                    id={usedText["textFields"][key].id}
                                    label={usedText["textFields"][key].label}
                                    variant="outlined"
                                    helperText={usedText["textFields"][key].helperText}
                                    onChange={handleChange}
                                />
                            )
                        })
                    }
                    <TextField 
                        id="eatingStyle"
                        select
                        label={usedText["textFields"]["eatingStyle"].label}
                        variant="outlined"
                        helperText={usedText["textFields"]["eatingStyle"].helperText}
                        onChange={handleEatingStyleChange}
                        SelectProps={{
                            native: true,
                          }}
                    >
                        {eatingStyle.map((option) => {
                            return (
                                <option value={option.value}>
                                    {locale === "en-US" ? option.labelEn: option.labelTr}
                                </option>
                            )
                        })
                        }
                    </TextField>
                </Box>
                <Typography variant="h3">{usedText["result"]}{Math.round((co2Result * 100))/100}</Typography>
                <Typography>{
                    co2Result === 0 ? "" :
                    Math.round((co2Result * 100))/100 < 8000 ? usedText["resultText"].good :
                    Math.round((co2Result * 100))/100 < 12000 ? usedText["resultText"].average :
                    usedText["resultText"].bad
                }</Typography>
            </Box>
        </div>
    )
}