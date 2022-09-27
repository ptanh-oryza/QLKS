import { Avatar, Divider, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React from 'react';
import AvatarDefault from '@/images/default.png';
import { useRouter } from 'next/router';

export interface IFooterSliderBarProps {}

export default function FooterSliderBar(props: IFooterSliderBarProps) {
    const router = useRouter();
    return (
        <Stack>
            <Avatar
                alt="Lỗi hình ảnh"
                src={AvatarDefault ? AvatarDefault.src : ''}
                sx={{ cursor: 'pointer' }}
                id="demo-positioned-button"
                onClick={() => router.push('/account')}
            />
            <Stack
                sx={{
                    color: 'white',
                    width: 44,
                    fontSize: '10px',
                    fontFamily: 'inter',
                    fontWeight: 300,
                    lineHeight: '12px',
                    alignItems: 'center',
                    mt: '6px',
                }}
            >
                V0.0.1.113
            </Stack>
        </Stack>
    );
}
