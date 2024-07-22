import { useState } from "react"
import SpaceSwitch from "./spaceSwitch"

import { useSelector } from "react-redux";
function Header({isAddFormOpen, isOptionsOpen}) {

const [menuOpen, setMenuOpen] = useState(false)


const state = useSelector((state) => state.tasks.find((space) => space.isActive == true ));



    return(
        <>
        <div className=" w-full h-[100px] bg-[#485359] flex items-center px-10 justify-between no-scrollbar">
        <div className="cursor-pointer text-[#C2E9E7] font-bold text-2xl" onClick={()=> menuOpen ? setMenuOpen(false) :setMenuOpen(true)}>
            {state ? state.name : "Нет задач"}
        </div>
       
       <div className="flex gap-5 items-center">
       <div className="cursor-pointer shadow-md bg-[#C2E9E7] p-3 rounded-full  h-8 flex justify-center items-center font-bold transition-shadow active:shadow-inner" onClick={()=> isAddFormOpen(true)}>
            + <p className="block max-sm:hidden">Новоя задача
                </p>
        </div>
        <div className="cursor-pointer w-6 h-5  flex justify-center items-center " onClick={()=> isOptionsOpen(true)}>
           <img src="../src/assets/bucket.png" alt="" />
        </div>

       </div>
        

        {menuOpen && <SpaceSwitch setMenuOpen={setMenuOpen}></SpaceSwitch>}
       
        </div>


        </>
    )
}

export default Header