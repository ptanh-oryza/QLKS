import { Button, Card, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';
import ImageDefault from '@/images/default_room.jpg';
import { Scale } from '@mui/icons-material';

export interface IRoomCompProps {
    numberRoom: string;
    idRoom: string;
    status: number;
    errorRoom?: boolean;
}

export default function RoomComp(props: IRoomCompProps) {
    const { numberRoom, idRoom, status, errorRoom } = props;
    return (
        <Stack
            sx={{
                width: '18rem',
                bgcolor: 'rgba(0, 255, 204, .6)',
                borderRadius: '15px',
                '&:hover': { transform: 'scale(1.1)' },
                transition: 'all .3s linear',
                m: 3,
            }}
        >
            <Stack
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    pl: 1,
                    pr: 2,
                    alignItems: 'center',
                    height: '40px',
                }}
            >
                <Typography
                    sx={{ color: 'black', fontSize: '16px', fontWeight: 700, lineHeight: '17px' }}
                >
                    Phòng {numberRoom}
                </Typography>
                <Typography
                    sx={{ color: 'blue', fontSize: '16px', fontWeight: 700, lineHeight: '17px' }}
                >
                    {status == 0 ? 'Còn' : 'Hết'}
                </Typography>
            </Stack>
            <Stack>
                <Card>
                    <CardMedia
                        component="img"
                        image={ImageDefault.src}
                        alt="Lỗi"
                        sx={{ width: '18rem' }}
                    />
                </Card>
            </Stack>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', p: 1 }}>
                {status == 2 ? (
                    <Stack
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'red',
                                fontSize: '18px',
                                fontWeight: 700,
                                lineHeight: '19px',
                            }}
                        >
                            Phòng đang sửa chữa
                        </Typography>
                    </Stack>
                ) : (
                    <>
                        {status == 1 ? (
                            <Stack
                                sx={{
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                            >
                                <Button
                                    className="animated-button1"
                                    sx={{
                                        background: 'rgba(204, 255, 204)',
                                        width: '45%',
                                        borderRadius: '45px',
                                    }}
                                >
                                    Tính Tiền
                                </Button>
                                <Button
                                    className="glow-on-hover"
                                    sx={{
                                        background: 'rgba(255, 153, 102, 0.7)',
                                        width: '45%',
                                        height: '100%',
                                        borderRadius: '45px',
                                        color: 'black',
                                        '&::after': {
                                            background: 'rgba(255, 153, 102, 0.7)',
                                        },
                                    }}
                                >
                                    Bỏ Phòng
                                </Button>
                            </Stack>
                        ) : (
                            <>
                                <Button
                                    className="animated-button1"
                                    sx={{ bgcolor: 'black', width: '45%', borderRadius: '45px' }}
                                >
                                    Cho Thuê
                                </Button>
                                <Button
                                    className="glow-on-hover"
                                    sx={{
                                        bgcolor: 'black',
                                        width: '45%',
                                        borderRadius: '45px',
                                        height: '100%',
                                    }}
                                >
                                    Phòng Hư
                                </Button>
                            </>
                        )}
                    </>
                )}
            </Stack>
        </Stack>
    );
}
