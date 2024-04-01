import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {

    const { counter, handleIncreaseBy, handleDecreaseBy } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>

            <button className={styles.buttonMinus} onClick={() => handleDecreaseBy(5)}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button className={styles.buttonAdd} onClick={() => handleIncreaseBy(5)}>+</button>
            
        </div>
    )
}