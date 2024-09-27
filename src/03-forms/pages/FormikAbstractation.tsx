import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

import { MyTextInput, MySelect, MyCheckbox } from '../components'


export const FormikAbstractation = () => {


  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                terms: false,
                jobType: ''
            }}
            onSubmit={ values => {console.log(values)} }
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requerido'),
                lastName: Yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requerido'),
                email: Yup.string()
                    .email('Email no tiene un formato válido')
                    .required('Requerido'),
                terms: Yup.boolean()
                    .oneOf([true], 'Debe de aceptar las condiciones'),
                jobType: Yup.string()
                    .required('Requerido')
                    .notOneOf([ 'it-jr' ], 'Esta opción no está permitida')
            })}
        >

            { (formik) => (
                <Form >
                    <MyTextInput
                        label='First Name'
                        name='firstName'
                        placeholder='Oscar'
                    />

                    <MyTextInput
                        label='Last Name'
                        name='lastName'
                        placeholder='Aldrey'
                    />

                    <MyTextInput
                        label='Email Address'
                        name='email'
                        placeholder='something@some.com'
                        type='email'
                    />

                    <MySelect label='Job Type' name='jobType'>
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                        <option value="it-jr">IT jr</option>
                    </MySelect>

                    <MyCheckbox
                        label='Tems and conditions'
                        name='terms'
                    />

                    <button type='submit'>Submit</button>

                </Form>
                )
            }


        </Formik>




    </div>
  )
}
