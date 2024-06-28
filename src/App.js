import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home/Index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./components/Footer";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
