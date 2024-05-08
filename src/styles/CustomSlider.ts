import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

export const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.primary.main,
    height: 8,
    borderRadius: 4,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        backgroundColor: theme.palette.background.grey,
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '5px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&::before': {
            display: 'none',
        },
    },
    '& .MuiSlider-mark': {
        backgroundColor: 'transparent',
    },
    '& .MuiSlider-markLabel': {
        transform:'translate(-5%)',
        color: theme.palette.text.primary,
        top: '46px',
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: theme.palette.background.grey,
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&::before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
}));