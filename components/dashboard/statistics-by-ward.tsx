import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Stack,
    useTheme,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAuth } from '@/hooks/auth-hook';
// ----------------------------------------------------------------------

export default function StatisticsByWard(props: any) {
    Chart.register(CategoryScale);

    const theme = useTheme();
    const [countWardByDistrict, setCountWardByDistrict]: any = useState([]);
    const [provinces, setProvinces]: any = useState([]);
    const [districts, setdistricts]: any = useState([]);
    const { profile } = useAuth();
    const convertProfileType: any = profile;
    const id = convertProfileType?.data?.ID;
    const [visable, setVisable] = useState('ineline');
    const [visableDis, setVisableDis] = useState('ineline');
    const data = {
        datasets: [
            {
                backgroundColor: '#3F51B5',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: countWardByDistrict.map((i: any) => i.countAllByWardThisYearDefault),
                label: 'Năm nay',
                maxBarThickness: 10,
            },
            {
                backgroundColor: '#C0C0C0',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: countWardByDistrict.map((i: any) => i.countAllByWardLastYearDefault),
                label: 'Năm trước',
                maxBarThickness: 10,
            },
        ],
        labels: countWardByDistrict.map((i: any) => i.wards),
    };

    const options: any = {
        animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        xAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary,
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary,
                    beginAtZero: true,
                    min: 0,
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: theme.palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: theme.palette.divider,
                },
            },
        ],
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary,
        },
    };
    return (
        <Card {...props}>
            <CardHeader sx={{ flexDirection: 'column' }} title="Thống kê theo tháng" />
            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: 400,
                        position: 'relative',
                    }}
                >
                    <Bar data={data} options={options} />
                </Box>
            </CardContent>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                }}
            ></Box>
        </Card>
    );
}
