import React from "react";
import {
  Menu,
  MenuItem,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useKeycloak } from "../context/KeycloakContext.tsx";
import { topMenuEntries } from "./top-menu-config";
import Grid from '@mui/material/Grid'
export type TopMenuItem = {
  key: string;
  path: string;
  label: string;
  icon?: React.ReactNode;
  roles: string[];
  sub?: TopMenuItem[];
  hide?: boolean;
};

export const TopMenu: React.FC = () => {
  const { hasRole } = useKeycloak();
  const location = useLocation();
  const theme = useTheme();

  // only items the user can see
  const visibleEntries = React.useMemo(
    () => topMenuEntries.filter((e) => hasRole(e.roles) && !e.hide),
    [hasRole]
  );

  // which submenu is open and its anchor element
  const [openKey, setOpenKey] = React.useState<string | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  // close submenu when route changes
  React.useEffect(() => {
    if (openKey) {
      setOpenKey(null);
      setAnchorEl(null);
    }
  }, [location.pathname]);

  // toggle submenu on click
  const handleToggle = (
    key: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (openKey === key) {
      setOpenKey(null);
      setAnchorEl(null);
    } else {
      setOpenKey(key);
      setAnchorEl(event.currentTarget);
    }
  };

  // simple close
  const handleClose = () => {
    setOpenKey(null);
    setAnchorEl(null);
  };

  // determine active state
  const isActiveEntry = (entry: TopMenuItem) =>
    entry.sub
      ? entry.sub.some((sub) => sub.path === location.pathname)
      : location.pathname === entry.path;

  const openEntry = visibleEntries.find((e) => e.key === openKey) || null;
  const cols = 3;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 1, ml: 15 }}>
      {visibleEntries.map((entry) => {
        const isOpen = entry.sub && openKey === entry.key;
        const highlightColor =
          isOpen || isActiveEntry(entry)
            ? theme.palette.primary.main
            : theme.palette.text.primary;

        return (
          <Box
            key={entry.key}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 185,
              px: 1,
              position: "relative",
            }}
          >
            {entry.sub ? (
              <Button
                onClick={(e) => handleToggle(entry.key, e)}
                disableRipple
                disableTouchRipple
                sx={{
                  color: highlightColor,
                  fontWeight: isOpen ? 600 : 400,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: highlightColor,
                  },
                }}
              >
                {entry.icon && <Box mr={1}>{entry.icon}</Box>}
                {entry.label}
                <Box component="span" sx={{ ml: 0.5, pointerEvents: "none" }}>
                  <ArrowDropDownIcon fontSize="small" />
                </Box>
              </Button>
            ) : (
              <Button
                component={NavLink}
                to={entry.path}
                sx={{
                  color: highlightColor,
                  fontWeight: isActiveEntry(entry) ? 600 : 400,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: highlightColor,
                  },
                }}
              >
                {entry.icon && <Box mr={1}>{entry.icon}</Box>}
                {entry.label}
              </Button>
            )}
          </Box>
        );
      })}

      {openEntry && anchorEl && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(openKey)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          PaperProps={{
            sx: {
              mt: 0,
              p: 1,
              width: 900,
              borderRadius: 1,
              boxShadow: theme.shadows[4],
            },
          }}
        >
          <Grid container spacing={3}>
            {[
              // include parent page as first submenu item
              ...openEntry.sub!
            ]
              .filter((sub) => hasRole(sub.roles) && !sub.hide)
              .map((sub) => (
                <Grid item xs={12 / cols} key={sub.key}>
                  <MenuItem
                    component={NavLink}
                    to={sub.path}
                    onClick={handleClose}
                    sx={{
                      py: 1,
                      fontWeight:
                        location.pathname === sub.path ? 600 : 400,
                      "&:hover": { backgroundColor: theme.palette.action.hover },
                    }}
                  >
                    {sub.icon && <Box mr={1}>{sub.icon}</Box>}
                    {sub.label}
                  </MenuItem>
                </Grid>
              ))}
          </Grid>
        </Menu>
      )}
    </Box>
  );
};
