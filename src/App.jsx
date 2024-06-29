import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/mainPage";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/productos" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
