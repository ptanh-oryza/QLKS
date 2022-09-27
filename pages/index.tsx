import { EmptyLayout } from '@/components/common';
import { Button, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { NextPageWithLayout } from '../models';
import ParticlesComponents from '@/components/Particles';
import Logo from '@/images/logo.png';
import InputComponent from '@/components/input/input-component';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react';
import InputPasswordComponent from '@/components/input/input-password-component';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
    const [email, setEmail] = useState('');
    const [checkFistLoad, setCheckFistLoad] = useState(false);
    const [pass, setPass] = useState('');
    const router = useRouter();

    //   const handleClickLogin = async () => {
    //     try {
    //         const payload: LoginPayload = {
    //             Email: email,
    //             password: pass,
    //         };
    //         setCheckFistLoad(true);
    //         if (pass.trim() && email.trim()) {
    //             await login(payload);

    //             if (typeof window !== 'undefined') {
    //                 localStorage.setItem('isLogin', '1');
    //                 setTimeout(() => {
    //                     router.push('/');
    //                 }, 500);
    //             }
    //         }
    //     } catch (error: any) {
    //         // console.log(error.response.data.message);
    //         setToat({
    //             mess: 'Tài khoản hoặc mật khẩu không chính xác',
    //             visible: true,
    //             type: 'error',
    //         });
    //         // console.log(error.message);
    //     }
    // };
    const handleEnter = async (e: any) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            // handleClickLogin();
            console.log('first');
        }
    };
    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0',
                backgroundImage: `url(${'./background-login.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100vw',
            }}
        >
            <ParticlesComponents />
            <Paper
                elevation={24}
                sx={{
                    width: 450,
                    mt: { xs: '30%', md: '8%' },
                    height: 550,
                    background: `rgba(84, 186, 185, .4)`,
                    borderRadius: '20px',
                    zIndex: '1',
                }}
            >
                <Stack
                    sx={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        // boxShadow: 'rgba(252, 248, 232, 0.8) 0px 7px 29px 0px',
                        height: 600,
                    }}
                >
                    <Stack sx={{ justifyContent: 'center', marginTop: '5%' }}>
                        <Image src={Logo} width={180} height={150} alt="logo"></Image>
                    </Stack>
                    <Stack
                        sx={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            // marginTop: '50px',
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            component="div"
                            mt={2}
                            sx={{ fontWeight: '500' }}
                        >
                            Đăng nhập tài khoản
                        </Typography>
                        <InputComponent
                            Icon={PersonOutlineIcon}
                            placeholder="Số điện thoại"
                            type="text"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            show={checkFistLoad}
                            messError="Email không được để trống"
                            tabIndex={1}
                        />

                        <InputPasswordComponent
                            Icon={VisibilityIcon}
                            placeholder="Mật khẩu"
                            type="password"
                            value={pass}
                            onChange={(e: any) => setPass(e.target.value)}
                            show={checkFistLoad}
                            messError="Password không được để trống"
                            tabIndex={2}
                            onKeyUp={handleEnter}
                        />
                        {/* <Box
                        sx={{
                            marginTop: '40px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '70%',
                        }}
                    >
                        <FormControlLabel control={<Checkbox />} label="Nhớ mật khẩu" />
                        <Link sx={{ marginTop: '5px', color: '#41A8C3' }} href="#">
                            Quên mật khẩu
                        </Link>
                    </Box> */}
                        <Button
                            variant="contained"
                            sx={{
                                background: '#28A7FF',
                                width: '70%',
                                borderRadius: '20px',
                                padding: '10px',
                                marginTop: '30px',
                            }}
                            className="glow-on-hover"
                            type="submit"
                            onClick={() => router.push('/admin/management-room')}
                            tabIndex={3}
                        >
                            Đăng Nhập
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    );
};
Home.Layout = EmptyLayout;

export default Home;
