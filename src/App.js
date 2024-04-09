import "./App.css";
import FlowPage from "./pages/FlowPage";
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
