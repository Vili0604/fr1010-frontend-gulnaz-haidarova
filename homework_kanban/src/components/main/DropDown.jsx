import {LIST_TYPES} from '../../config'
import uniqid from 'uniqid'

const DropDown = (props) => {
    const { blockType, allTasks, setTasks, isFormVisible, setFormVisible} = props

    const handleChange = (e) => {
        const newStatus = e.target.getAttribute("data-status")
        const updatedtasks = allTasks.map(task =>{
            if (task.id === e.target.id) {
                return { ...task, Status: newStatus}
            }
            return task
        }

        )
        setTasks(updatedtasks)
        setFormVisible( !isFormVisible)
    }
    const changeVis = () => {
        setFormVisible(!isFormVisible)
    }
    return (
        <div className='dropDown-outer-wrwpper'>
            <div className="dropdown-header" onClick={changeVis}></div>
            {Object.values(LIST_TYPES).map((list, index) => {
                if (list === blockType) {
                    return (
                        <div key={uniqid()} className="dropdown-wrapper">
                            {
                                allTasks.filter(obj => {return obj.status === Object.values(LIST_TYPES)[index - 1]}).map((taskTitle) => {
                                    <div key={uniqid()} data-status={list}id={taskTitle.id} onClick={handleChange}>{taskTitle.title}</div>
                                }

                                )
                            }

                        </div>
                    )
                }
            }

            )}

            

        </div>
    )
}

export default DropDown;