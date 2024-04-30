import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { DrawerHeader } from "../drawerHeader/DrawerHeader";

import { AdbOutlined, Contacts, Home, Settings } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface ISidebarProps {
  children?: React.ReactNode;
  open: boolean;
  handleDrawerChange: () => void;
}

export function Sidebar({ children, open, handleDrawerChange }: ISidebarProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  let navigate = useNavigate();
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerChange}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding onClick={() => navigate("/home")}>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/contacts")}>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => {
                handleListItemClick(event, 1);
              }}
            >
              <ListItemIcon>
                <Contacts />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/about")}>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <AdbOutlined />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/settings")}>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  );
}
