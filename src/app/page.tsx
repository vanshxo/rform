"use client";
import Image from "next/image";
import RegistrationForm from "./components/ui/RegistrationForm";
import Landing from "./components/ui/Landing";
import Confirm from "./components/ui/Confirm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Home() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/form" element={<RegistrationForm />} /> {/* Route for the form */}
    </Routes>
  </Router>
    
  );
}
