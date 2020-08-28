import React, { useState } from 'react';
import { IGroup } from '../interfaces';


type GoodsContextType = {
    goods: IGroup[],
    setGoods: React.Dispatch<React.SetStateAction<IGroup[]>>
}

export const GoodsContext = React.createContext<GoodsContextType | null>(null);
export const useGoods = (): GoodsContextType | null => React.useContext(GoodsContext);

export const GoodsProvider: React.FC = ({ children }) => {
    const defaultGoods: IGroup[] = [];
    const [goods, setGoods] = useState(defaultGoods);
    return (
        <GoodsContext.Provider value={{goods, setGoods}}>
            {children}
        </GoodsContext.Provider>
    )
}