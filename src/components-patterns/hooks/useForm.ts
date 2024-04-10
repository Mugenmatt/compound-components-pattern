import { ChangeEvent, FormEvent, useState } from 'react'

// <T> es un tipo dinámico. Es decir, toma la forma de lo que venga en el parámetro.
export const useForm = <T>(formData: T) => {

    // Formulario
    const [registerData, setRegisterData] = useState(formData)

    // Manejar cambios de estado
    const handleRegisterData = (event: ChangeEvent<HTMLInputElement>) => {

        setRegisterData(prev => ({
            ...prev, // Las demás props
            [event.target.name]: event.target.value // Saber cuál prop de forma dinámica
        }))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);
    }

    const resetForm = () => {
        setRegisterData({...formData})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...registerData,
        handleRegisterData,
        handleSubmit,
        resetForm,
        isValidEmail
    }
}
