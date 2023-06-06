import { ActionTypes } from '../consts/index';
import { ITasksState, ITaskAction } from "../interfaces/index"

const taskReducer = (state: ITasksState, action: ITaskAction): ITasksState => {

    // all action types destruced due to avoid typos
    const { Fetch, Add, Delete } = ActionTypes;


    switch (action.type) {
        case Fetch:
            return action.tasks;
        case Add:
            return [...state, action.payload];
        case Delete:
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

export default taskReducer 