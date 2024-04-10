import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

// No se requiere interface porque esta todo dentro del validationSchema

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                            <label htmlFor="name">Nombre</label>
                            <Field name="name" type="text" placeholder="Nombre" />
                            <ErrorMessage name="name" component='span' />
                            {/* component es para decirle qué tipo de 
                            elemento HTML debe mostrarse el error */}

                            <label htmlFor="last-name">Apellido</label>
                            <Field name="lastName" type="text" placeholder="Apellido" />
                            <ErrorMessage name="lastName" component='span' />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" placeholder="Email" />
                            <ErrorMessage name="email" component='span' />
                            
                            <label htmlFor="jobType">Tipo de Trabajo</label>
                            <Field name="jobType" as="select"> {/* OJO: es "as" en vez de "component" */}
                                <option value="">Seleccione...</option>
                                <option value="dev">Dev</option>
                                <option value="designer">Diseñador</option>
                                <option value="it-junior">IT Junior</option>
                                <option value="it-senior">IT Senior</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span' />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Términos y condiciones
                            </label>
                            <ErrorMessage name="terms" component='span' />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
