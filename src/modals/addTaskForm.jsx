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
      <div className="w-full h-full absolute bg-black/25 flex justify-center items-center z-20 scrollbar-hide overflow-scroll">
        <div className="form w-[400px] bg-white h-[600px] rounded-md shadow-md  ">
          <div>
            <div className="flex flex-col gap-5">
              <input
                className="border-2 border-black"
                type="text"
                placeholder="add task name"
                onChange={(e) => setName(e.target.value)}
              />

              {newColumn.map((column, id) => {
                return (
                  <>
                    <input
                      className="border-2 border-black"
                      type="text"
                      placeholder="add task name"
                      onChange={(e) => {
                        onChange(column.id, e.target.value);
                      }}
                      value={column.name}
                    ></input>
                    <button key={column.id} onClick={() => onDelete(column.id)}>
                      X
                    </button>
                  </>
                );
              })}
            </div>

            <button
              onClick={() =>
                setNewColumn((prev) => [
                  ...prev,
                  { name: "", tasks: [], id: uuid4() },
                ])
              }
            >
              ADD COLUMN
            </button>
            <br></br>
          </div>

          <button
            onClick={() => {
              valid() ? addTask() : false;
            }}
          >
            X
          </button>
          <br></br>

          <button onClick={() => isAddFormOpen(false)}>XXXXXX</button>
        </div>
      </div>
    </>
  );
};
