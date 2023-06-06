import * as React from 'react'
import { useContext } from 'react';

import Context from '../context/tasksContext';

const ShowData: React.FC = () => {
  const { state } = useContext(Context);
  
  var hours = 0;
  state.map((task) =>(
    hours = hours +  Number(task.time)
  ))

  var days = Number(hours/24).toFixed(2);
 

    return (
      <>
      <div className="text-center my-5 flex flex-row gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h3 className="card-title font-normal">Total Tasks</h3>
          <span className="font-mono text-5xl">{state.length} </span> 
            </div>
            </div>
          <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h3 className="card-title font-normal">Total Days</h3>
          <span className="font-mono text-5xl">{days}  </span> 
            </div>
            </div>
          <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h3 className="card-title font-normal">Total Hours</h3>
          <span className="font-mono text-5xl"> {hours}</span>  
        </div>
       </div>
      </div>
      </>
    );
  }
  
export default ShowData;