import * as React from 'react'
import { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import Context from '../context/tasksContext'

const ShowTasks: React.FC = () => {

    const { state } = useContext(Context);

    return (
    
      <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Time Required (in Hrs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
              { 
                state.map((task) =>(
                <TaskItem {...task}/>
                ))
            }
        </tbody>
    </table>
    </div>
  )
}

export default ShowTasks