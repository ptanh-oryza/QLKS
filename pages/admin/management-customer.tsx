import React from 'react';
import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdminLayout } from '@/components/common';

export interface IManagementCustomerProps {}

export default function ManagementCustomer(props: IManagementCustomerProps) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [id, setId] = React.useState('');
    const handleClose = () => setOpenDialog(false);
    const handleOpenDelete = (id: string) => {
        setOpenDialog(true);
        setId(id);
    };
    const handelDelete = async () => {
        setOpenDialog(false);
    };

    return (
        <Stack>
            <Typography
                id="modal-modal-title"
                variant="body1"
                component="div"
                textAlign={'center'}
                sx={{ fontWeight: 'bold', fontSize: '25px', mb: 2 }}
            >
                Danh sách khách qua đêm
            </Typography>
            <TableContainer
                component={Paper}
                sx={{ height: '83%', overflow: 'auto' }}
                // classes={{ root: classes.customTableContainer }}
            >
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Họ và tên</TableCell>
                            <TableCell align="left">Giới tính</TableCell>
                            <TableCell align="left">CCCD/Hộ chiếu</TableCell>
                            <TableCell align="left">Nơi đăng ký thường trú, tạm trú</TableCell>
                            <TableCell align="left">Ngày thuê phòng</TableCell>
                            <TableCell align="left">Ngày trả</TableCell>
                            <TableCell align="left">Số phòng</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            // key={row.ID}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                            }}
                        >
                            <TableCell align="left">a</TableCell>
                            <TableCell align="left">a</TableCell>
                            <TableCell align="left">a</TableCell>
                            <TableCell align="left">a</TableCell>
                            <TableCell align="left">a</TableCell>
                            <TableCell align="left">a</TableCell>
                            <TableCell align="left">a</TableCell>
                            <TableCell align="left">
                                <DeleteIcon
                                    sx={{ color: '#337AB7', cursor: 'pointer' }}
                                    // onClick={() => handleOpenDelete(row.ID)}
                                />
                            </TableCell>
                        </TableRow>
                        {/* {arrayRelationship?.data[0]?.map((row: any) => {
                                    return (
                                        <TableRow
                                            key={row.ID}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 },
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Avatar
                                                    alt="name"
                                                    src={
                                                        ''
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell align="left">
                                                {row?.RelationWithAddict?.AddictCode}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row?.RelationWithAddict?.IdentityCard}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row?.RelationWithAddict?.FullName}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row?.RelationsID?.Name}
                                            </TableCell>
                                            <TableCell align="left">
                                                <DeleteIcon
                                                    sx={{ color: '#337AB7', cursor: 'pointer' }}
                                                    onClick={() => handleOpenDelete(row.ID)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}
ManagementCustomer.Layout = AdminLayout;
