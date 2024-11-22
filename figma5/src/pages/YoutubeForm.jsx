
import '../styling/style.css'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
// import { PropTypes } from 'prop-types'
// import { useState } from 'react'

const YoutubeForm = () => {

    const initialValues = {
        name:'', 
        email:'',
        channel:'',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: '',
        },
        phoneNumber: ['',''],
        phNumbers: ['']
    } 
    const onSubmit = (values, submitProps) => {
        // console.log('form data:', values)
        console.log('submit')
        console.log(submitProps.isSubmitting)
        console.log('submitProps', submitProps)
        submitProps.setSubmitting(false)
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        comments: Yup.string().required('Required!'),
        email: Yup.string().email('Ivalid email format').required('Required!'),
        channel: Yup.string().required('Required!'),
        phNumbers: Yup.array()
        .of(
            Yup.string()
                .matches(/^[0-9]{10,15}$/, 'Phone number must be between 10 and 15 digits')
                .required('Phone number is required')
        )
        .min(1, 'At least one phone number is required')
    })

  

  return (
    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}

    >
        {
            (formik) => {
                // console.log('formik prop', formik.isSubmitting)
                return (
                    <Form>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <Field 
                            type="text" 
                            id="name" 
                            name="name" 
                            
                        />
                        <ErrorMessage name='name' className='error' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <Field 
                            type="email" 
                            id="email" 
                            name="email" 
                          
                        />
                         <ErrorMessage name='email' className='error' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="channel">Channel</label>
                        <Field 
                            type="text" 
                            id="channel" 
                            name="channel" 
                          
                        />
                         <ErrorMessage name='channel' component='div' className='error' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="comments"> Comments</label>
                        <Field as='textarea' name='comments' id='comments' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="address">Address</label>
                        <Field name='address' >
                            {
                                ({field, meta})=>  (
                                    <>
                                   {/* { console.log('field render')} */}
        
                                        <input id='address'  {...field}/>
                                        {meta.touched && meta.error ? <p>{meta.error}</p>: null}
                                   </>)
                                
                            }
                        </Field>
                    </div>
                    <div className="form-control">
                        <label htmlFor="facebook">Facebook</label>
                        <Field id='facebook' name='social.facebook' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="twitter">twitter</label>
                        <Field id='twitter' name='social.twitter' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="primaryPhone">Primary Phone</label>
                        <Field type='tel' id='primaryPhone' name='phoneNumber[0]' />
                    </div>
                    {/* <div className="form-control">
                        <label htmlFor="secodaryPhone">Secondary Phone</label>
                        <Field type='tel' id='secodaryPhone' name='phoneNumber[1]' />
                    </div> */}
                    <div className="form-control">
                        <label htmlFor="phNumber"> FieldArray</label>
                        <FieldArray  name='phNumbers' >
                            {
                                ({push, remove, form})=>{
                                   
                                    const {phNumbers } = form.values
                                    return (
                                        <div>
                                            {
                                                phNumbers.map((phone, index) => (
                                                    <div key={index}>
                                                        <Field type='tel' name={`phNumbers[${index}]`} />
                                                        {
                                                            index>0 &&
                                                         <button type='button' onClick={() => {remove(index); console.log('index', index)}}> -</button>
                                                        }
                                                        <button type='button' onClick={()=> {push(''); index++; console.log(index)} }> +</button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            }
                        </FieldArray>
                    </div>
                    {/* <button type="button" onClick={() => formik.validateField('comments')}>validate Comments</button>
                    <button type="button" onClick={() => formik.validateForm()}>validate all</button> */}
                    <button type='submit' style={{background: formik.isSubmitting ? '#218838': 'gray'}} disabled={(!formik.isValid || formik.isSubmitting)}>Submit</button>
                </Form>
                )
            }
        }
      
    </Formik>
  )
}

// YoutubeForm.propTypes ={
//     meta: PropTypes.object.isRequired,
//     field: PropTypes.object.isRequired
// }


export default YoutubeForm