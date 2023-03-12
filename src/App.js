import React from 'react'
import LandingScreen from './Screens/LandingScreen/LandingScreen'
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './Components/Commons/AppBar'
import Home from './Components/Commons/Home/Home';
import Introduction from './Components/Commons/Introduction/Introduction';
import Services from './Components/Commons/Services/Services';
import ContactDetails from './Components/Commons/ContactDetails/ContactDetails';
import ExtraCurricular from './Components/Commons/ExtraCurricular/ExtraCurricular';

export default function App() {
  return (
    <ProSidebarProvider>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={null}>
            <Route index element={<Home />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="services" element={<Services />} />
            <Route path="extras" element={<ExtraCurricular />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProSidebarProvider>
  )
}
