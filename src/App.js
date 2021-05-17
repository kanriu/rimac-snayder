import React from "react";
import { UiProvider } from "./context/UiContext";
import { RouterPage } from "./router/RouterPage";
import GlobalStyle from "./assets/theme/globalStyles";

const App = () => {
  return (
    <UiProvider>
      <GlobalStyle />
      <RouterPage />
    </UiProvider>
  );
};

export default App;
