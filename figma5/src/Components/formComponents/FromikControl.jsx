import Input from "./Input"
import { PropTypes } from 'prop-types'

const FromikControl = ({control, ...rest }) => {
  
    switch(control) {
        case 'input':
            return (
                <Input {...rest} />
            )
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default: null
    }

}

FromikControl.propTypes = {
    control: PropTypes.string.isRequied,
}

export default FromikControl