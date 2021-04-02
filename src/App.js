import "./App.css";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";



import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
