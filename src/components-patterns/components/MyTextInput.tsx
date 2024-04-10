import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text'|'email'|'password';
    placeholder?: string;
    [x: string]: any; // Comodín que añade cualquier otro parámetro que no hayamos puesto aca
}

export const MyTextInput = ( { label, ...props }: Props ) => {
    
    // useField analiza el contexto en donde está este componente puesto.
    // En este caso esta en FormikAbstraction dentro de la etiqueta <Formik>

    // En el "field" vienen todas las propiedades que tenga el input
    // Las cuales lo sabe porque este componente esta dentro del componente de Formik

    // "meta" permite usar las propiedades como error, touched, etc
    const [field, meta] = useField(props);
    
    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            {/* ...field destructura todo lo que venga del <Field> que viene por el useField */}
            {/* ...props destructura props adicionales como placeholder y cosas así que viene en los args */}
            <input type={props.type || 'text'} { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" className="custom-span-error-class" /> {/* Se fija según el name */}
            
            {/* También se puede hacer de la siguiente manera con el "meta" de useField */}
            {/* PODES ENCONTRAR UN EJEMPLO EN EL COMPONENTE <MyCheckBox /> */}
            {/* {
                // Errores
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
