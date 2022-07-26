import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Sewer } from "./pages/sewer";
import { Town } from "./pages/town";
import { Ruins } from "./pages/ruins";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Gnrtr } from "./pages/gnrtrfront";
import { Myinventory } from "./pages/inventory";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar 
                    header = "Tiles Generator"
                    home = "Inventory"
                    signup = "Signup"
                    login = "Login"/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Sewer />} path="/sewer" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Ruins />} path="/ruins" />
                        <Route element={<Town />} path="/town" />
                        <Route element={<Gnrtr />} path="/gnrtr" />
                        <Route element={<Myinventory />} path="/myinventory" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
