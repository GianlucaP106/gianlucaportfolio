"use client";

import {Button, IconButton, Menu, MenuItem} from "@mui/material";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {Route} from "@/components/Navigation/Navigation";
import Link from "next/link";

export interface HamburgerProps {
    routes: Route[];
}

export default function Hamburger(props: HamburgerProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (route: Route) => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon sx={{color: "white"}} fontSize={"large"} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {props.routes.map((route: Route, index: number) => {
                    return (
                        <MenuItem key={index} onClick={() => handleClose(route)}>
                            <Link className={"text-xl px-4 text-black"} href={route.route}>
                                <small>{route.name}</small>
                            </Link>
                        </MenuItem>
                    )
                })}
            </Menu>
        </div>
    );
}