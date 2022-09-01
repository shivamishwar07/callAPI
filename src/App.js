import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import Layout from "./main_app/Layout";

function App() {
  return (
    <div>
      <Router>
          <Routes>
           <Route element={<Layout />} path="/" />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
