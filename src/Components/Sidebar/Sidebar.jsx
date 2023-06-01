import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const sidebarItem = [
    {
      to: "/board",
      name: "Board",
    },
    {
      to: "/project-management",
      name: "Project",
    },
    {
      to: "/Project/createProjectAuthorize",
      name: "Create Project",
    },
  ];

  const renderSidebarItem = () => {
    return sidebarItem.map((item, index) => {
      return(
        <li key={index} className="sidebar-item" style={styled.sidebarItem}>
          <NavLink to={item.to} style={styled.sidebarLink}>{item.name}</NavLink>
        </li>
      )
    })
  }

  const styled = {
    sidebar: {
      width: "240px",
      minWidth: "240px",
      backgroundColor: "#F9FAFC",
      borderRight: "1px solid #E6E6E6",
      padding: "0 10px",
    },
    sidebarItem: {
      padding: "2px 10px",
    },
    sidebarLink: {
      padding: "8px 0"
    }
  };

  return (
    <aside className="sidebar" style={styled.sidebar}>
      <ul className="sidebar-list">
        {renderSidebarItem()}
        {/* <li className="sidebar-item">
          <NavLink to="/login">Login</NavLink>
        </li> */}
      </ul>
    </aside>
  );
}
