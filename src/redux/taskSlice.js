import { createSlice } from '@reduxjs/toolkit'
import data from '../data/tasks.json'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: data.tasks,
  space: data.tasks[0].name,
  reducers: {

    switchSpace:(state, action)=>{
      const task = state.find((e)=> e.name == action.payload.name)
     const currentTask = state.find((e) => e.isActive == true);
     currentTask.isActive = false;
     task.isActive = true;

    },

    addTask:(state, action) =>{

        const task={
            name: action.payload.name,
            isActive: false,
            col:action.payload.newColumn
        }

        state.push(task);


    }, 

    addMicroTask:(state, action)=>{
      const task = state.find((task) => task.name == action.payload.space);
      const column = task.col.find((column)=> column.name == action.payload.selectedColumn);
      column.tasks.push(action.payload.newTask);
    },

    deleteMicroTask:(state, action) => {



    }


  }

})



export default taskSlice;
