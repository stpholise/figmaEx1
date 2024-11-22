import { Field, ErrorMessage } from "formik"
import { PropTypes } from 'prop-types'

function Input({label, name, ...rest}) {
  return (
    <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name}  component='div' className="textError"/>
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}


export default Input