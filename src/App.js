//Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

//Pages//
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Deposit from "./pages/Deposit"
import Withdraw from "./pages/Withdraw"

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<Signup/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/nova-entrada" element={<Deposit/>} />
            <Route path="/nova-saida" element={<Withdraw/>} />
        </Routes>
    </BrowserRouter>
    )
    }