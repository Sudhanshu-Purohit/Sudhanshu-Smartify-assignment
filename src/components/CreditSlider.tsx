import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CustomSlider } from '../styles/CustomSlider';
import { creditData } from '../utils/Constants';
import { AutoTopUpSettingContext, AutoTopUpSettingContextType } from '../context/AutoTopUpSettingsContext';

interface Mark {
    value: number;
    label: JSX.Element;
}

const CreditSlider: React.FC = () => {

    const { creditAmount, creditValue, handleSliderValue } = useContext(AutoTopUpSettingContext) as AutoTopUpSettingContextType;

    const handleConfirm = () => {
        // When the "Confirm auto-purchase" button is clicked, console logging the credit amount .
        console.log("credit amount is: " + creditValue);
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        //Update slider value
        if (typeof newValue === 'number') {
            handleSliderValue(newValue);
        }
    };

    // marks array is created from creditData array which contains slider value (credit amount as slider value) and label for Slider component.
    const marks: Mark[] = creditData.map((data, index) => ({
        value: data.amount,
        label: (
            <Box key={index}>
                <Typography variant='body2' fontWeight={700}>{`$${data.amount}`}</Typography>
                <Typography variant='body2' display={'flex'} gap={'3px'} fontWeight={500} color={'text.grey'}
                sx={{
                    '@media (max-width: 800px)': {
                        flexDirection: 'column',
                        fontSize: '0.7rem',
                        gap: '0px'
                    }
                }}
                >
                    {data.credit} 
                    <span>Credits</span>
                </Typography>
            </Box>
        )
    }));

    return (
        <>
            <Grid container display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'center'} gap={2}>
                <Typography variant='body2' color={'text.grey'} fontSize={'15px'}>
                    Once the credit goes below a minimum threshold
                    <Typography display={'inline'} variant='body2' color={'text.primaryPurple'} fontWeight={700}> 50</Typography>
                    , we will auto-purchase
                    <Typography display={'inline'} variant='body2' color={'text.primaryPurple'} fontWeight={700}>{` ${creditValue}`}</Typography> credits and add them to your account.
                    <Link href="#" variant='body2' display={'inline'} marginLeft={0.5} color={'text.grey'} fontWeight={700} target="_blank">
                        Learn more
                    </Link>
                </Typography>
                <CustomSlider
                    aria-label="Restricted values"
                    value={creditAmount}
                    onChange={handleChange}
                    step={null}
                    min={5}
                    max={34}
                    marks={marks}
                    sx={{
                        marginBottom: '80px'
                    }}
                />
                <Button variant='outlined' sx={{
                    backgroundColor: 'primary.main',
                    color: 'text.white',
                    padding: '10px 16px',
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '10px',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                    }
                }} onClick={handleConfirm}>
                    Confirm auto-purchase
                </Button>
            </Grid >
        </>
    )
}

export default CreditSlider;
