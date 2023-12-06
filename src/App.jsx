import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homescreen from "./pages/Homescreen/Homescreen";
import Searchscreen from "./pages/Searchscreen/Searchscreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/search" element={<Searchscreen />} />
      </Routes>
    </Router>
  );
}

export default App;
