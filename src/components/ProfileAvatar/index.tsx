import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps, ClassNameProps } from '@styles';
import { Avatar } from '@material-ui/core';
import ProfileIcon from './assets/default-avatar.png';
import classNames from 'classnames';

interface Props extends StyleProps, ClassNameProps{
    profile_picture?: string;
    handleClick?: ()=> void;
}

const ProfileAvatar: FC<Props> = ({ profile_picture, handleClick, className }) => {
    const classes = useStyles()
    return (
        <Avatar
            alt="Profile Picture"
            src={profile_picture ? profile_picture : ProfileIcon}
            className={classNames(classes.avatar, className)}
            onClick={handleClick && handleClick}
        />        
    );
};


const useStyles = makeStyles(theme => ({
    avatar: {
        width: 84,
        height: 84,
        marginBottom: 19,
    }
}))

export default ProfileAvatar;