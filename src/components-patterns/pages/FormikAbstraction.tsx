import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components/formik-index';
import '../styles/styles.css';

// No se requiere interface porque esta todo dentro del validationSchema

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>
            <i>La idea de esto es que no repite los componentes "Field" ni "ErrorMessage". Para esto usa el componente "MyTextInput"</i>

            {/* <Formik> es un HOC que recibe un children (en este caso el children es una función) */}
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    terms: false, // Terminos y condiciones
                    jobType: '', // Dev, IT, Senior, etc 
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                        name: Yup.string().max(15, 'YUP: Debe tener 15 caracteres o menos').required('YUP: Requerido'),
                        lastName: Yup.string().max(15, 'YUP: Debe tener 15 caracteres o menos').required('YUP: Requerido'),
                        email: Yup.string().email('YUP: Debe ser un email').max(15, 'YUP: Debe tener 15 caracteres o menos').required('YUP: Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe aceptar las condiciones'), // "oneOf" es que debe ser uno de esos valores (este caso solo true)
                        jobType: Yup.string().notOneOf(['it-junior'], 'Opción no permitida').required('YUP: Requerido'), // "notOneOf" inversa de "oneOf"
                    })
                }
            >

                { // Componente HTML que se pasa como función
                // Tiene que estar dentro de <Formik></Formik> para obtener funcionalidades
                    (formik) => (
                        <Form noValidate>
                            
                            <MyTextInput label="Nombre" name="name" placeholder='Escriba aquí...' />

                            <MyTextInput label="Apellido" name="lastName" placeholder='Escriba aquí...' />

                            <MyTextInput type='email' label="Email" name="email" placeholder='email@email.com' />
                            
                            <MySelect label='Tipo de TRabajo' name='jobType'>
                                <option value="">Seleccione...</option>
                                <option value="dev">Dev</option>
                                <option value="designer">Diseñador</option>
                                <option value="it-junior">IT Junior</option>
                                <option value="it-senior">IT Senior</option>
                            </MySelect>

                            <MyCheckBox label="Términos y Condiciones" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
