import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import { UserProvider } from "./Components/Context/UserContext.jsx";
import UserPage from "./Components/Userpage.jsx";
import Socials from "./Components/Socials.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/socials" element={<Socials />} />
          <Route>
            <Route path="/users" element={<UserPage />} />
            <Route path="/post" element={<UserPage />} />
          </Route>
          {/* </div> */}
        </Routes>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  );
}
