import { useState, useEffect } from "react";
import { Router, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import "./sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className='sideBar-Conatainer bg-red-400'>
      <ul>
        {routes.map((route, key) => (
          <li id={route.id} key={key}>
            <NavLink
              className='items flex items-center m-4'
              to={`#${route.id}`}
            >
              <div className='icons mr-6'>{route.icon}</div>
              <div>{route.name}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
