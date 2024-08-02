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
      <div className="w-full h-full  bg-black/25 flex justify-center items-center z-20 scrollbar-hide overflow-scroll fixed">
        <div className="form w-[400px] px-5 py-10 bg-white h-auto rounded-md shadow-md fixed m-2 max-sm:w-auto ">
        <h3 className="font-bold mb-1 text-lg">Добавить новую задачу</h3>
         <div className="flex gap-2 mb-3">
         <h2 className="font-semibold text-lg">{space}</h2>
         <label htmlFor="">||</label>
         <h3 className="font-semibold text-lg">{selectedColumn}</h3>
         </div>
         
         
         
          <div className="mb-4">
            <label htmlFor="">Имя задачи</label>
            <input
              className=" mb-3"
              placeholder="Задача"
              type="text"
              onChange={(e) => {
                onChange(e.target.value, "title");
              }}
            />
             <label htmlFor="">Описание</label>
            <input
            placeholder="Описание задачи"
        className=" mb-5"
              type="text"
              onChange={(e) => {
                onChange(e.target.value, "description");
              }}
            />
          </div>
      



          <div className="flex items-center justify-between gap-5">
            <button
              className="border-2 border-[#485359]/20 shadow-md px-4 py-2 rounded-md font-semibold bg-[#C2E9E7]"
              onClick={() => {
               addTask()
              }}
            >
              Добавить задачу
            </button>

            <button
              className="border-2 border-[#485359]/20 shadow-md px-4 py-2 rounded-md font-semibold "
              onClick={() =>  isMicroTaskForm(false)}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default addMicroTaskForm;
