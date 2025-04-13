import { StyledEngineProvider, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ScenarioCard } from "./ScenarioCard";


const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: 'Outfit, Arial, Gloomhaven, sans-serif;'
  },

}

const theme = createTheme(themeOptions);

const router = createBrowserRouter([
  {
    path: import.meta.env.VITE_BASEURL,
    element: <App />,
    children: [
      {
        path: import.meta.env.VITE_BASEURL + "scenarios/:scenarioId",
        element: <ScenarioCard />
      }
    ]
  },
]);

console.log('import.meta.env.VITE_BASEURL', import.meta.env.VITE_BASEURL);

const initApp = async() => {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

initApp();