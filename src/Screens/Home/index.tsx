import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from '@styles';
import { Typography, Grid, Paper } from '@material-ui/core';
import { colors } from '../../styles/colors';

type Props = StyleProps;

const Home: FC<Props> = ({ style }) => {
    const classes = useStyles()
    return (
        <div className={classes.container} style={style}>
            <Paper className={classes.paperForm1}>

            </Paper>
        
            <Paper className={classes.paperForm2}>
                <Typography className={classes.header}>User profile</Typography>
                <div className={classes.formWrapper}>

                </div>
            </Paper>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: colors.grey,
        padding: 20,
        paddingTop: 141,
    },
    paperForm1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: colors.white,
        maxWidth: 255,
        width: '100%',
        borderRadius: 15,
        height: 196,
        marginRight: 30,
    },
    paperForm2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 15,
        maxWidth: 635,
        width: '100%',
    },
    header: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 700,
        lineHeight: 1,
        paddingBottom: 20,
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20,
        maxWidth: 594,
        width: '100%',
        height: 595,
        background: colors.darkGrey,
        borderRadius: 8,

    }
}))

export default Home;