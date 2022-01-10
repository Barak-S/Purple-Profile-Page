import React, { FC, useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from '@styles';
import { Typography, Button } from '@material-ui/core';
import { colors } from '../../styles/colors';
import { Caption, DropZone, FormLayout, Select, Stack, TextField, Thumbnail } from '@shopify/polaris';
import { User } from '../../utils/types';

interface Props extends StyleProps {
    user?: User;
    updateUser?: (data: User) => void;
}

const Home: FC<Props> = ({ user, updateUser }) => {
    const classes = useStyles()

    const [formData, setFormData] = useState<User>({})

    const handleChange = (value: string, id: string) => {
        setFormData({...formData, [id]: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let user = formData;
        updateUser && updateUser(user)
    }

    useEffect(()=>user && setFormData(user),[user])

    return (
        <div className={classes.container}>        
            <div className={classes.paperForm}>
                <Typography className={classes.header}>User profile</Typography>
                <div className={classes.formWrapper}>
                    <div className={classes.imageUploadWrapper}>
                        <Typography className={classes.imgHeader}>User profile</Typography>
                        <UploadImage />
                    </div>
                    <div>
                        <FormLayout>
                            <TextField
                                value={formData.title || ''}
                                onChange={(value: string, id: string)=>handleChange(value, id)}
                                label="Job Title"
                                id="title"
                                type="text"
                                autoComplete="off"
                            />
                            <TextField
                                value={formData.current_company || ''}
                                onChange={(value: string, id: string)=>handleChange(value, id)}
                                label="Current Company"
                                id="current_company"
                                type="text"
                                autoComplete="off"
                            />
                            <TextField
                                label="About Yourself"
                                value={formData.bio || ''}
                                onChange={(value: string, id: string)=>handleChange(value, id)}
                                multiline={6}
                                autoComplete="off"
                                id="bio"
                                type="text"
                            />
                             <TextField
                                label="Phone number"
                                value={formData.phone?.toString() || ''}
                                onChange={(value: string, id: string)=>handleChange(value, id)}
                                autoComplete="off"
                                type="tel"
                                id="phone"
                                connectedLeft={
                                    <Select
                                      value={formData.country_code || ''}
                                      label="countryCode"
                                      id="country_code"
                                      onChange={(value: string, id: string)=>handleChange(value, id)}
                                      labelHidden
                                      options={['+972']}
                                    />
                                  }
                            />
                        </FormLayout>
                        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'end' }}>
                            <Button onClick={(e:any)=>handleSubmit(e)}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const UploadImage: FC = () => {
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
    paperForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 15,
        maxWidth: 600,
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
    imgHeader: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#212B36',
        paddingBottom: 23,
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
    },
    imageUploadWrapper: {
        backgroundColor: colors.white,
        boxShadow: '0px 0px 0px 1px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
        borderRadius: 3,
        width: 520,
        height: 301,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 17px',
        marginBottom: 19,
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