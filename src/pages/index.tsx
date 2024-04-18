import Image from "next/image";
import { Inter } from "next/font/google";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
