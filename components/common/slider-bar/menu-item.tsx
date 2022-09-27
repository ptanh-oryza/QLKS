import { Stack, Typography, Link as MuiLink, Tooltip } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface IMenuItemCompProps {
    Icon: any;
    href: string;
    title: string;
}

export default function MenuItemComp({ Icon, href, title }: IMenuItemCompProps) {
    const router = useRouter();
    return (
        <Link href={href} passHref>
            <MuiLink>
                <Tooltip title={title} placement="right" arrow>
                    <Stack
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        sx={{
                            mt: 2,
                            cursor: 'pointer',
                            color: router.asPath == href ? '#fff' : '#ddd',
                            borderRadius: '10px',
                            bgcolor: router.asPath == href ? '#000' : '#2C3E4C',
                            p: '5px',
                            ':hover': {
                                color: '#fff',
                                bgcolor: '#2c3e4c',
                            },
                            border: router.asPath == href ? '1px solid white' : '1px solid black',
                        }}
                    >
                        <Stack
                            sx={{
                                width: '40px',
                                height: '40px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Stack sx={{ width: '25px', height: '25px' }}>
                                <Icon />
                            </Stack>
                        </Stack>
                    </Stack>
                </Tooltip>
            </MuiLink>
        </Link>
    );
}
