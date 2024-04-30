import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { DrawerHeader } from "../drawerHeader/DrawerHeader";
const drawerWidth = 240;

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<IAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface IAppBarProps {
  handleDrawerChange?: () => void;
  open: boolean;
  children?: React.ReactNode;
}

export function AppBarComp({ open, children }: IAppBarProps) {
  return (
    <>
      <DrawerHeader />
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="fixed" open={open}>
          {children}
        </StyledAppBar>
      </Box>
    </>
  );
}
