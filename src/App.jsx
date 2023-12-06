import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homescreen from "./screens/Homescreen/Homescreen";
import Searchscreen from "./screens/Searchscreen/Searchscreen";

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
