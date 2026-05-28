import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HydraulicsPage from "../pages/businesses/HydraulicsPage"; // Import the Hydraulics page component
import EngineeringWorks from "../pages/businesses/EngineeringWorks"; // Import the Engineering Works page component
import SteelTradingPage from "../pages/businesses/SteelTradingPage"; // Import the Steel Trading page component
import TransportPage from "../pages/businesses/TransportPage"; // Import the Transport page component
import CattleField from "../pages/businesses/DDGSPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/businesses/hydraulics" element={<HydraulicsPage />} /> {/* Add this line for the Hydraulics page route */}
                    <Route path="/businesses/engineering-works" element={<EngineeringWorks />} /> {/* Add this line for the Engineering Works page route */}
                    <Route path="/businesses/steel-trading" element={<SteelTradingPage />} /> {/* Add this line for the Steel Trading page route */}
                    <Route path="/businesses/transport" element={<TransportPage />} /> {/* Add this line for the Transport page route */}
                    <Route path="/businesses/cattle-feed" element={<CattleField />} /> {/* Add this line for the Cattle Feed page route */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;