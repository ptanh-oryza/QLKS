import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Logo from '@/images/icon/logo.png';
import LogoBlack from '@/images/icon/logo-black.png';
import { Router, useRouter } from 'next/router';
import Image from 'next/image';
import HomeIcon from '@/images/account/home.svg';

export interface IHeaderMenuSliderProps {
    setOpen: any;
}

export default function HeaderMenuSlider({ setOpen }: IHeaderMenuSliderProps) {
    const router = useRouter();
    const [darkModes, setDarkModes] = useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setDarkModes(window.localStorage.darkLine);
    });

    return (
        <Stack
            sx={{
                bgcolor: darkModes == 'true' ? 'black' : '#000',
                height: '80px',
                alignItems: 'center',
                width: '100%',
                position: { sm: 'fixed' },
            }}
            direction={'row'}
        >
            <Stack
                width={'100%'}
                sx={{
                    ml: 2,
                    mr: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Stack
                    sx={{ cursor: 'pointer', width: '100px' }}
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    <Image src={darkModes == 'true' ? Logo : Logo} alt="logo" />
                </Stack>
                <Stack onClick={() => setOpen(true)}>
                    <Stack sx={{ width: '18px' }}>
                        <Image src={HomeIcon} alt="Lỗi"></Image>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
