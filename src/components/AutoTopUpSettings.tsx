import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import AutoTopUpSwitch from './AutoTopUpSwitch';
import CreditSlider from './CreditSlider';
import { AutoTopUpSettingContext, AutoTopUpSettingContextType } from '../context/AutoTopUpSettingsContext';

const AutoTopUpSettings: React.FC = () => {
    const { autoTopUp } = useContext(AutoTopUpSettingContext) as AutoTopUpSettingContextType;

    return (
        <Box bgcolor={"white"} width={'700px'} height={'fit-content'} padding={5} display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'start'} gap={0.5} border={1} borderColor={'theme.palette.background.grey'} borderRadius={4}
        sx={{
            '@media (max-width: 960px)': { // media query for screens smaller than 960px
                width: '80%',
            }
        }}
        >
            <AutoTopUpSwitch />
            {
                autoTopUp
                &&
                <CreditSlider />
            }
        </Box >
    )
}

export default AutoTopUpSettings;
