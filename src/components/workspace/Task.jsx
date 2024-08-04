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
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div onClick={()=>deleteTask(colIndex, taskIndex)} className="absolute right-[20px] cursor-pointer">✕</div>
      </div>
    </>
  );
}

export default Task;
