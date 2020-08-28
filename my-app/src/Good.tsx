import React, { useCallback, useRef, memo, useEffect } from 'react';
import { IGood, IGoodCart } from './interfaces';
import { useCart } from './contexts/CartContext';
import classNames from 'classnames';
import { useRate } from './contexts/RateContext';

interface IProps {
    good: IGood
}

const Good: React.FC<IProps> = memo(({ good }) => {

    const { setCart } = useCart()!;
    const { rate } = useRate()!;
    const prevPrice = usePrevious(rate);

    // Custom hook to store previous value of currency rate in order to compare it later
    function usePrevious(value: number) {
        const ref = useRef<number>();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const addToCart = useCallback(() => {
        setCart((prev: IGoodCart[]) => {
            const item = prev.find(item => item.name === good.name);
            const arr = prev.filter(item => item.name !== good.name);
            return [...arr, item ? { ...item, amount: item.amount! + 1 } : { ...good, amount: 1 }];
        })
    }, [])

    return (
        <div className='good'>
            <div>
                <p className='name'>{good.name}<span>({good.inStock})</span></p>
                <p className={classNames({
                    'red-text': rate > prevPrice!,
                    'green-text': rate < prevPrice!,
                    'black-text': rate == prevPrice!
                })}>{(good.price * rate).toFixed()} руб.</p>
            </div>
            <button className='waves-effect waves-light btn' onClick={addToCart}>Добавить в корзину</button>
        </div>
    )
})

export default Good;
