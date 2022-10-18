import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes";
import ThemeProvider from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
        </ThemeProvider>
    </div>
  );
}

export default App;
