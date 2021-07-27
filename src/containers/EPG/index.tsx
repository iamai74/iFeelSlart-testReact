import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {DefBack} from "../defaults/DefBack";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 240,
        width: 300,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export function EPG(): JSX.Element {
    const classes = useStyles();
    return (
        <DefBack>
            <Grid container justifyContent="center" spacing={4}>
                {[0, 1, 2, 3, 4].map((value) => (
                    <Grid key={value} item>
                        <Paper className={classes.paper}>
                            <Typography>{value}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </DefBack>
    );
}