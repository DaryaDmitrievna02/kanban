import { createSlice } from "@reduxjs/toolkit";
import data from "../data/tasks.json";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: data.tasks,
  space: data.tasks[0].name,
  reducers: {
    switchSpace: (state, action) => {
      const task = state.find((e) => e.name == action.payload.name);
      const currentTask = state.find((e) => e.isActive == true);
      currentTask.isActive = false;
      task.isActive = true;
    },

    addTask: (state, action) => {
      const empty = state.find(e => e.name != "")

      const task = {
        name: action.payload.name,
        isActive: !empty? true:false,
        col: action.payload.newColumn,
      };
     
      state.push(task);
    },

    deleteTask:(state, action)=>{
      
    const newActiveTask = state.find((e) => e.isActive == false);
    if(newActiveTask)
      newActiveTask.isActive = true;
    const indexToRemove = state.findIndex((task) => task.name === action.payload.selectedTask);
    state.splice(indexToRemove, 1)

    },

    addMicroTask: (state, action) => {
      const task = state.find((task) => task.name == action.payload.space);
      const column = task.col.find(
        (column) => column.name == action.payload.selectedColumn
      );
      column.tasks.push(action.payload.newTask);
    },

    deleteMicroTask: (state, action) => {},
  },
});

export default taskSlice;
