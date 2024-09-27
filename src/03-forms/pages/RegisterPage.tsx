import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

    const { onChange, resetForm, isValidEmail, email, name, password1, password2 } = useForm({
        name: "",
        email: "",
        password1: "",
        password2: ""
    })
    // const { email, name, password1, password2 } = registerData

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={onSubmit}>
            <input
                name='name'
                type="text"
                placeholder="Name"
                value={name}
                onChange={onChange}
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            {name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input
                name='email'
                type="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {!isValidEmail(email) && <span>Email no es válido</span>}

            <input
                name='password1'
                type="password"
                placeholder="Password"
                value={password1}
                onChange={onChange}
            />
            {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener más de 6 caracteres</span>}

            <input
                name='password2'
                type="password"
                placeholder="Repeat Password"
                value={password2}
                onChange={onChange}
            />
            {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben coincidir</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}
