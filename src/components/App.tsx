import { useEffect, useReducer } from "react";
import { ITasksState } from "../interfaces/index"
import { ActionTypes } from '../consts/index';
import Context from "../context/tasksContext";
import taskReducer from '../reducers/TaskReducer';
import AppRouter from '../routers/AppRouter';


export default function AppComp() {

  const [state, dispatch] = useReducer(taskReducer, []);
  
  useEffect(() => {
    const taskJSON = localStorage.getItem("tasks");
    const tasks: ITasksState = taskJSON !== null ? JSON.parse(taskJSON) : [];

    if (tasks) {
      dispatch({ type: ActionTypes.Fetch, tasks });
    }
  }, []);

  // every change in our state will rewrite in our local sotrage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
          <AppRouter />
    </Context.Provider>
  );
}
