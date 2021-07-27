import React from "react";
import {makeStyles} from "@material-ui/core";

export interface LayoutProps  {
    children: React.ReactNode
}

export const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor:'#cdcdcd',
        padding: theme.spacing(4),
        width:'100%'
    },
}));