import { useSelector } from "react-redux";
import taskSlice from "../../redux/taskSlice";
import { useState } from "react";
import AddMicroTaskForm from "../../modals/addMicroTaskForm";

function TaskWorkspace() {
  const state = useSelector((state) => state.tasks);
  const [microTaskForm, isMicroTaskForm] = useState(false);
  const [addColumnTasks, setAddColumnTasks] = useState();
  return (
    <>
      {microTaskForm && (
        <AddMicroTaskForm
          addColumnTasks={addColumnTasks}
          isMicroTaskForm={isMicroTaskForm}
        ></AddMicroTaskForm>
      )}
      {state.map((task) => {
        return (
          <>
            {task.isActive && (
              <>
                <div className="flex gap-10 p-10 flex-wrap">
                  {task.col.map((column) => {
                    return (
                      <>
                        <div className="Task-column w-[400px] h-auto bg-blue-500 p-4">
                          <h2 className="text-2xl">{column.name}</h2>
                          <div className="flex gap-4 flex-col mt-4 py-4">
                            {column.tasks.map((tasks) => {
                              return (
                                <div className="flex flex-col bg-slate-100 rounded-md w-full h-auto py-5 px-2">
                                  <div>{tasks.title}</div>
                                  <div>{tasks.description}</div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="w-full flex items-center justify-center font-bold bg-transparent border-2 border-cyan-950/20 rounded-md p-2 text-white">
                            <button
                              onClick={() => {
                                isMicroTaskForm(true);
                                setAddColumnTasks({
                                  space: task.name,
                                  column: column.name,
                                });
                              }}
                            >
                              ADD TASK +
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            )}
          </>
        );
      })}
    </>
  );
}

export default TaskWorkspace;
