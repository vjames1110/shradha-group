import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HydraulicsPage from "../pages/services/HydraulicsPage"; // Import the Hydraulics page component
import EngineeringWorks from "../pages/services/EngineeringWorks"; // Import the Engineering Works page component
import SteelTradingPage from "../pages/services/SteelTradingPage"; // Import the Steel Trading page component
import TransportPage from "../pages/services/TransportPage"; // Import the Transport page component
import CattleField from "../pages/services/DDGSPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/hydraulics" element={<HydraulicsPage />} /> {/* Add this line for the Hydraulics page route */}
                    <Route path="/services/engineering-works" element={<EngineeringWorks />} /> {/* Add this line for the Engineering Works page route */}
                    <Route path="/services/steel-trading" element={<SteelTradingPage />} /> {/* Add this line for the Steel Trading page route */}
                    <Route path="/services/transport" element={<TransportPage />} /> {/* Add this line for the Transport page route */}
                    <Route path="/services/cattle-feed" element={<CattleField />} /> {/* Add this line for the Cattle Feed page route */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;