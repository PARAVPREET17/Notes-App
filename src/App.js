import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notepage from "./pages/Notepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<Notepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
