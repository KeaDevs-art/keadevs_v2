import { NavigationContextProvider } from "./contexts/navigation.context";

import AppContent from "./content/app-content/app-content";

const App = () => {
  return (
    <NavigationContextProvider>
      <AppContent />
    </NavigationContextProvider>
  );
};

export default App;
