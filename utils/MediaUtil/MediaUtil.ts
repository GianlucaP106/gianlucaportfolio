import {useMediaQuery} from "@mui/material";


export interface Media {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    xxl: boolean;
}

export default function useMedia() {
    const sm = useMediaQuery("(min-width: 640px)");
    const md = useMediaQuery("(min-width: 768px)");
    const lg = useMediaQuery("(min-width: 1024px)");
    const xl = useMediaQuery("(min-width: 1280px)");
    const xxl = useMediaQuery("(min-width: 1536px)");
    return {
        sm,
        md,
        lg,
        xl,
        xxl
    }
}