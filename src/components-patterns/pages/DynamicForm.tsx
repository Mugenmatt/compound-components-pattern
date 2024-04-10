import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox } from '../components/MyCheckBox';
import { MySelect } from '../components/MySelect';
import { MyTextInput } from '../components/MyTextInput';
import formJson from '../data/custom-form.json';

const initValues: { [x: string]: any; } = {};
const requiredFields: { [x: string]: any; } = {};

for (const input of formJson) {
    // Captura valor inicial y crea el objeto de inputs.
    // Asigna el valor de la propiedad 'value' de cada elemento al objeto 'initValues',
    // utilizando el valor de la propiedad 'name' como clave.
    initValues[input.name] = input.value;

    // Si no hay validaciones, corta acá, sino continua en el ciclo hacia las validaciones
    if( !input.validations ) continue;

    // Acá van a ir las validaciones. "let" porque luego se reasigna
    let schema = Yup.string();

    // Ciclo para colocar validaciones
    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if(rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, `Mínimo de ${(rule as any).value} caracteres`)
        }
        if(rule.type === 'email') {
            schema = schema.email('Debe ser un email')
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Forms</h1>
            <Formik
                initialValues={initValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (
                        <Form noValidate>
                            {
                                formJson.map(input => {
                                    if(input.type === 'input' || input.type === 'password' || input.type === 'email') {
                                        return (
                                            <MyTextInput 
                                                key={input.name}
                                                label={input.label} 
                                                name={input.name} 
                                                placeholder={input.placeholder} 
                                            />
                                        )
                                    } else if(input.type === 'select') {
                                        return (
                                            <MySelect 
                                                label={input.label} 
                                                name={input.name} 
                                                key={input.name}
                                            >
                                                <option value=''>Seleccione una opcion</option>
                                                {
                                                    input.option?.map(({id, description}) => {
                                                        return <option key={id} value={description}>{description}</option>
                                                    })
                                                }
                                            </MySelect>
                                        )
                                    } else if(input.type === 'checkbox') {
                                        return (
                                            <MyCheckBox 
                                                label={input.label} 
                                                name={input.name} 
                                            />
                                        )
                                    }

                                    throw new Error(`El type ${input.type} no existe, rey de reyes`)
                                })
                            }

                            <button type="submit">Submit</button>
                            <button onClick={formik.handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
