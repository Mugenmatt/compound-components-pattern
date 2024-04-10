import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

// No se requiere interface porque esta todo dentro del validationSchema

export const FormikYupPage = () => {

    const { 
        handleSubmit, // submit
        errors, // errores
        touched, // Si se hizo click en el input
        getFieldProps, // Devuelve objeto que tiene todo(onChange, value, errors, blur, etc)
    } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { // Se ejecuta solo si se cumple el validate
            console.log(values);
            
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, 'YUP: Debe tener 15 caracteres o menos').required('YUP: Requerido'),
            lastName: Yup.string().max(15, 'YUP: Debe tener 15 caracteres o menos').required('YUP: Requerido'),
            email: Yup.string().email('YUP: Debe ser un email').max(15, 'YUP: Debe tener 15 caracteres o menos').required('YUP: Requerido'),
        })
    });

    return (
        <div>
            <h1>Formik YUP</h1>
            
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    { ...getFieldProps('name') } 
                />
                { errors.name && touched.name && <span>{errors.name}</span>}

                <label htmlFor="last-name">Last Name</label>
                <input 
                    type="text" 
                    { ...getFieldProps('lastName') } 
                />
                { errors.lastName && touched.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    { ...getFieldProps('email') } 

                />
                { errors.email && touched.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
