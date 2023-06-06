import { ActionTypes } from '../consts/index';
 
export interface ITaskItem {
    id: string;
    title: string;
    time: number;
}

// Our state should be an array of task items.  
export type ITasksState = ITaskItem[];


// to control the action of our application we define 
// 4 actions for fetching data from localStorage, Adding, Editing
// and Deleting
export type ITaskAction =
    { type: ActionTypes.Fetch, tasks: ITaskItem[] } |
    { type: ActionTypes.Add, payload: ITaskItem } |
    { type: ActionTypes.Delete, id: string }


// Our context should have two property
// state which is a array of task items
// and dispatch which is a react dispatch
export interface IContextModel {
    state: ITasksState;
    dispatch: React.Dispatch<ITaskAction>
}


