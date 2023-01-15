import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/video/Video";
import SignIn from "./pages/signIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />{" "}
          <Route path="signin" element={<SignIn />} />
          <Route path="video">
            <Route path=":id" element={<Video />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
