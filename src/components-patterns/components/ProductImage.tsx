import { useContext } from "react";
import noImage from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductImage = ({img = ''}) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    // Se muestra una u otra imagen dependiendo de donde llegue la data (props o contexto)
    // img viene de props y product.img viene del contexto
    if(img) {
        imgToShow = img;
    } else if(product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }
    
    return (
        <img className={ styles.productImg } src={ imgToShow } alt="Product img" />
    )
}
