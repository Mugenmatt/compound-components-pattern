import '../styles/styles.css'

export const FormikBasicPage = () => {
  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        
        <form>

            <form noValidate>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <span>Es requerido</span>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" />
                <span>Es requerido</span>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <span>Es requerido</span>
                <span>Debe tener formato email</span>

                <button type="submit">Submit</button>
            </form>

        </form>
    </div>
  )
}
