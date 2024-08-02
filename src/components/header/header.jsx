import { useState } from "react"
import SpaceSwitch from "./spaceSwitch"
import bucket from '../../assets/bucket.png'
import arrowUp from '../../assets/arrowUpRecolor.png'
import arrowDown from '../../assets/arrowDownRecolor.png'

import { useSelector } from "react-redux";
function Header({isAddFormOpen, isOptionsOpen}) {

const [menuOpen, setMenuOpen] = useState(false)


const state = useSelector((state) => state.tasks.find((space) => space.isActive == true ));



    return(
        <>
        <div className=" w-full h-[100px] bg-[#485359] flex items-center px-10 justify-between no-scrollbar">
        <div className="cursor-pointer " onClick={()=> menuOpen ? setMenuOpen(false) :setMenuOpen(true)}>
            <p className="flex gap-4 justify-center items-center text-[#C2E9E7] font-bold text-2xl">{state ? state.name : "Нет задач"}
                <img className="w-5 " src={menuOpen? arrowUp : arrowDown} alt="" />
                </p>
        </div>
       
       <div className="flex gap-5 items-center">
       <div className="cursor-pointer shadow-md bg-[#C2E9E7] p-3 rounded-full  h-8 flex justify-center items-center font-bold transition-shadow active:shadow-inner" onClick={()=> isAddFormOpen(true)}>
            + <p className="block max-sm:hidden">Новоя задача
                </p>
        </div>
        <div className="cursor-pointer w-6 h-5  flex justify-center items-center " onClick={()=> isOptionsOpen(true)}>
           <img src={bucket} alt="" />
        </div>

       </div>
        

        {menuOpen && <SpaceSwitch setMenuOpen={setMenuOpen}></SpaceSwitch>}
       
        </div>


        </>
    )
}

export default Header