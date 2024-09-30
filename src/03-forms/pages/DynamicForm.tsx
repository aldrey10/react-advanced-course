import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup';

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }

        if(rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Este campo debe tener ${(rule as any).value || 2} como mínimo`)
        }

        if(rule.type === 'email') {
            schema = schema.email("Revise el formato de su email")
        }


    }

    requiredFields[input.name] = schema;


}

const validationSchema = Yup.object({...requiredFields})


export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={ initialValues }
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            {(formik) => (
                <Form noValidate>
                    {formJson.map( ({type, name, placeholder, label, options}) => {

                        if( type === 'input' || type === 'password' || type ==='email' ) {
                            return <MyTextInput key={name} type={(type as any)} name={name} placeholder={placeholder} label={label} />
                        } else if (type === 'select') {
                            return <MySelect label={label} name={name} key={name}>
                                <option value="">Select an option</option>
                                {
                                    options?.map(({id, label}) => (<option key={id} value={id}>{label}</option>))
                                }
                            </MySelect>
                        }

                        throw new Error(`Type: ${ type } no está soportado`)

                    })}

                    <button type='submit'>Submit</button>
                </Form>
                
            )}
        </Formik>

    </div>
  )
}
