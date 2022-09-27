import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdminLayout } from '@/components/common';

export interface ISpendingProps {}

export default function Spending(props: ISpendingProps) {
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
                Chi Tiêu
            </Typography>
            <TableContainer
                component={Paper}
                sx={{ height: '83%', overflow: 'auto' }}
                // classes={{ root: classes.customTableContainer }}
            >
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lý do chi tiêu</TableCell>
                            <TableCell align="left">Tổng tiền chi tiêu</TableCell>
                            <TableCell align="left">Ngày chi tiêu</TableCell>
                            <TableCell align="left">Đã thanh toán</TableCell>
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
Spending.Layout = AdminLayout;
