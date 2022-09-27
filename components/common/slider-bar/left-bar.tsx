import { Stack } from '@mui/material';
import React from 'react';
import Logo from '@/images/logo.png';
import FooterSliderBar from './footer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import MenuItemComp from './menu-item';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

export interface ILeftBarComponentsProps {}

export function LeftBarComponents(props: ILeftBarComponentsProps) {
    return (
        <Stack
            sx={{ height: '100vh', width: '60px', bgcolor: '#2C3E4C' }}
            justifyContent={'flex-start'}
            alignItems={'center'}
            zIndex={3}
        >
            <Stack sx={{ height: '90vh' }}>
                <Stack sx={{ width: '50px', marginTop: 2 }}>
                    <Image src={Logo} alt="Lỗi"></Image>
                </Stack>
                <MenuItemComp
                    Icon={HomeOutlinedIcon}
                    href={'/admin/management-room'}
                    title="Quản lý phòng"
                />
                <MenuItemComp
                    Icon={PersonIcon}
                    href={'/admin/management-customer'}
                    title="Quản lý khách qua đêm"
                />
                <MenuItemComp
                    Icon={MonetizationOnOutlinedIcon}
                    href={'/admin/turnover'}
                    title="Doanh thu"
                />
                <MenuItemComp
                    Icon={MoneyOffOutlinedIcon}
                    href={'/admin/spending'}
                    title="Chi tiêu"
                />
                <MenuItemComp
                    Icon={MapsHomeWorkOutlinedIcon}
                    href={'/admin/add-room'}
                    title="Thêm phòng"
                />
                <MenuItemComp
                    Icon={DashboardOutlinedIcon}
                    href={'/admin/dashboard'}
                    title="Dasboard"
                />
            </Stack>
            <Stack>
                <FooterSliderBar />
            </Stack>
        </Stack>
    );
}
