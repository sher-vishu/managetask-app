import React, { useState, useContext } from 'react';
import { ITaskItem } from "../interfaces/index"
import Context from '../context/tasksContext';
import { removeTask } from "../actions/TaskActions";
import Modal from './Modal';

const TaskItem: React.FC<ITaskItem> = ({ id, title, time }) => {

    const { dispatch } = useContext(Context);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
   
    return (
       <tr key={id}>
      <td className="w-full">{title}</td>
      <td>{time}</td>
      <td className="flex gap-5">
             
        <button onClick={() => setOpenModalDeleted(true)}  className="text-red-500" >
            Delete
        </button>
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg">Are you sure you want to delete this task?</h3>
          <div className="modal-action">
          <button onClick={() => { dispatch(removeTask(id)); setOpenModalDeleted(false)}} className="btn" >
              OK
              </button>
          </div>
        </Modal>
        </td>
    </tr>
    );

};

export default TaskItem