import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home/Index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./components/Footer";
import Router from "./Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
    </ThemeProvider>
  );
}

export default App;
