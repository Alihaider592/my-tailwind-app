import React, { useState } from 'react'
import Hamburgernavbar from './hambugernavbar';
import Hamburger from 'hamburger-react'
const Hamburgercomponents = () => {
    const [open,setOpen] = useState(false);
  return (
    <div>
      <Hamburger 
      size={22}
      toggled = {open}
      toggle={setOpen}
      className="block md:hidden"
      />
      {open&&
        <Hamburgernavbar/>
        
    }
    </div>
  )
}

export default Hamburgercomponents
