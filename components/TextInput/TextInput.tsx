"use client"

import { TextField } from "@mui/material"
import { ComponentProps } from "react";


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

type TextInputProps = {
    inputProps?: ComponentProps<"input">;
    label: string;
    multiline?: boolean;
    error?: string;
    required?: boolean;
}

export default function TextInput(props: TextInputProps) {
    const err: boolean = !!props.error;
    return (
        <div>
            {props.multiline &&
                <TextField required={props.required} inputProps={{ style: { color: "white" }, ...props.inputProps }} multiline rows={4} fullWidth
                    sx={textInputStyles} error={err} id="outlined-basic" label={props.label} variant="outlined" />
            }
            {!props.multiline &&
                <TextField sx={textInputStyles} required={props.required} error={err} id="outlined-basic" fullWidth label={props.label} inputProps={{ ...props.inputProps }} variant="outlined" />
            }
            {err && <p className="text-red-500 text-sm mt-2 ml-1">{props.error}</p>}
        </div>
    )
}
