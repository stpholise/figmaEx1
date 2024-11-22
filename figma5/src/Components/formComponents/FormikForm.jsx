import { Formik, Form, } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FromikControl'
import '../../styling/FormikStyle.css'

const FormikForm = () => {
    const initialValues = {
        name: '',
        email: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().required('Required')
    })
    const onSubmit = () => {

    }
    return (
        <Formik
            initialValues={initialValues} 
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                (formik) => (
                    <Form className="formik-form">
                        {console.log(formik)}
                        <FormikControl control='input' type='text' label='Name' name='name' />
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikForm