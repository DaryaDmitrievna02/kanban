import { useSelector, useDispatch } from "react-redux";
import DeleteTaskForm from "../../modals/deleteTaskForm";
import { AddTaskForm } from "../../modals/addTaskForm";
import { useState } from "react";
import AddMicroTaskForm from "../../modals/addMicroTaskForm";
import AddColumn from '../../modals/addColumn'
import Header from "../header/header";
import Task from "./Task";
import taskSlice from "../../redux/taskSlice";

function TaskWorkspace() {
  const state = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e, colIndex) => {
    e.preventDefault();

    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );
    dispatch(
      taskSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex }));
  };

  const [addFormOpen, isAddFormOpen] = useState(false);
  const [optionsOpen, isOptionsOpen] = useState(false);
  const [addColumn, isAddColumnOpen] = useState(false)

  const [microTaskForm, isMicroTaskForm] = useState(false);
  const [addColumnTasks, setAddColumnTasks] = useState();

  const deleteColumn = (colIndex) =>{
dispatch(taskSlice.actions.deleteColumn(colIndex))

  }


  return (
    <>
      {microTaskForm && (
        <AddMicroTaskForm
          addColumnTasks={addColumnTasks}
          isMicroTaskForm={isMicroTaskForm}
        ></AddMicroTaskForm>
      )}

      {addFormOpen && <AddTaskForm isAddFormOpen={isAddFormOpen}></AddTaskForm>}
      {addColumn && <AddColumn isAddColumnOpen={isAddColumnOpen}></AddColumn>}
      {optionsOpen && (
        <DeleteTaskForm isOptionsOpen={isOptionsOpen}></DeleteTaskForm>
      )}

      <div>
        <Header
          isAddFormOpen={isAddFormOpen}
          isOptionsOpen={isOptionsOpen}
        ></Header>

        {state.map((task) => {
          return (
            <>
              {task.isActive && (
                <>
                  <div className="flex gap-10 p-10 flex-wrap">
                    {task.col?.map((column, colIndex) => {
                      return (
                        <>
                          <div
                            key={colIndex}
                            onDrop={(e) => handleOnDrop(e, colIndex)}
                            onDragOver={handleOnDragOver}
                            className="Task-column w-[400px] h-auto bg-white shadow-lg border-2 border-[#485359]/20 p-4"
                          >
                            <div className="relative w-full">
                            <h2 className="text-2xl border-dotted border-b-2 border-[#485359]/30 pb-3">{column.name}</h2>
                            <div onClick={()=>deleteColumn(colIndex)} className="absolute right-[20px] top-[8px] cursor-pointer">✕</div>
                            </div>
                           
                            <div className="flex gap-4 flex-col mt-4 py-4">
                              {column.tasks.map((task, index) => {
                                return (
                                  <Task
                                    key={index}
                                    task={task}
                                    taskIndex={index}
                                    colIndex={colIndex}
                                  />
                                );
                              })}
                            </div>

                            <div className="w-full flex items-center justify-center font-bold bg-transparent border-2 border-[#485359]/20 rounded-md p-2 text-white">
                              <button
                              className=""
                                onClick={() => {
                                  isMicroTaskForm(true);
                                  setAddColumnTasks({
                                    space: task.name,
                                    column: column.name,
                                  });
                                }}
                              >
                                + Добавить задачу
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    }) 
                    
                  }


                  <div onClick={()=>isAddColumnOpen(true)} className="cursor-pointer transition-all hover:scale-[1.02] relative w-[400px] h-auto bg-transparent shadow-lg border-dotted border-2 min-h-52 border-[#485359]/20 p-4">
                    <label className="cursor-pointer absolute top-1/2 left-1/2 text-9xl -translate-x-1/2 -translate-y-1/2" htmlFor="">+</label>
                  </div>
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default TaskWorkspace;
