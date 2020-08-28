import React, { useState, useEffect } from 'react';

type RateContextType = {
    rate: number,
    setRate: React.Dispatch<React.SetStateAction<number>>
}

export const RateContext = React.createContext<RateContextType | null>(null);
export const useRate = (): RateContextType | null => React.useContext(RateContext);

export const RateProvider: React.FC = ({ children }) => {
    const defaultRate: number = 30;
    const [rate, setRate] = useState(defaultRate);

    useEffect(() => {
        const fetchRate = async () => {
            const response = await fetch('/rate');
            const rate = await response.json();
            setRate(rate);
        };
        fetchRate();
        setInterval(fetchRate, 15000);
    }, []);

    return (
        <RateContext.Provider value={{rate, setRate}}>
            {children}
        </RateContext.Provider>
    )
}