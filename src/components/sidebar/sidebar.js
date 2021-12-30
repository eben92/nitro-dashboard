import { useState, useEffect } from "react";
import { routes } from "../../routes/routes";
import "./sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className='sideBar-Conatainer bg-red-400'>
      {routes.map((route, key) => (
        <div key={key} className='items flex items-center m-4'>
          <div className='icons mr-6'>{route.icon}</div>
          <div>{route.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
