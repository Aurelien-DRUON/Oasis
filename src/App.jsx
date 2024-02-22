import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homescreen from "./pages/Homescreen";
import Searchscreen from "./pages/Searchscreen";
import Accountscreen from "./pages/Accountscreen";
import Detailscreen from "./pages/Detailscreen/Detailscreen";
import Layoutscreen from "./pages/Layoutscreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layoutscreen />}>
          <Route index element={<Homescreen />} />
          <Route path="/search" element={<Searchscreen />} />
          <Route path="/account" element={<Accountscreen />} />
          <Route path="/details/:id" element={<Detailscreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
