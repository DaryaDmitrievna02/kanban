import { useSelector } from "react-redux";
import { AddTaskForm } from "./modals/addTaskForm";
import DeleteTaskForm from './modals/deleteTaskForm'
import Header from "./components/header/header";
import { useState } from "react";
import TaskWorkspace from "./components/workspace/taskWorkspace";


function App() {
  const state = useSelector((state) => state.tasks);
  

  const [addFormOpen, isAddFormOpen] = useState(false);
  const [optionsOpen, isOptionsOpen] = useState(false)
 
  console.log(state);
  return (
    <>
      {addFormOpen && <AddTaskForm isAddFormOpen={isAddFormOpen}></AddTaskForm>}
      {optionsOpen && <DeleteTaskForm isOptionsOpen={isOptionsOpen}></DeleteTaskForm>}

      <Header isAddFormOpen={isAddFormOpen} isOptionsOpen={isOptionsOpen}  ></Header>
      <TaskWorkspace ></TaskWorkspace>

    </>
  );
}

export default App;
