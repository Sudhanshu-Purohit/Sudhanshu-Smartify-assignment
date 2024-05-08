import React, { createContext, useState } from 'react';
import { creditData } from '../utils/Constants';

// Define context type
export interface AutoTopUpSettingContextType {
    autoTopUp: boolean;
    toggleAutoTopUp: (checked: boolean) => void;
    creditAmount: number;
    creditValue: number | undefined;
    handleSliderValue: (value: number) => void;
}

// Create context
export const AutoTopUpSettingContext = createContext<AutoTopUpSettingContextType | undefined>(undefined);

interface ContextProviderProps {
    children: React.ReactNode;
};

// Provider component
export const AutoTopUpSettingProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [autoTopUp, setAutoTopUp] = useState<boolean>(true);  //By default, switch is in 'ON' state (checked).
    const [creditAmount, setCreditAmount] = useState<number>(10); 
    //Since we need the slider should be set to the value that corresponds to 1200 credits, we have set

    const [creditValue, setCreditValue] = useState<number>(1200); // By default, credits are 1200 credits.

    const toggleAutoTopUp = (checked: boolean) => {
        // Toggling the Auto Top Up switch to display the auto top-up settings when checked and hide the settings when not checked.
        setAutoTopUp(checked);
    };

    const handleSliderValue = (value: number) => {
        setCreditAmount(value);
        const creditDetail = creditData?.find((obj) => obj.amount === value);
        if (creditDetail) {
            setCreditValue(creditDetail.credit);
        } else {
            setCreditValue(1200);
        }
    };

    return (
        <AutoTopUpSettingContext.Provider value={{ autoTopUp, toggleAutoTopUp, creditAmount, handleSliderValue, creditValue }}>
            {children}
        </AutoTopUpSettingContext.Provider>
    );
};