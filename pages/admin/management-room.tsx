import { AdminLayout } from '@/components/common';
import RoomComp from '@/components/room';
import { Stack, Typography } from '@mui/material';
import React from 'react';

export interface IManagementRoomProps {}

export default function ManagementRoomPage(props: IManagementRoomProps) {
    return (
        <Stack>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center', pb: 2 }}>
                <Typography
                    sx={{
                        fontSize: '42px',
                        fontWeight: 700,
                        lineHeight: '20px',
                        pt: 5,
                    }}
                >
                    QUẢN LÝ PHÒNG
                </Typography>
            </Stack>
            <Stack
                sx={{
                    color: 'black',
                    p: 4,
                    pt: 2,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    maxHeight: '90vh',
                    overflow: 'auto',
                    ' &::-webkit-scrollbar': {
                        width: '6px',
                        height: '10px',
                        bgcolor: 'black',
                        cursor: 'pointer',
                    },
                    ' &::-webkit-scrollbar-thumb': {
                        background: 'aqua',
                        borderRadius: '6px',
                        width: '6px',
                        cursor: 'pointer',
                    },
                }}
            >
                <RoomComp numberRoom={'1'} idRoom={'1'} status={0} />
                <RoomComp numberRoom={'2'} idRoom={'2'} status={1} />
                <RoomComp numberRoom={'3'} idRoom={'3'} status={2} />
                <RoomComp numberRoom={'4'} idRoom={'4'} status={0} />
                <RoomComp numberRoom={'5'} idRoom={'5'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
                <RoomComp numberRoom={'6'} idRoom={'6'} status={0} />
            </Stack>
        </Stack>
    );
}
ManagementRoomPage.Layout = AdminLayout;
