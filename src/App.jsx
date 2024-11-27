import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import View from "./components/View";
import AppNavbar from "./components/AppNavbar";
import Products from "./components/Products";
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <AppNavbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
