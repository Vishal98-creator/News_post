import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home/Index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="" style={{ marginBottom: "300px" }}>
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
