import { useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any; // Comodín que añade cualquier otro parámetro que no hayamos puesto aca
}

// "...props" es destructuración que recibe todo: propiedades como "placeholder" hasta hijos
// En este caso, los hijos son las opciones como se ve abajo en la etiqueta "<select />"
// Es decir, funciona como un HOC
export const MyCheckBox = ( { label, ...props }: Props ) => {
    
    // useField analiza el contexto en donde está este componente puesto.
    // En este caso esta en FormikAbstraction dentro de la etiqueta <Formik>

    // En el "field" vienen todas las propiedades que tenga el input
    // Las cuales lo sabe porque este componente esta dentro del componente de Formik

    // "meta" 
    const [field, meta] = useField({...props, type: 'checkbox'});
    
    return (
        <>
            <label>
                {/* ...field destructura todo lo que venga del <Field> que viene por el useField */}
                {/* ...props destructura props adicionales como placeholder y cosas así que viene en los args */}
                <input type="checkbox" {...field} {...props} />
                { label }
            </label>
            {
                // Errores
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }
        </>
    )
}
