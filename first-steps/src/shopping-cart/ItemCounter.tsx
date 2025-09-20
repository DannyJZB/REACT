import { useState, type CSSProperties } from "react";

import './ItemCounter.css'

const styles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 10
};

interface Props {
    name: string;
    quantity?: number;
}


export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    //Los hooks siempre van al inicio
    const [count, setCount] = useState(quantity); //Valor inicial por defecto es 10

    const handleIncreaseClick = () => setCount((count + 1));

    const handleDecreaseClick = () => {
        if (count === 1) return;

        setCount((count - 1))
    }

    return (
        // <section style={styles}>
        //     <span style={{
        //         width: 150,
        //         color: count === 1 ? 'red' : 'black'
        //     }}>{name}</span>
        //     {/* <button
        //         onClick={() => {
        //             console.log(`CLICKED ${name}`)
        //         }}>+1</button> */}
        //     <button
        //         onClick={handleIncreaseClick}>+1</button>
        //     <span>{count}</span>
        //     <button onClick={handleDecreaseClick}>-1</button>
        // </section>

        <section className="item-row">
            <span className="item-width" style={{ color: count === 1 ? 'red' : 'black' }}>{name}</span>
            <button
                onClick={handleIncreaseClick}>+1</button>
            <span>{count}</span>
            <button onClick={handleDecreaseClick}>-1</button>
        </section>
    )
}
