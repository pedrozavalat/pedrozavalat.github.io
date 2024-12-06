import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./pages/App";
import Programming from "./pages/Programming";
import Math from "./pages/Math";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/math" element={<Math />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing