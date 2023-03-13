import React from "react";
import { SnackbarProvider } from "notistack";

import MainPage from "./pages/MainPage";

import "./styles/main.scss";

function App() {
  return (
    <SnackbarProvider>
      <MainPage />
    </SnackbarProvider>
  );
}

export default App;
