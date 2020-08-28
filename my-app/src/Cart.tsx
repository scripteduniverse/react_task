import React from 'react';
import { useCart } from './contexts/CartContext';
import { useGoods } from './contexts/GoodsContext';
import CartItem from './CartItem';
import { useRate } from './contexts/RateContext';

const Cart = () => {

    // I am using ! sign after custom hook to make compiler sure that it does not return null
    const { cart } = useCart()!;
    const { goods } = useGoods()!;
    const {rate} = useRate()!;

    const calculateSum = () => {
        let total: number = 0;
        for (let i of goods) {
            for (let j of cart) {
                for (let a of i.items) {
                    if (a.name == j.name) total += a.price * j.amount
                }
            }
        };
        return total * rate;
    };

    return (
        <div className='cart-container'>
            <h2 className='cart-heading'>Корзина</h2>
            <table className='striped'>
                <thead>
                    <tr>
                        <th>Наименование товара и описание</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(cartItem => <CartItem item={cartItem} key={cartItem.name} />)
                    }
                </tbody>
            </table>
            <p className='total-sum'>Общая стоимость: {calculateSum().toFixed(1)} руб.</p>
        </div>
    )
}

export default Cart;
