import { Routes, Route} from 'react-router-dom';

import Board from './Board'
import TaskDetail from './TaskDetail'

const Main = (props) => {
    const {setTask} = props;
     return (
        <main className='main-wrapper'>
            <Routes>
                <Route path="/" exact element={
                    <Board 
                       {...props}
                    />   
                }/>
                <Route path="/tasks/:taskId" element={
                    <TaskDetail 
                        {...props}

                        setTask={setTask}
                    />    
                }/>

            </Routes>

        </main>
     )
}

export default Main