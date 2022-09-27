import { Grid, Container, Typography, Stack } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ThemeProvider from '../../theme';
import { AdminLayout, MainLayout } from '@/components/common';
import StatisticsByWard from '@/components/dashboard/statistics-by-ward';
import AnnualRevenue from '@/components/dashboard/annual-revenue';
import TotalComponent from '@/components/dashboard/total';

export interface IDashboardProps {}
const Dashboard = (props: IDashboardProps) => {
    const [countAll, setCountAll] = useState(0);
    const [countAddictDead, setCountAddictDead]: any = useState();
    const [countDrugs, setCountDrugs]: any = useState();
    const [countClassify, setCountClassify]: any = useState();
    const [countByClassify, setCountByClassify]: any = useState([]);
    return (
        <Stack sx={{ pl: 2, pr: 2 }}>
            <ThemeProvider>
                <Typography variant="h3" sx={{ mb: 5, textAlign: 'center', paddingTop: 2 }}>
                    Biểu Đồ Doanh Thu
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TotalComponent
                            title="Tổng Doanh Thu"
                            icon={'ant-design:team-outlined'}
                            value={countAll}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <TotalComponent
                            title="Tổng khách giờ (tháng)"
                            color="info"
                            icon={'bx:time'}
                            value={countDrugs}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <TotalComponent
                            title="Tổng khách qua đêm (tháng)"
                            color="warning"
                            icon={'fluent:access-time-20-regular'}
                            value={countClassify}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <TotalComponent
                            title="Tổng doang thu tháng"
                            color="error"
                            icon={'emojione-monotone:money-bag'}
                            value={countAddictDead}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <StatisticsByWard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <AnnualRevenue
                            title="Thống kê theo doanh thu năm"
                            chartData={countByClassify}
                        />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Stack>
    );
};
Dashboard.Layout = AdminLayout;
export default Dashboard;
