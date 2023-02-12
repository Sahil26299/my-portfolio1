import React from 'react'
import LandingScreen from './Screens/LandingScreen/LandingScreen'
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App() {
  return (
    <ProSidebarProvider>
      <LandingScreen/>
    </ProSidebarProvider>
  )
}
