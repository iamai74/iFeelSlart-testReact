import React from "react";
import {LayoutProps} from "./Consts";
import {Grid} from "@material-ui/core";

export function DefGrid(props: LayoutProps): JSX.Element{
    return (
        <Grid container justifyContent="center" spacing={4}>
            {props.children}
        </Grid>
    );
}