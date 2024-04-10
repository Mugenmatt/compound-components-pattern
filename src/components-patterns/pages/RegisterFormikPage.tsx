import '../styles/styles.css'
import * as Yup from 'yup'
import { Form, Formik, useFormik } from 'formik';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPass: '',
                }}
                onSubmit={(values) => { // Se ejecuta solo si se cumple el validate
                    console.log(values);
                    
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                            .min(2, 'Mínimo 2 caracteres')
                            .max(15, 'Máximo 15 caracteres')
                            .required('Requerido'),
                    email: Yup.string()
                            .email('Debe ser un email')
                            .required('Requerido'), 
                    password: Yup.string()
                            .min(2, 'Mínimo 6 caracteres')
                            .required('Requerido'),
                    confirmPass: Yup.string()
                            .min(2, 'Mínimo 6 caracteres')
                            .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
                            .required('Requerido'),
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput label="Nombre" name="name" placeholder='Escriba aquí...' />
                            <MyTextInput label="Email" name="email" placeholder='Escriba aquí...' />
                            <MyTextInput type='email' label="Contraseña" name="password" placeholder='Escriba aquí...' />
                            <MyTextInput label="Confirmación" name="confirmPass" placeholder='Escriba aquí...' />
                            <button type="submit">Create</button>
                            <button type="button" onClick={formik.handleReset}>Reset</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
