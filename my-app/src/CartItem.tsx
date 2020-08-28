import React, { ChangeEvent, useRef, MutableRefObject } from 'react';
import { IGoodCart } from './interfaces';
import { useCart } from './contexts/CartContext';
import { useGoods } from './contexts/GoodsContext';
import { useRate } from './contexts/RateContext';

interface IProps {
    item: IGoodCart
}

const CartItem: React.FC<IProps> = ({ item }) => {

    const { cart, setCart } = useCart()!;
    const { rate } = useRate()!;
    const { goods } = useGoods()!;

    const deleteFromCart = () => {
        setCart((prev) => {
            return prev.filter(good => good.name !== item.name);
        })
    };

    const changeItemAmount = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCart((prev) => {
            const copy = [...prev];
            copy.forEach(a => {
                if (a.name === item.name) {
                    if (+value === 0) a.amount = 1
                    else a.amount = +value

                }
            })
            return copy;
        })
    }

    const findPrice = () => {
        let price: number = 0;
        for (let i of goods) {
            const obj = i.items.find(a => a.name === item.name)
            if (obj) {
                price = obj.price;
                break;
            }
        }
        return price;
    }

    const displayAmount = () => {
        return cart.find(i => i.name === item.name)?.amount;
    }

    const errorHandler = () => {
        if (displayAmount()! > item.inStock) return true
        return false
    }

    return (
        <tr>
            <td>{item.name}</td>
            <td>
                <input
                    type='number'
                    value={displayAmount()}
                    onChange={changeItemAmount}
                />
                {
                    errorHandler() ? <p className='red'>Количество ограничено</p> : null
                }
            </td>
            <td >{(findPrice() * rate).toFixed()} руб./шт</td>
            <td><button className='waves-effect waves-light btn-small red button-delete' onClick={deleteFromCart}>Удалить</button></td>
        </tr>
    )
}

export default CartItem;
