import { IconButton, InputBase, Paper, Typography } from '@mui/material';
import * as React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export interface InputComponentProps {
    Icon: any;
    placeholder: string;
    type: string;
    value: string;
    onChange: any;
    show?: boolean;
    messError?: string;
    width?: string | number;
    marginTop?: string | number;
    showTwo?: boolean;
    tabIndex?: number;
}

export default function InputComponent({
    Icon,
    placeholder,
    type,
    value,
    onChange,
    tabIndex,
    show = false,
    messError,
    width = '70%',
    marginTop = '30px',
    showTwo = false,
}: InputComponentProps) {
    const borderPaper: string = show && !value ? 'solid 1px red' : 'solid 1px #41A8C3';
    const mess = !show || value ? '' : messError;
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
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <Icon sx={{ color: '#41A8C3' }} />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    inputProps={{ tabIndex: tabIndex }}
                />
            </Paper>
        </>
    );
}
