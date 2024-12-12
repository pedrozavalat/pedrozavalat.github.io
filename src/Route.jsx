import { Routes, Route, HashRouter } from "react-router-dom";
import Programming from "./pages/Programming/Programming";
import Math from "./pages/Math";
import Home from "./pages/Home/Home";

function Routing() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/math" element={<Math />} />
                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </HashRouter>
    );
}

export default Routing;
