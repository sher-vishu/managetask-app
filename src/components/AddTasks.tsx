import * as React from 'react'
import { FormEvent, useState } from "react";
import { nanoid } from 'nanoid';
import { ITaskItem } from "../interfaces/index"
import Modal from "./Modal";
  

interface IComponentProps {
    task?: ITaskItem | undefined;
    onSubmit: (task: ITaskItem) => void;
}

const TaskForm: React.FC<IComponentProps> = (props) => {

    const [error, setError] = useState('');

    const [title, setTitle] = useState(props.task ? props.task.title : '');
    const [time, setTime] = useState<number>(props.task ? props.task.time : 0);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const onTitleChange = (e: FormEvent) => {
        const title = (e.target as HTMLInputElement).value;
        setTitle(title);
    }

    const onTimeChange = (e: FormEvent) => {
        const time = (e.target as HTMLInputElement).value;
        setTime(Number(time));
    }

    // handle the form submit
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        if (title.trim() === "" || time === 0) {
            setError("'Please fill Title and time.'");
            return;
        }
        else if(title.length > 128) {
            setError("Task title character length should not exceed 128 characters.");
            return;
        }
        else if(!/^[a-zA-Z\s]+$/.test(title)) {
            setError("Task title should only contain letters and spaces.");
            return;
        }
        else if ( isNaN(time) || time < 0 || time > 24) {
            setError("Time required should be a numeric value between 0 and 24.");
            return;
        }
        else {
            setError("");


            props.onSubmit({
                id: nanoid(8),
                title,
                time
            });  
            setTitle("");
            setTime(0);
            setModalOpen(false); 
            }
            
    };

    return (
        <>
         <div>
            <form onSubmit={submitHandler}>
            <div className="modal-action">
          <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Task title</span>
            </label>
                <input
                    placeholder=""
                    value={title}
                    onChange={onTitleChange}
                    className="input input-bordered w-full" />
                     </div>
                     <div className="form-control w-full ">
            <label className="label">
             <p className="label-text">Time Required (in Hrs)</p>
             </label>
            <input
                placeholder=""
                value={time}
                onChange={onTimeChange}
                className="input input-bordered w-full" />  
                </div> 
                <button onClick={()=> setModalOpen(true)} className="btn btn-primary mt-9" type="submit"> Add Task </button>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </Modal>
        </div>
            </form>
            </div>
        </>
    )
}

export default TaskForm;