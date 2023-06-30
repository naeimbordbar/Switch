import React from "react";
import clsx from "clsx";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const Styles = makeStyles((theme) => ({
    label: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    root: {
        width: 100,
        height: 30,
        padding: 0,
        backgroundColor: "#C4C4C4",
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
    },
    itemContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
    },
    item: {
        textAlign: "center",
        color: "#fff",
    },
    bullet: {
        width: "50%",
        position: "absolute",
        height: "100%",
        backgroundColor: "#BE1818",
        borderRadius: 20,
        zIndex: 1,
        right: 0,
        transition: "all .3s",
    },
    checked: {
        right: "calc(100% - 50px)",
        backgroundColor: "#299959",
        transition: "all .3s",
    },
}));

const ShowableSwitch = ({ onChange, value, label, style, labelStyle }) => {
    const classes = Styles();
    const changeSwitch = () => {
        onChange(!value);
    };
    return (
        <Grid container style={style}>
            <Typography className={labelStyle ?? classes.label}>
                {label}
            </Typography>
            <Grid
                container
                className={classes.root}
                onClick={(e) => changeSwitch()}
            >
                <Grid item xs={6} className={classes.itemContainer}>
                    <Typography className={classes.item}>Yes</Typography>
                </Grid>
                <Grid item xs={6} className={classes.itemContainer}>
                    <Typography className={classes.item}>No</Typography>
                </Grid>
                <div
                    className={
                        value
                            ? clsx(classes.bullet, classes.checked)
                            : classes.bullet
                    }
                ></div>
            </Grid>
        </Grid>
    );
};
export default ShowableSwitch;
