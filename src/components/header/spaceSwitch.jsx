import taskSlice from "../../redux/taskSlice";
import { useSelector, useDispatch } from "react-redux";

function SpaceSwitch({ setMenuOpen }) {
  const state = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <>
    
      <div className="absolute z-20 top-[100px] w-[400px] max-sm:w-2/3">
        <div className="form w-full p-4  bg-[#C2E9E7] shadow-xl rounded-b-md text-[#485359] font-bold">
          <h2 className="mb-2">Задачи:</h2>
          {state.map((e, i) => {
            return (
              <>
                <div
                  className="flex justify-between p-2 mb-2 cursor-pointer border-b-2 border-b-[#485359]/40 transition-all hover:scale-[1.02]"
                  onClick={() => {
                    dispatch(taskSlice.actions.switchSpace(state[i]));
                    setMenuOpen(false);
                  }}
                >
                  <p>{e.name}</p>
                  {e.isActive ? "✓" : ""}
                </div>
              </>
            );
          })}

          <div></div>
        </div>
      </div>
    </>
  );
}

export default SpaceSwitch;
