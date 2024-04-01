import styles from '../styles/styles.module.css';
import { UseProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/product.interfaces';

// Contexto para que el padre le pase a los hijos la data
export const ProductContext = createContext({} as ProductContextProps) ;
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, handleIncreaseBy, handleDecreaseBy } = UseProduct()

    // Provider: Data a enviar a los hijos
    return (
        <Provider value={{ 
            counter,
            handleIncreaseBy,
            handleDecreaseBy,
            product
        }}>
            <div className={styles.productCard}>

                { children }

            </div>
        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;