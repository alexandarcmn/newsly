import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
//
import FontAwesome from "../../FontAwesome";
import SidebarMenu from "./SidebarMenu";

export default function Navigation() {
  const [sideShow, setSideShow] = useState(false);

  const menus = [
    {
      id: 1,
      linkText: "Home",
      link: "/home",
    },
    {
      id: 2,
      linkText: "General",
      link: "/categories/general",
    },
    {
      id: 3,
      linkText: "Business",
      link: "/categories/business",
    },
    {
      id: 4,
      linkText: "Entertainment",
      link: "/categories/entertainment",
    },
    {
      id: 5,
      linkText: "Health",
      link: "/categories/health",
    },
    {
      id: 6,
      linkText: "Science",
      link: "/categories/science",
    },
    {
      id: 7,
      linkText: "Sports",
      link: "/categories/sports",
    },
    {
      id: 8,
      linkText: "Technology",
      link: "/categories/technology",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg col-lg-9">
      <div className="site-nav-inner">
        <button className="navbar-toggler" onClick={() => setSideShow(true)}>
          <AiOutlineMenu />
        </button>
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse navbar-responsive-collapse"
        >
          <ul className="nav navbar-nav" id="scroll">
            {menus.map((item, i) => (
              <li
                key={i}
                className={`
                                                ${item.child ? "dropdown" : ""}
                                                nav-item`}
              >
                {item.child ? (
                  <NavLink
                    onClick={(e) => e.preventDefault()}
                    to="/"
                    className="menu-dropdown"
                    data-toggle="dropdown"
                  >
                    {item.linkText}
                    <FontAwesome name={item.icon} />
                  </NavLink>
                ) : (
                  <NavLink
                    to={item.link}
                    className="menu-dropdown"
                    data-toggle="dropdown"
                  >
                    {item.linkText}
                    <FontAwesome name={item.icon} />
                  </NavLink>
                )}

                {item.child ? (
                  <ul className="dropdown-menu" role="menu">
                    {item.submenu.map((sub_item, i) => (
                      <li
                        key={i}
                        className={`${
                          sub_item.child ? "dropdown-submenu" : null
                        }
                                                        `}
                      >
                        {sub_item.child ? (
                          <NavLink onClick={(e) => e.preventDefault()} to="/">
                            {sub_item.linkText}
                          </NavLink>
                        ) : (
                          <NavLink to={sub_item.link}>
                            {sub_item.linkText}
                          </NavLink>
                        )}
                        {sub_item.third_menu ? (
                          <ul className="dropdown-menu">
                            {sub_item.third_menu.map((third_item, i) => (
                              <li key={i}>
                                <NavLink to={third_item.link}>
                                  {third_item.linkText}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <SidebarMenu
          sideShow={sideShow}
          setSideShow={setSideShow}
          menus={menus}
        />
      </div>
    </nav>
  );
}
