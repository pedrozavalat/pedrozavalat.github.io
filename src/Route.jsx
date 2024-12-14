import { Routes, Route, HashRouter } from "react-router-dom";
import Programming from "./pages/Programming/Programming";
import Math from './pages/Math/Math';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";


function Routing() {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/math" element={<Math />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default Routing;
