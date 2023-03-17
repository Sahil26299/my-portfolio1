import React from 'react'
import LandingScreen from './Screens/LandingScreen/LandingScreen'
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from './Components/Commons/AppBar'
import { ColorSchema } from './Utils/Context/ColorThemes';

export default function App() {
  const Colors = React.useContext(ColorSchema);
  return (
    <div style={{backgroundColor:Colors.newVar.BGColor}} >
      <ProSidebarProvider>
        <BrowserRouter>
          <ResponsiveAppBar />
        </BrowserRouter>
      </ProSidebarProvider>
    </div>
  )
}
