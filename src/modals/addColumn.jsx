import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import taskSlice from "../redux/taskSlice";

function AddColumn({ isAddColumnOpen }) {
const [name, setName] = useState();
const dispatch = useDispatch();

function AddColumn(){
    dispatch(taskSlice.actions.addColumn(name))
    isAddColumnOpen(false)
}

  return (
    <>
      <div className="w-full h-full  bg-black/25 flex justify-center items-center z-20 scrollbar-hide overflow-scroll fixed">
        <div className="form w-[400px] px-5 py-10 bg-white h-auto rounded-md shadow-md fixed m-2 max-sm:w-auto ">
          <div className="flex flex-col justify-center">
            <label>Имя колонки задач:</label>
            <input
              className="mb-5"
              type="text"
              placeholder="Имя колонки"
              onChange={(e) => setName(e.target.value)}
            />

            <div className="flex items-center justify-between gap-5">
              <button
                className="border-2 border-[#485359]/20 shadow-md px-4 py-2 rounded-md font-semibold bg-[#C2E9E7]"
                onClick={() => {
               AddColumn();
                }}
              >
                Добавить колонку
              </button>

              <button
                className="border-2 border-[#485359]/20 shadow-md px-4 py-2 rounded-md font-semibold "
                onClick={() => isAddColumnOpen(false)}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddColumn;
