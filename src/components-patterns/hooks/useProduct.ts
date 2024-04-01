import { useState } from 'react';

export const UseProduct = () => {
    
    const [counter, setCounter] = useState(0)

    const handleDecreaseBy = (value: number) => {
        // Math.max devuelve el mayor entre los numeros dentro del paréntesis
        setCounter(prev => Math.max(prev - value, 0))
    }
    const handleIncreaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0))
    }
    return {
        counter, 
        handleIncreaseBy, 
        handleDecreaseBy
    }
}
