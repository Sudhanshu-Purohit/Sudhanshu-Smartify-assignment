import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CustomSwitch } from '../styles/CustomSwitch';
import { AutoTopUpSettingContext, AutoTopUpSettingContextType } from '../context/AutoTopUpSettingsContext';

const AutoTopUpSwitch: React.FC = () => {
    const { autoTopUp, toggleAutoTopUp } = useContext(AutoTopUpSettingContext) as AutoTopUpSettingContextType;

    return (
        <Grid container alignItems="center" justifyContent="flex-start" spacing={2}>
            <Grid item>
                <Typography variant='h5' color={'text.dark'} fontSize={'20px'}>
                    Setup Auto Top-up
                </Typography>
            </Grid>
            <Grid item>
                <CustomSwitch
                    checked={autoTopUp}
                    onChange={(event) => { toggleAutoTopUp(event.target.checked) }}
                />
            </Grid>
        </Grid>
    );
}

export default AutoTopUpSwitch;
