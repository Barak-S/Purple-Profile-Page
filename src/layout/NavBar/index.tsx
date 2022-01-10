import React, { FC, useState } from 'react';
import { colors, StyleProps } from '../../styles';
import { AppBar, Container, useMediaQuery, useTheme, Button, makeStyles } from '@material-ui/core';
import Logo from '../../assets/images/Logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import SocialSection from '../../components/SocialSection';
import { useHistory } from 'react-router-dom';
import NavMenuItem from './components/NavMenuItem';

type Props = StyleProps;

const NavBarLayout: FC<Props> = ({ style }) => {
    const theme = useTheme();
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container className={classes.container}>
                <div className={classes.navigationBar}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <img 
                            onClick={()=> !isMobile ? history.push('/') : undefined}
                            src={Logo} 
                            style={{ 
                                height: isMobile ? open ? 36 : 52 : 104, 
                                cursor: 'pointer' ,
                                display: isMobile ? 'none' : 'initial'
                            }} 
                        /> */}
                    </div>
                    {isMobile && (
                        open ? 
                        (<FiX size={32} className={classes.menuToggle} onClick={()=>setOpen(false)} />)
                        :
                        (<FiMenu size={32} color={colors.purple} className={classes.menuToggle} onClick={()=>setOpen(true)} />)
                    )}
                </div>
            </Container>
            {isMobile ? (
                <div className={classes.mobileMenu} style={{ transform: open ? 'translateX(0%)' : 'translateY(-100%)', transition: '0.3s ease'}}>
                </div>
            ):(
                undefined
            )}
        </AppBar>
    );
};

  const useStyles = makeStyles(theme => ({
    container: {
        height: 88,
        maxWidth: 1730,
        display: 'flex',
        width: '100%',
        zIndex: 999,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: 990,
        backgroundColor: colors.white,
    },
    connectWallet: {
        width: 238,
        height: 72,
        border: `3px solid ${colors.white}`,
        backgroundColor: colors.white,
        color: colors.black,
        fontWeight: 500,
        borderRadius: 36,
        marginLeft: 41,
        fontSize: 19,
        '&:hover': {
            backgroundColor: '#464545',
            color: colors.white,
        },
        [theme.breakpoints.down('sm')]: {
            border: `3px solid ${colors.white}`,
            backgroundColor: colors.black,
            color: colors.white,
            margin: '0 auto',
            marginBottom: 16,
        }
    },
    menuToggle: {},
    mobileMenu: {
        height: '100%',
        backgroundColor: colors.purple,
        width: '100%',
        display: 'flex',
        zIndex: 990,
        position: 'fixed',
    },
    navigationBar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'start',
        }
    },
  }))

export default NavBarLayout;