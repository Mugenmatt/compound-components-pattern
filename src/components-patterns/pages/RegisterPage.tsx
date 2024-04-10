import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

    const { 
        handleSubmit,
        handleRegisterData,
        resetForm,
        isValidEmail,
        name,
        email,
        pass1,
        pass2,
    } = useForm({
        name: '',
        email: '',
        pass1: '',
        pass2: '',
    })

    return (
        <div>
            <h1>RegisterPage</h1>

            <form noValidate onSubmit={handleSubmit}>
                {/* ========== NAME ========== */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleRegisterData}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es requerido.</span>}
                
                {/* ========== EMAIL ========== */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleRegisterData}
                    className={
                        `
                        ${email.trim().length <= 0 && 'has-error'}
                        ${!isValidEmail(email) && 'has-error'}
                        `
                    }
                />
                {email.trim().length <= 0 && <span>Este campo es requerido.</span>}
                {!isValidEmail(email) && <span>Debe ser un email.</span>}
                
                {/* ========== PASSWORD ========== */}
                <input
                    type="password"
                    name="pass1"
                    placeholder="Password"
                    value={pass1}
                    onChange={handleRegisterData}
                    className={`${pass1.trim().length <= 0 && 'has-error'}`}
                />
                {pass1.trim().length <= 0 && <span>Este campo es requerido.</span>}
                {pass1.trim().length < 6 && pass1.trim().length > 0 && <span>Debe tener 6 caracteres.</span>}
                
                {/* ========== CONFIRM PASSWORD ========== */}
                <input
                    type="password"
                    name="pass2"
                    placeholder="Repeat Password"
                    value={pass2}
                    onChange={handleRegisterData}
                    className={`${pass2.trim().length <= 0 && 'has-error'}`}
                />
                {pass2.trim().length <= 0 && <span>Este campo es requerido.</span>}
                {pass1 !== pass2 && <span>Las contraseñas no coinciden.</span>}

                <button type="submit">Create</button>
                <button type="button" onChange={resetForm}>Reset</button>
            </form>
        </div>
    )
}
