import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Wrapper>
  );
}
