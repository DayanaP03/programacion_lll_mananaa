import { Routes, useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/app.routes";
import { AuthProvider } from "./context/AuthContext";
import { UiProvider } from "./context/UiContext";
import type { JSX } from "@emotion/react/jsx-runtime";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);

  return (
    <AuthProvider>
      
      <UiProvider>{routes}</UiProvider>
    </AuthProvider>
  );
}