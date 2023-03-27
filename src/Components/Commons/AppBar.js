import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Images } from '../../Utils/Images';
import { ColorSchema } from '../../Utils/Context/ColorThemes';
import { LightMode, DarkMode } from '@mui/icons-material';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Introduction from './Introduction/Introduction';
import Services from './Services/Services';
import ExtraCurricular from './ExtraCurricular/ExtraCurricular';
import ContactDetails from './ContactDetails/ContactDetails';
import { useLocation } from 'react-router-dom';

// const pages = [{name:'Home', route:'/'}, {name:'Profile', route:'/introduction'}, {name:'Services', route:'/services'}, {name:'Extra Curricular', route:'/extras'}, {name:'Contact', route:'/contact'}];
const pages = {
  Home:'/',
  Profile:'/profile',
  Services:'/services',
  Extra_Curricular : '/extra',
  Contact:'/contact'
}
function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [SelectedTab, setSelectedTab] = React.useState('/')
  const Colors = React.useContext(ColorSchema);
  const location = useLocation();
  React.useEffect(() => {
    setSelectedTab(location?.pathname)
  }, [location?.pathname])
  
  const [screenDimensions, setScreenDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const HandleSwitchTheme = () => {
    Colors.setisDarkMode(!Colors.isDarkMode)
  }

  const handleCloseNavMenu = (name) => {
    setAnchorElNav(null);
    setSelectedTab(name)

  };

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: Colors.newVar.BGColor }} >
        <Container maxWidth="xl" >
          <Toolbar disableGutters >
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              fontFamily={'Poppins'}
              className={'AppHeader'}
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: Colors.newVar.TXTColor,
                textDecoration: 'none',
              }}
            >
              PORTFOLIO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{color:Colors.newVar.TXTColor}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {Object.keys(pages).map((page) => (
                  <MenuItem component={Link} to={pages[page]} key={page} onClick={handleCloseNavMenu}>
                    <Typography fontFamily={'Poppins'} textAlign="center">{page?.indexOf('_')>-1 ? page?.split('_').join(' ') : page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              className="AppHeader"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: screenDimensions.width<450 ? '.2rem' : '.3rem',
                color: Colors.newVar.TXTColor,
                textDecoration: 'none',
              }}
            >
              PORTFOLIO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Object.keys(pages).map((page) => (
                <Button
                  className='NavigationButtons'
                  key={page} 
                  component={Link}
                  to={pages[page]}
                  onClick={()=>handleCloseNavMenu(pages[page])}
                  sx={{ color: SelectedTab==pages[page] ? 'orange' : Colors.newVar.TXTColor, display: 'block', mx: 1, height:'100%', borderColor:'red', borderWidth:1 }}
                >
                  {page?.indexOf('_')>-1 ? page?.split('_').join(' ') : page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                <Tooltip title={Colors.isDarkMode ? "Dark Theme" : "Light Theme"} >
                  <IconButton onClick={HandleSwitchTheme} sx={{ p: 0, mx: screenDimensions.width<450 ? 2 : 3 }}>
                    {Colors.isDarkMode ? 
                    <DarkMode color='dark' fontSize={screenDimensions.width<450 ? 'medium' : 'large'} htmlColor='orange' /> :
                    <LightMode color='light' fontSize={screenDimensions.width<450 ? 'medium' : 'large'} htmlColor='orange' />}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Hello! 😄">
                  <IconButton component={Link} to={'/profile'} onClick={null} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={Images.ProfilePicture} className={'ProfilePictureOnAppBar'} style={{height: screenDimensions.width<450 && 22, width: screenDimensions.width<450 && 22}} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path="profile" element={<Introduction />} />
            <Route path="services" element={<Services />} />
            <Route path="extra" element={<ExtraCurricular />} />
            <Route path="contact" element={<ContactDetails />} />
        </Routes>
    </>
  );
}
export default ResponsiveAppBar;
