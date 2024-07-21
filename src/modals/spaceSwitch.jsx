import taskSlice from "../redux/taskSlice";
import { useSelector, useDispatch } from "react-redux";

function SpaceSwitch({ setMenuOpen }) {
  const state = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <>
      <div className="absolute top-[100px] w-[400px]">
        <div className="form w-full p-4  bg-sky-700 shadow-xl rounded-b-md text-white font-bold">
          {state.map((e, i) => {
            return (
              <>
                <div
                  className="p-4 mb-2 cursor-pointer border-2 border-white/20 transition-all hover:scale-[1.02]"
                  onClick={() => {
                    dispatch(taskSlice.actions.switchSpace(state[i]));
                    setMenuOpen(false);
                  }}
                >
                  {e.name}
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
