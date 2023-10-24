import { Outlet, Link } from "react-router-dom";
import { List,ListItemButton,ListItemText,ListItem } from '@mui/material';
const Layout = () => {
  return (
    <div style={{display :"flex"}}>
      <nav style={{
        padding: "5%",
        marginRight :"1%",
        minWidth: "40%",
        minHeight: "900px",
        background: "#F0F0F0"
      }}>
        <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Inicio" />
            </ListItemButton>
            <ListItemButton component={Link} to="/alumno">
              <ListItemText primary="Alumno" />
            </ListItemButton>
            <ListItemButton component="a" to="/profesor">
              <ListItemText primary="Profesor" />
            </ListItemButton>
         </List>
      </nav>
      <div>
      <Outlet />
      </div>
    </div>
  )
};

export default Layout;