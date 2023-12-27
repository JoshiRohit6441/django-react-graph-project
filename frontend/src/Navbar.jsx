import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    setShow(true);
  };

  const hideSidebar = () => {
    setShow(false);
  };

  

  return (
    <>
      <div className="main_nav">
        <div>
          <button className="button_nav" onClick={showSidebar}>
            <MenuIcon />
          </button>
          {show && <Sidebar hide={hideSidebar} />}
        </div>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}

export default Navbar;
