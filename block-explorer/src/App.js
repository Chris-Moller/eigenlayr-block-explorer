import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;
