import "./App.css";
import Clockicon from "./components/ClockIcon/Clockicon";
import Flow from "./components/Flow/Flow";
import Navbar from "./components/Navbar/Navbar";
import TextCarousel from "./components/TextCarousel/TextCarousel";
import Timeline from "./components/Modal/Modal";
import FlowPage from "./pages/FlowPage";
import Modal from "./components/Modal/Modal";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/flow">
          <FlowPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
