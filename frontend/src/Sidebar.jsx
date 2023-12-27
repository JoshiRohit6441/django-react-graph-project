import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({ hide }) {
  return (
    <div className="sidebar_main">
      <button className="sidebar_close" onClick={hide}><CloseIcon/></button>
      <div className="sidebar">
        <div><Link to="/">Dashboard</Link></div>
        <div><Link to="/create">Add Data</Link></div>
        <div><Link to="/table">Table</Link></div>
      </div>
    </div>
  );
}

export default Sidebar;
