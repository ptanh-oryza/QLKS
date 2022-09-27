import PropTypes, { number } from 'prop-types';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Iconify.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sx: PropTypes.object,
    width: number,
    height: number,
};

export default function Iconify({ icon, sx, width, height, ...other }: any) {
    return (
        <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} width={width} height={height} />
    );
}
