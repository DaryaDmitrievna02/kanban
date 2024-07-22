import { useSelector, useDispatch } from "react-redux";
import taskSlice from "../redux/taskSlice";

function deleteTaskForm({ isOptionsOpen }) {
  const selectedTask = useSelector(
    (task) => task.tasks.find((e) => e.isActive == true).name
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full h-full bg-black/25 flex justify-center items-center z-20 scrollbar-hide overflow-scroll fixed">
        <div className="form max-w-[400px] bg-white h-auto rounded-md shadow-md  p-5 m-2 fixed ">
          <h2 className="text-red-600 font-semibold mb-5 text-lg">Удалить</h2>
          <p>{`Вы уверены, что хотите удалить доску задач "${selectedTask}"? Все задачи в ней будут стёрты безвозвратно.`}</p>

          <div className="flex justify-between gap-5 mt-5">
            <button
              className="bg-red-600 text-white px-3 py-2 rounded-md"
              onClick={() => {
                dispatch(taskSlice.actions.deleteTask({ selectedTask }));
                isOptionsOpen(false);
              }}
            >
              Удалить
            </button>
            <button className="bg-transparent border-2 border-gray-800/40 px-3 py-2 rounded-md" onClick={()=>   isOptionsOpen(false)}>
              Отмена
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default deleteTaskForm;
