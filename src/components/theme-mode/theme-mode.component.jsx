import { useState } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="mode">
      {isDarkMode ? (
        <LightModeIcon onClick={toggleMode} />
      ) : (
        <DarkModeIcon onClick={toggleMode} />
      )}
    </div>
  );
};
