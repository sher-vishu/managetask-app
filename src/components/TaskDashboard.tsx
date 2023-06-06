import * as React from 'react'
import { useContext } from "react";
import AddTask from "./AddTasks";
import ShowTasks from "./ShowTasks";
import ShowData from "./ShowData";
import { addTask } from "../actions/TaskActions"
import Context from '../context/tasksContext';

const TaskDashboard = () => {

  const { dispatch } = useContext(Context);

  return (
    <main className="max-w-4xl mx-auto pt-4">
      <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Task Management App</h1>
      <ShowData  />    
      <AddTask onSubmit={(task) => { dispatch(addTask(task)); }}/>
      </div>
      <ShowTasks />
    </main>
  )
};

export default TaskDashboard;