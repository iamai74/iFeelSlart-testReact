import React from 'react';
import {Paper} from "@material-ui/core";
import {LayoutProps, useStyles} from "./Consts";

export function DefBack(props: LayoutProps): JSX.Element {
    const classes = useStyles();
    return (
        <Paper className={classes.background} >
            {props.children}
        </Paper>
    );
}