import { useState } from "react"
import SpaceSwitch from "../../modals/spaceSwitch"

import { useSelector } from "react-redux";
function Header({isAddFormOpen}) {

const [menuOpen, setMenuOpen] = useState(false)
const state = useSelector((state) => state.tasks.find((space) => space.isActive == true ));



    return(
        <>
        <div className=" w-full h-[100px] bg-sky-900 flex items-center px-10 justify-between no-scrollbar">
        <div className="cursor-pointer" onClick={()=> menuOpen ? setMenuOpen(false) :setMenuOpen(true)}>
            {state.name}
        </div>
        <div className="cursor-pointer" onClick={()=> isAddFormOpen(true)}>
            +
        </div>

        {menuOpen && <SpaceSwitch setMenuOpen={setMenuOpen}></SpaceSwitch>}
        </div>


        </>
    )
}

export default Header