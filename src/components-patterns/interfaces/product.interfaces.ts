import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]; // "ReactElement" es una export interface para elementos HTML
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductButtonsProps {
    counter: number;
    onHandleIncreaseBy: (value: number) => void; 
    onHandleDecreaseBy: (value: number) => void;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    handleIncreaseBy: (value: number) => void;
    handleDecreaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ({ title }: { title: string; }) => JSX.Element;
    Image: ({ img }: { img?: string | undefined; }) => JSX.Element;
    Buttons: () => JSX.Element;
}
