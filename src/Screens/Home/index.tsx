import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from '@styles';
import { Typography, Paper } from '@material-ui/core';
import { colors } from '../../styles/colors';
import { Button, Checkbox, Form, FormLayout, TextField, Select } from '@shopify/polaris';
import { User } from '../../utils/types';

interface Props extends StyleProps {
    user?: User;
}

const Home: FC<Props> = ({ user }) => {
    const classes = useStyles()

    useEffect(()=>console.log(user),[user])

    return (
        <div className={classes.container}>
            <div className={classes.paperForm1}>
                <Typography className={classes.header}>{user?.first_name}{'   '}{user?.last_name}</Typography>

            </div>
        
            <div className={classes.paperForm2}>
                <Typography className={classes.header}>User profile</Typography>
                <div className={classes.formWrapper}>
                    <div>
                        <FormLayout>
                            <TextField
                                value={user?.title || ''}
                                readOnly
                                label="Job Title"
                                name="title"
                                type="text"
                                autoComplete="off"
                            />
                            <TextField
                                value={user?.current_company || ''}
                                readOnly
                                label="Current Company"
                                name="currentCompany"
                                type="text"
                                autoComplete="off"
                            />
                            <TextField
                                label="About Myself"
                                value={user?.bio || ''}
                                readOnly
                                multiline={6}
                                autoComplete="off"
                            />
                             <TextField
                                label="About Myself"
                                value={user?.phone || ''}
                                readOnly
                                autoComplete="off"
                                type="text"
                                connectedLeft={
                                    <Select
                                      value={user?.country_code || ''}
                                      label="countryCode"
                                      labelHidden
                                      options={['+972']}
                                    />
                                  }
                            />
                        </FormLayout>
                    </div>
                </div>
            </div>
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
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            alignItems: 'center',
        }
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
        boxShadow: '0px 2px 4px rgba(194, 194, 194, 0.25)',
        [theme.breakpoints.down('sm')]:{
            marginBottom: 26,
            maxWidth: 635,
            marginRight: 0,
        }
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
        boxShadow: '0px 2px 4px rgba(194, 194, 194, 0.25)',
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
        // height: 595,
        background: colors.darkGrey,
        borderRadius: 8,

    }
}))

export default Home;