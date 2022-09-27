import PropTypes from 'prop-types';
import merge from 'lodash/merge';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
// components
import { BaseOptionChart } from '@/components/chart';
import dynamic from 'next/dynamic';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }: any) => ({
    height: CHART_HEIGHT,
    marginTop: theme.spacing(5),
    '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible',
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        alignContent: 'center',
        position: 'relative !important',
        borderTop: `solid 1px ${theme.palette.divider}`,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
    },
}));

// ----------------------------------------------------------------------

AnnualRevenue.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    chartColors: PropTypes.arrayOf(PropTypes.string),
    chartData: PropTypes.array,
};

export default function AnnualRevenue({ title, subheader, chartColors, chartData, ...other }: any) {
    const Chart: any = dynamic(() => import('react-apexcharts'), { ssr: false });

    const theme = useTheme();

    const chartLabels = chartData?.map((i: any) =>
        i.ingredient ? i.ingredient : 'Chưa cập nhật Thành phần'
    );

    const chartSeries = chartData?.map((i: any) => i.count);

    const chartOptions: any = merge(BaseOptionChart(), {
        colors: chartColors,
        labels: chartLabels,
        stroke: { colors: [theme.palette.background.paper] },
        legend: { floating: true, horizontalAlign: 'center' },
        dataLabels: { enabled: true, dropShadow: { enabled: false } },
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (seriesName: any) => seriesName,
                title: {
                    formatter: (seriesName: any) => `${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: { donut: { labels: { show: false } } },
        },
    });

    return (
        <Card {...other} sx={{ paddingBottom: '20px' }}>
            <CardHeader title={title} subheader={subheader} />

            <ChartWrapperStyle dir="ltr">
                <Chart type="pie" series={chartSeries} options={chartOptions} height={280} />
            </ChartWrapperStyle>
        </Card>
    );
}
