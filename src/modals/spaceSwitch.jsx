import taskSlice from "../redux/taskSlice";
import { useSelector, useDispatch } from "react-redux";

function SpaceSwitch({ setMenuOpen }) {
  const state = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full h-full absolute bg-black/25 ">
        <div className="form w-[400px] m-auto bg-white h-auto rounded-md shadow-md ">
          {state.map((e, i) => {
            return (
              <>
                <br></br>
                <div
                  onClick={() => {
                    dispatch(taskSlice.actions.switchSpace( state[i]));
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
