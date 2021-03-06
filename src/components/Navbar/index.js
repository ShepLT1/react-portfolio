import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./style.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div id="navbar">
      <Menu pointing secondary>
        <Menu.Item
          as={NavLink}
          id="nav-logo"
          to="/"
          name="Luke Shepherd"
          onClick={handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item
            as={NavLink}
            to="/portfolio"
            name="Portfolio"
            active={activeItem === "register"}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/contact"
            name="Contact"
            active={activeItem === "login"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
