import { IconButton, InputBase, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export interface InputPasswordComponentProps {
    Icon: any;
    placeholder: string;
    type: string;
    value: string;
    onChange: any;
    onKeyUp?: any;
    show?: boolean;
    messError?: string;
    width?: string | number;
    marginTop?: string | number;
    showTwo?: boolean;
    tabIndex?: number;
}

export default function InputPasswordComponent({
    Icon,
    placeholder,
    type,
    value,
    onChange,
    onKeyUp,
    tabIndex,
    show = false,
    messError,
    width = '70%',
    marginTop = '30px',
    showTwo = false,
}: InputPasswordComponentProps) {
    const [checkPass, setCheckPass] = useState(false);
    const borderPaper: string = show && !value ? 'solid 1px red' : 'solid 1px #41A8C3';
    const mess = !show || value ? '' : messError;
    const handleClickShowPassword = () => {
        setCheckPass(!checkPass);
    };
    return (
        <>
            <Typography
                sx={{ marginTop: marginTop, width: width, color: 'red' }}
                variant="body2"
                gutterBottom
                component="div"
                ml={5}
            >
                {mess}
                {!showTwo || mess ? '' : messError}
            </Typography>

            <Paper
                // ref={emailPaper}
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: width,
                    border: borderPaper,
                    borderRadius: '15px',
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={placeholder}
                    type={checkPass ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    inputProps={{ tabIndex: tabIndex }}
                    startAdornment={
                        <IconButton
                            sx={{ p: '10px' }}
                            aria-label="menu"
                            onClick={handleClickShowPassword}
                        >
                            <Icon sx={{ color: '#41A8C3' }} />
                        </IconButton>
                    }
                    onKeyDown={onKeyUp}
                />
            </Paper>
        </>
    );
}
