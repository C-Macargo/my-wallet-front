import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Profit from "./pages/Profit"
import Debt from "./pages/Debt"

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<Signup/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/nova-entrada" element={<Profit/>} />
            <Route path="/nova-entrada" element={<Debt/>} />
        </Routes>
    </BrowserRouter>
    )
    }