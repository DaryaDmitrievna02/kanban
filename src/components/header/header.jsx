import { useState } from "react"
import SpaceSwitch from "../../modals/spaceSwitch"


function Header({isAddFormOpen}) {

const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
        <div className=" w-full h-[100px] bg-sky-900 flex items-center px-10 justify-between">
        <div className="cursor-pointer" onClick={()=> menuOpen ? setMenuOpen(false) :setMenuOpen(true)}>
            menu
        </div>
        <div className="cursor-pointer" onClick={()=> isAddFormOpen(true)}>
            +
        </div>
        </div>

{menuOpen && <SpaceSwitch setMenuOpen={setMenuOpen}></SpaceSwitch>}
        </>
    )
}

export default Header