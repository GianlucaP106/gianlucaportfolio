"use client";

import {Button, TextField} from "@mui/material";
import GButton from "@/components/GButton/GButton";

export interface ContactFormProps {

}

export default function ContactForm(props: ContactFormProps) {
    const textInputStyles = {
        background: "#21262d",
        color: "white",
        input: {
            color: "white",
        },
        "& label": {
            color: "gray",
            fontWeight: 300,
        },
        "& label.Mui-focused": {
            color: "#3acec3",
        },
        "& .MuiOutlinedInput-root": {
            borderColor: "gray",
            "&.Mui-focused fieldset": {
                borderColor: "white",
                borderWidth: 1
            },
            "& fieldset": {
                borderColor: "gray",
            }
        }
    }
    return (
        <div className={"myGradient p-1 rounded-xl"}>
            <div className={"cardBackgroundColor rounded-xl"}>
                <form className={"grid grid-cols-2 gap-5 p-3"}>
                    <div className={"col-span-1"}>
                        <TextField sx={textInputStyles} id="outlined-basic" label="Outlined" variant="outlined"/>
                    </div>
                    <div className={"col-span-1"}>
                        <TextField sx={textInputStyles} id="outlined-basic" label="Outlined" variant="outlined"/>
                    </div>
                    <div className={"col-span-2"}>
                        <TextField fullWidth sx={textInputStyles} id="outlined-basic" label="Outlined"
                                   variant="outlined"/>
                    </div>
                    <div className={"col-span-2"}>
                        <TextField inputProps={{style: {color: "white"}}} multiline rows={4} fullWidth
                                   sx={textInputStyles} id="outlined-basic" label="Outlined" variant="outlined"/>
                    </div>
                    <div className={"col-span-2 flex justify-between"}>
                        <Button
                            variant={"outlined"}
                            sx={{
                                color: "white",
                                "&.MuiButton-outlined": {
                                    color: "white",
                                }
                            }}
                            title={"Reset"}/>
                        <GButton text={"Submit"} handler={() => console.log()}/>
                    </div>
                </form>
            </div>
        </div>
    )
}