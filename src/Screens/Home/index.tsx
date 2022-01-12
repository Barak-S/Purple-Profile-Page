import React, { FC, useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from '@styles';
import { Typography } from '@material-ui/core';
import { colors } from '../../styles/colors';
import { Caption, DropZone, FormLayout, Select, Stack, TextField, Thumbnail } from '@shopify/polaris';
import { User } from '../../utils/types';
import ProfileAvatar from '../../components/ProfileAvatar';

interface Props extends StyleProps {
    user?: User;
}

const Home: FC<Props> = ({ user }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.paperForm1}>
                <ProfileAvatar profile_picture={user?.profile_picture} />
                <Typography className={classes.name}>{user?.first_name}{'   '}{user?.last_name}</Typography>
                <Typography className={classes.email}>{user?.email}</Typography>
            </div>
        
            <div className={classes.paperForm2}>
                <Typography className={classes.header}>User profile</Typography>
                <div className={classes.formWrapper}>
                    <div>
                        <FormLayout>
                            <TextField
                                value={user?.title || ''}
                                readOnly={true}
                                label="Job Title"
                                name="title"
                                type="text"
                                autoComplete="off"
                            />
                            <TextField
                                value={user?.current_company || ''}
                                readOnly={true}
                                label="Current Company"
                                name="currentCompany"
                                type="text"
                                autoComplete="off"
                            />
                            <TextField
                                label="About Myself"
                                value={user?.bio || ''}
                                readOnly={true}
                                multiline={6}
                                autoComplete="off"
                            />
                             <TextField
                                label="About Myself"
                                value={user?.phone?.toString() || ''}
                                readOnly={true}
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

function UploadImage() {
    const [files, setFiles] = useState<any>([]);
  
    const handleDropZoneDrop = useCallback(
      (_dropFiles, acceptedFiles, _rejectedFiles) =>
        setFiles((files: any) => [...files, ...acceptedFiles]),
      [],
    );
  
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  
    const fileUpload = !files.length && <DropZone.FileUpload />;
    const uploadedFiles = files.length > 0 && (
      <Stack vertical>
        {files.map((file: any, index: number) => (
          <Stack alignment="center" key={index}>
            <Thumbnail
              size="small"
              alt={file.name}
              source={
                validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : ''
              }
            />
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    );
  
    return (
      <DropZone onDrop={handleDropZoneDrop}>
        {uploadedFiles}
        {fileUpload}
      </DropZone>
    );
  }

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: colors.grey,
        padding: 20,
        paddingTop: 141,
        minHeight: '100vh',
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
        maxHeight: 685,
        height: '100%',
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
        background: colors.darkGrey,
        borderRadius: 8,
    },
    name: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 700,
        lineHeight: 1,
        paddingBottom: 8,
    },
    email: {
        fontSize: 16,
        color: colors.textGrey,
        fontWeight: 400,
        lineHeight: 1,
    },
    avatar: {
        width: 84,
        height: 84,
        marginBottom: 19,
    }
}))

export default Home;