import '../styles/styles.css'
import { Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    // const { onChange, resetForm, isValidEmail, email, name, password1, password2 } = useForm({
    //     name: "",
    //     email: "",
    //     password1: "",
    //     password2: ""
    // })
    // // const { email, name, password1, password2 } = registerData

    // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    // }

    const { handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password1: "",
            password2: ""
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Debe de tener 2 caracteres o más')
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
            email: Yup.string()
                .email('Email no tiene un formato válido')
                .required('Requerido'),
            password1: Yup.string()
                .min(6, 'Debe de tener 6 caracteres o más')
                .required('Requerido'),
            password2: Yup.string()
                .min(6, 'Debe de tener 6 caracteres o más')
                .required('Requerido')
        })
    })

  return (
    <div>

    <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: "",
                email: "",
                password1: "",
                password2: ""
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Debe de tener 2 caracteres o más')
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requerido'),
                email: Yup.string()
                    .email('Email no tiene un formato válido')
                    .required('Requerido'),
                password1: Yup.string()
                    .min(6, 'Debe de tener 6 caracteres o más')
                    .required('Requerido'),
                password2: Yup.string()
                    .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                    .required('Requerido')
            })}
        >
            {({handleReset}) => (
                <Form>
                    <MyTextInput
                        label='Nombre'
                        name='name'
                        placeholder='Name'
                    />
                    {touched.name && errors.name && <span>{errors.name}</span>}

                    <MyTextInput
                        label='Email'
                        name='email'
                        placeholder='Email'
                    />
                    {touched.email && errors.email && <span>{errors.email}</span>}

                    <MyTextInput
                        label='Password'
                        placeholder='Password'
                        name='password1'
                        type='password'
                    />
                    {touched.password1 && errors.password1 && <span>{errors.password1}</span>}

                    <MyTextInput
                        label= "Confirm Password"
                        placeholder='Repeat Password'
                        name='password2'
                        type='password'
                    />
                    {touched.password2 && errors.password2 && <span>{errors.password2}</span>}

                    <button type='submit'>Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </Form>
            )}

        </Formik>
        


        <form onSubmit={handleSubmit} noValidate>
            

        </form>
    </div>
  )
}
