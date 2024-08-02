import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import taskSlice from "../redux/taskSlice";

export const AddTaskForm = ({ isAddFormOpen }) => {
  const [newColumn, setNewColumn] = useState([
    { name: "ToDO", tasks: [], id: uuid4() },
    { name: "completed", tasks: [], id: uuid4() },
  ]);

  const dispatch = useDispatch();

  const [name, setName] = useState();

  function valid() {
    if (!name || !name.trim()) return false;
    console.log(newColumn);
    for (let i = 0; i < newColumn.length; i++) {
      if (!newColumn[i].name.trim()) {
        return false;
      }
    }

    return true;
  }

  function onChange(id, col) {
    setNewColumn((prev) => {
      const state = [...prev];
      const column = state.find((col) => col.id == id);
      column.name = col;
      return state;
    });
  }

  function onDelete(id) {
    setNewColumn((prev) => prev.filter((col) => col.id !== id));
  }

  function addTask() {
 
    dispatch(taskSlice.actions.addTask({ name, newColumn }));
    isAddFormOpen(false);
  }

  return (
    <>
      <div className="w-full h-full  bg-black/25 flex justify-center items-center z-20 scrollbar-hide overflow-scroll fixed p-5">
        <div className="form px-5 py-10 w-[400px] max-h-[500px] bg-white  rounded-md shadow-md overflow-y-auto fixed m-2 max-sm:w-[95%]">
          <h2 className="font-bold mb-5 text-lg">Добавить новую доску задач</h2>
          <div>
            <div className="flex flex-col justify-center">
              <label>Имя доски задач:</label>
              <input
          
                className="mb-5"
                type="text"
                placeholder="Имя доски"
                onChange={(e) => setName(e.target.value)}
              />

              {newColumn.map((column, id) => {
                return (
                  <>
                    <div className="w-full flex items-center mb-5">
                      <input
                        type="text"
                        placeholder="Имя колонки задач"
                        onChange={(e) => {
                          onChange(column.id, e.target.value);
                        }}
                        value={column.name}
                      ></input>
                      <button
                        className="px-4 text-[#485359] font-semibold"
                        key={column.id}
                        onClick={() => onDelete(column.id)}
                      >
                        X
                      </button>
                    </div>
                  </>
                );
              })}
            </div>

            <button
              className="margin-auto w-full p-2 mb-4 border-dotted border-2  border-[#485359]/30 "
              onClick={() =>
                setNewColumn((prev) => [
                  ...prev,
                  { name: "", tasks: [], id: uuid4() },
                ])
              }
            >
              Добавить колонку +
            </button>
            <br></br>
          </div>

          <div className="flex items-center justify-between gap-5">
            <button
              className="border-2 border-[#485359]/20 shadow-md px-4 py-2 rounded-md font-semibold bg-[#C2E9E7]"
              onClick={() => {
                valid() ? addTask() : false;
              }}
            >
              Добавить доску
            </button>

            <button
              className="border-2 border-[#485359]/20 shadow-md px-4 py-2 rounded-md font-semibold "
              onClick={() => isAddFormOpen(false)}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
