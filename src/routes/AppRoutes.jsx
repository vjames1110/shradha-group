import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HydraulicsPage from "../pages/businesses/HydraulicsPage"; // Import the Hydraulics page component

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/businesses/hydraulics" element={<HydraulicsPage />} /> {/* Add this line for the Hydraulics page route */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;