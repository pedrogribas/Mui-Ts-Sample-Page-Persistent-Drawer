import { Menu } from "@mui/icons-material";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { AppBarComp, Sidebar } from "./shared";

function App() {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("/");

  const handleDrawerChange = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <AppBarComp handleDrawerChange={handleDrawerChange} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerChange}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h4" color="initial">
            Logo Name
          </Typography>
        </Toolbar>
      </AppBarComp>
      <Sidebar handleDrawerChange={handleDrawerChange} open={open}>
        <Typography variant="h4" color="initial">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Typography>
      </Sidebar>
    </div>
  );
}

export default App;
