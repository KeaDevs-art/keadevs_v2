import { useState } from "react";

import {
  NavigationBar,
  Brand,
  NavigationMenuAvatar,
  Menu,
} from "./header.styles";
import NavAvatar from "../../../../assets/anime_avatar.jpg";

const Header = () => {
  const [menuVisible, setIsMenuVisible] = useState(false);

  return (
    <header>
      <NavigationBar>
        <Brand>Kea.devs()</Brand>
        <NavigationMenuAvatar
          src={NavAvatar}
          onClick={() => setIsMenuVisible(!menuVisible)}
        />
      </NavigationBar>
      {menuVisible && <Menu />}
    </header>
  );
};

export default Header;
