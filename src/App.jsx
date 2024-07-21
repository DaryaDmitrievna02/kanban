import { useSelector, useDispatch } from "react-redux";
import { AddTaskForm } from "./modals/addTaskForm";
import taskSlice from "./redux/taskSlice";
import Header from "./components/header/header";
import { useState } from "react";
import TaskWorkspace from "./components/workspace/taskWorkspace";


function App() {
  const state = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [addFormOpen, isAddFormOpen] = useState(false);
 
 
  console.log(state);
  return (
    <>
      {addFormOpen && <AddTaskForm isAddFormOpen={isAddFormOpen}></AddTaskForm>}
   

      <Header isAddFormOpen={isAddFormOpen}></Header>
      <TaskWorkspace ></TaskWorkspace>

    </>
  );
}

export default App;
