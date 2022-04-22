import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "features/Home";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
