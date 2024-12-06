import { Routes, Route, HashRouter } from "react-router-dom"
import App from "./pages/App";
import Programming from "./pages/Programming";
import Math from "./pages/Math";

function Routing() {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/math" element={<Math />} />
                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </HashRouter>
    );
}
export default Routing