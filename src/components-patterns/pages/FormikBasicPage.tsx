import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
    name: string,
    lastName: string,
    email: string,
}

export const FormikBasicPage = () => {

    const { 
        handleChange, // onChange
        handleSubmit, // submit
        values, // valores del estado
        errors, // errores
        touched, // Si se hizo click en el input
        handleBlur, // Luego de salir del input
    } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { // Se ejecuta solo si se cumple el validate
            console.log(values);
            
        },
        validate: (values: FormValues) => {
            // FormikErrors = Interface de errores de Formik
            // El tipo es necesario para que sepa qué esperar
            const errors: FormikErrors<FormValues> = {};
            
            if(!values.name) { errors.name = 'Requerido' }
            else if(values.name.length >= 15) { errors.name = 'Debe tener 15 caracteres o menos' }
            
            if(!values.lastName) { errors.lastName = 'Requerido'}
            else if(values.lastName.length >= 10) { errors.lastName = 'Debe tener 10 caracteres o menos' }
            
            if (!values.email) {
                errors.email = 'Requerido';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Email invalido';
            }

            return errors;
        }
    });

    return (
        <div>
            <h1>Formik Basic</h1>
            
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={values.name} 
                />
                { errors.name && touched.name && <span>{errors.name}</span>}

                <label htmlFor="last-name">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={values.lastName}
                />
                { errors.lastName && touched.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={values.email} 
                />
                { errors.email && touched.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
