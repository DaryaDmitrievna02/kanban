import {useDispatch } from "react-redux";
import taskSlice from "../redux/taskSlice";
import { useState } from "react";


function addMicroTaskForm({ addColumnTasks, isMicroTaskForm }) {
  const space = addColumnTasks.space;
  const selectedColumn = addColumnTasks.column;

  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: selectedColumn,
  });

  function onChange(e, type) {
    setNewTask((prev) => {
      switch (type) {
        case "title":
          prev.title = e;
          return prev;
        case "description":
          prev.description = e;
          return prev;
      }
      return prev;
    });
  }

  function addTask() {
    dispatch(
      taskSlice.actions.addMicroTask({ space, selectedColumn, newTask })
    );
    isMicroTaskForm(false);
  }

  return (
    <>
      <div className="w-full h-full fixed bg-black/25 flex justify-center items-center z-20 scrollbar-hide overflow-scroll">
        <div className="form w-[400px] bg-white h-[600px] rounded-md shadow-md  ">
          <h2>{space}</h2>
          <h3>{selectedColumn}</h3>
          <h3>Add new Tasks:</h3>
          <div>
            <input
              className="border-2 border-black"
              type="text"
              onChange={(e) => {
                onChange(e.target.value, "title");
              }}
            />
            <input
              className="border-2 border-black"
              type="text"
              onChange={(e) => {
                onChange(e.target.value, "description");
              }}
            />
            <button onClick={() => addTask()}>add task</button>
          </div>
          <br />

          <button onClick={() => isMicroTaskForm(false)}>XXXXXX</button>
        </div>
      </div>
    </>
  );
}

export default addMicroTaskForm;
