import { useDispatch } from "react-redux";
import taskSlice from "../../redux/taskSlice";

function Task({ task, colIndex, taskIndex }) {

  const dispatch = useDispatch();

  const deleteTask = (colIndex, taskIndex) =>{
    dispatch(taskSlice.actions.deleteMicroTask({taskIndex, colIndex}));
  }

  const handleOnDrag = (e) => {

    e.dataTransfer.setData(
      "text",
      JSON.stringify({ taskIndex, prevColIndex: colIndex })
    );
  };


  return (
    <>
      <div
        onDragStart={handleOnDrag}
        draggable
        className="relative flex flex-col bg-slate-100 rounded-md w-full h-auto py-5 px-2"
      >
        <div className="flex justify-between pr-[10px]">
        <h2 className="font-bold mb-2">{task.title}</h2>
        <div onClick={()=>deleteTask(colIndex, taskIndex)} className=" cursor-pointer">✕</div>
        </div>
     
        <p className="break-all">{task.description}</p>
       
      </div>
    </>
  );
}

export default Task;
