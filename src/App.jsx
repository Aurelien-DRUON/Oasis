import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homescreen from "./pages/Homescreen";
import Searchscreen from "./pages/Searchscreen";
import Accountscreen from "./pages/Accountscreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/search" element={<Searchscreen />} />
        <Route path="/account" element={<Accountscreen />} />
      </Routes>
    </Router>
  );
}

export default App;
