import { usestate } from 'react'
import Input from "./Input"
import AddButton from "./AddButton"


const FormAddNewTask = (props) => {
    const { formSubmit} = props
    const [values, setValues] = usestate({
        title: ''
    }

    )
    const handleSubmit = e => {
        e.preventdefault()
        if (values.title) {
            formSubmit(values.title) 

            
        }
    }
    return (
        <form onSubmit={handleSubmit} classname="add-form">
            <Input
               value={values.title} 
               onChange={handleChange}
               type='text'
               id='taskTitle'
               name='title'
               className='input-add-card'
            />
            <AddButton
            name='Submit'
            className='submit-button'
            buttonType="submit"
            />
        

        </form>
    )
}

export default FormAddNewTask