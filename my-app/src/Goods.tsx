import React, { useEffect } from 'react'
import Group from './Group';
import { IGroup } from './interfaces';
import { useGoods } from './contexts/GoodsContext';

const Goods: React.FC = () => {

    const { goods, setGoods} = useGoods()!;

    useEffect(() => {
        const fetchGoods = async () => {
            const response = await fetch('/goods');
            const data = await response.json();
            setGoods(data);
        };

        fetchGoods();

        // fetching goods from server every 15 seconds
        setInterval(fetchGoods, 15000);
    }, []);

    return (
        <div>
            <h2 className = 'goods-heading'>Товары</h2>
            {
                goods.map((group: IGroup, index: number) => <Group group={group}  key={index}/>)
            }
        </div>
    )
}

export default Goods;
