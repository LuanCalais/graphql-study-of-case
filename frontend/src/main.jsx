import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient.js";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <App />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
