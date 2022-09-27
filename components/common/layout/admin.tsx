import { LayoutProps } from '@/models/index';
import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { LeftBarComponents } from '../slider-bar';

export function AdminLayout({ children }: LayoutProps) {
    return (
        <Stack minHeight="100vh" position="relative" bgcolor={'#B7C4CF'}>
            <Stack minHeight="100vh" position="relative" sx={{ overflow: 'auto', zIndex: 1 }}>
                <Stack flexDirection={'row'} display={{ xs: 'none', sm: 'flex' }}>
                    <LeftBarComponents />
                    <Stack sx={{ height: '100vh', width: 'calc(100% - 70px)' }}>{children}</Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
