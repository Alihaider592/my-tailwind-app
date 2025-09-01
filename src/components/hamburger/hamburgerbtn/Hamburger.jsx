import React, { useState , useEffect } from "react";
import { createPortal } from "react-dom";
import Hamburgernavbar from "../hamburgnav/hambugernavbar";
import Hamburger from "hamburger-react";

const Hamburgercomponents = () => {
  const [open, setOpen] = useState(false);
  useEffect(()=>{
if(open){document.body.style.overflow = "hidden";
}else{document.body.style.overflow = "auto";

}
return()=>{
  document.body.style.overflow = "auto";
};
  },[open]);
  

  return (
    <div>
      <Hamburger
        size={22}
        toggled={open}
        toggle={setOpen}
        className="block md:hidden"
      />

      {open &&
        createPortal(
          <div className="fixed  inset-0 z-[9999999] bg-whites w-[60%]">
            <Hamburgernavbar onclose={() => setOpen(false)} />
          </div>,
          document.body
        )}
    </div>
  );
};

export default Hamburgercomponents;
