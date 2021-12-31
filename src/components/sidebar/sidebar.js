import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { routes } from "../../routes/routes";
import "./sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("");

  const pathName = window.location.hash;

  // const renderd = (e, route) => {
  //   if (e.currentTarget.value === route.id) {
  //     setActive("aaactive");
  //     console.log(e.currentTarget.value);
  //   } else {
  //     setActive("");
  //   }
  // };
  useEffect(() => {
    // renderd();
    console.log(pathName);
  });

  return (
    <div className='sideBar-Conatainer bg-red-400'>
      <ul>
        {routes.map((route, key) => (
          <li id={route.id} key={key}>
            <HashLink
              className={`items flex items-center m-4 ${active}`}
              to={`#${route.id}`}
            >
              <div className='icons mr-6'>{route.icon}</div>
              <div>{route.name}</div>
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
