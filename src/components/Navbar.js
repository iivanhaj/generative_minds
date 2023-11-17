import React from 'react';
import { Portal } from '@radix-ui/react-portal';
import { Menu, MenuItem, MenuAnchor, MenuContent } from '@radix-ui/react-menu';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Menu>
        <MenuAnchor>
          <button>Home</button>
        </MenuAnchor>
        <MenuAnchor>
          <button>About</button>
        </MenuAnchor>
        <MenuAnchor>
          <button>Features</button>
        </MenuAnchor>
      </Menu>
    </nav>
  );
};

export default Navbar;