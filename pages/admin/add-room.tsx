import React, { useState } from 'react';
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

export interface IAddRoomProps {}

export default function AddRoom(props: IAddRoomProps) {
    const [openDialog, setOpenDialog] = useState(false);
    const [id, setId] = useState('');

    return (
        <Stack>
            <Typography
                id="modal-modal-title"
                variant="body1"
                component="div"
                textAlign={'center'}
                sx={{ fontWeight: 'bold', fontSize: '25px', mb: 2 }}
            >
                Thêm Phòng
            </Typography>
            <TableContainer
                component={Paper}
                sx={{ height: '83%', overflow: 'auto' }}
                // classes={{ root: classes.customTableContainer }}
            >
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Tên phòng</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            // key={row.ID}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                            }}
                        >
                            <TableCell align="center">a</TableCell>
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
AddRoom.Layout = AdminLayout;
