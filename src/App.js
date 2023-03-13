import React from 'react'
import LandingScreen from './Screens/LandingScreen/LandingScreen'
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from './Components/Commons/AppBar'

export default function App() {
  return (
    <ProSidebarProvider>
      <BrowserRouter>
        <ResponsiveAppBar />
      </BrowserRouter>
    </ProSidebarProvider>
  )
}
