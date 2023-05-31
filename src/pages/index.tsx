import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Past from "../components/Past";
import SimpleSidebar from "../components/Sidebar";
import Present from "../components/Present";
import Future from "../components/Future";
import Contact from "../components/Contact";

const Index = () => (
  <Router>
    <SimpleSidebar>
      <AnimatePresence>
        <Routes>
          <Route path="/" Component={Present} />
          <Route path="/past" Component={Past} />
          <Route path="/future" Component={Future} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </AnimatePresence>
    </SimpleSidebar>
  </Router>
);

export default Index;
