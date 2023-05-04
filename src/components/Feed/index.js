import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {useNavigate} from 'react-router-dom'
import { createTheme,ThemeProvider } from '@mui/material/styles';

import Cardapio from './Cardapio';
import Avisos from './Avisos';
import SobreNos from './SobreNos';

import logo from './logo.png';


const theme = createTheme({
    components: {
        MuiListItemButton: {
          styleOverrides: {
            root: {
              '&.Mui-selected': {
                backgroundColor: 'rgba(131, 162, 185,1)', 
                '&:hover': {
                    backgroundColor: 'rgba(131, 162, 185,0.8)', 
                  },
              },
              
            },
          },
        },
      },
});

const drawerWidth = 280;

function Feed(props) {
  const { window } = props;
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState({ index:0,component: <Cardapio/>}); // Novo estado
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleListItemClick = (event, component) => {
    setSelectedComponent({index: component.index, component: component.component}); 
  };

  const LogOut = () => {
    console.log('clicpu ')
    navigate('/')
  }

  const componentes = [
    {nome: 'Cardápio',  width:25 , index:0 , component: <Cardapio/> },
    {nome: 'Avisos', width:18 ,index:1 , component: <Avisos/> },
    {nome: 'Sobre nós',width: 20,index:2 , component: <SobreNos/> },
]
  const drawer = (
    <div style={{backgroundColor: 'rgba(7, 29, 65, 1)'}}>
      <div style={{display:'flex', justifyContent:'center', marginTop: '20%'}}>
        <img src={logo} alt='logo' width='80%'/>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', marginTop: '5%'}} >
      {/* <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
        </IconButton> */}
      </div>
      <Toolbar />
      <Divider />
      <ThemeProvider theme={theme} >
      <List sx={{ m: 1}}>
  {componentes.map((item, index) => (
    <ListItem key={index} disablePadding sx={{ borderRadius: '15px', mb: 1 }}>
      {!(selectedComponent.index === item.index) ? (
        <ListItemButton
          emButton
          onClick={(event) => handleListItemClick(event, item)}
          sx={{ borderRadius: '15px',height: 50}}
          selected={selectedComponent.index === item.index}
          
        >
          <ListItemText primary={item.nome} primaryTypographyProps={{ fontSize: '20px',  color: 'white' }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          emButton
          onClick={(event) => handleListItemClick(event, item)}
          sx={{ borderRadius: '15px',height: 50}}
          selected={selectedComponent.index === item.index}
        >
         
          <ListItemText primary={item.nome} primaryTypographyProps={{ fontSize: '24px', color: 'white' }} />
        </ListItemButton>
      )}
    </ListItem>
  ))}
</List>
<div style={{color: "rgba(131, 162, 185, 1)", textDecoration: 'underline', cursor:'pointer', marginLeft: '5%'}} onClick={LogOut} >SAIR</div>

      </ThemeProvider>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            display: { md: 'none' },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#EFEBEB'
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          elevation={1}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#071D41' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,bgcolor: '#071D41' },
            backgroundColor: '#EFEBEB'
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {selectedComponent.component}
        {console.log(selectedComponent)
        }
      </Box>
    </Box>
  );
}

Feed.propTypes = {
  window: PropTypes.func,
};

export default Feed;