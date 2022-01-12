import React, { FC, useState } from 'react';
import { colors, StyleProps } from '../../styles';
import { AppBar, Container, useMediaQuery, useTheme, Button, makeStyles } from '@material-ui/core';
import Logo from '../../assets/images/Logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import ProfileAvatar from '../../components/ProfileAvatar';
import { routes } from '../../core/routes';

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
                    <img 
                        onClick={()=>history.push(routes.index)}
                        src={Logo} 
                        style={{ 
                            height: 22, 
                            cursor: 'pointer' ,
                            display: 'initial'
                        }} 
                    />
                    <ProfileAvatar handleClick={()=>history.push(routes.editProfile)} className={classes.avatar} />
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
        zIndex: 990,
        backgroundColor: colors.white,
        boxShadow: '0px 2px 4px rgba(194, 194, 194, 0.25)',
    },
    menuToggle: {
        position: 'absolute',
        left: 10
    },
    mobileMenu: {
        height: '100%',
        backgroundColor: colors.purple,
        width: '100%',
        display: 'flex',
        zIndex: 990,
    },
    navigationBar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'center',
        }
    },
    avatar: {
        height: 44,
        width: 44,
        marginBottom: 0,
        cursor: 'pointer',
        '&:hover': {
            outline: `3px solid ${colors.purple}`
        }
    }
  }))

export default NavBarLayout;