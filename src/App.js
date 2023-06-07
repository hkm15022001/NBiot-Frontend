import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
