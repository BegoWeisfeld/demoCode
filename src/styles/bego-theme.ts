import {createTheme} from "@mui/material/styles";

/*
 * Global MaterialUI Theme configuration class
 *
 * All adjustments or css-configurations regarding MaterialUI should be added here.
 * see https://material-ui.com/customization/theming/
 *
 */

const cssConfigurationLight = {
  colors: {
    primary: "#C6562C",
    secondary: "#000000",
    primaryHover: "#C17E3B",
    bodyBackground: "#FFFFFF",
    containerBackground: "#E8E8E8",
    cardBackground: "#FFFFFF",
    bodyColor: "#332F2B",
    success: "#3c763d",
    info: "#31708f",
    warning: "#8a6d3b",
    error: "#bc2a39",
    buttonBorder: "#CCCCCC",

  },
  fonts: {
    defaultFont: "Source Sans Pro, sans-serif",
    defaultSize: "14px",
  },
  subtitle1: {
    defaultFont: "1.5rem"
  },
  datePicker: {
    fontSize: "1.5rem"
  }
};

const cssConfigurationDark = {
  colors: {
    primary: "#C6562C",
    secondary: "#FFFFFF",
    primaryHover: "#C17E3B",
    bodyBackground: "#1e1e1e",//"#262626",
    containerBackground: "#121212", //"#181818",
    cardBackground: "#121212",
    bodyColor: "#332F2B",
    success: "#3c763d",
    info: "#31708f",
    warning: "#8a6d3b",
    error: "#bc2a39",
    buttonBorder: "#CCCCCC",

  },
  fonts: {
    defaultFont: "Source Sans Pro, sans-serif",
    defaultSize: "14px",
  },
  subtitle1: {
    defaultFont: "1.5rem"
  },
  datePicker: {
    fontSize: "1.5rem"
  }
};

const createCustomTheme = (mode: string | undefined) => {
  const cssConfig = mode === "DARK" ? cssConfigurationDark : cssConfigurationLight;
  return createTheme({
    palette: {
      mode: mode === "DARK" ? "dark" : "light",
      background: {
        default: cssConfig.colors.containerBackground,
        paper: cssConfig.colors.bodyBackground,
      },
      primary: {
        main: cssConfig.colors.primary,
      },
      secondary: {
        main: cssConfig.colors.secondary,
      },
      success: {
        main: cssConfig.colors.success,
      },
      info: {
        main: cssConfig.colors.info,
      },
      warning: {
        main: cssConfig.colors.warning,
      },
      error: {
        main: cssConfig.colors.error,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: cssConfig.colors.primary,
              color: cssConfig.colors.bodyBackground,
            },
          },
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "8px"
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontSize: '1.5rem !important'
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          caption: {
            fontSize: cssConfig.datePicker.fontSize
          },
          overline: {
            fontSize: cssConfig.datePicker.fontSize
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: cssConfig.colors.cardBackground
          },
        }
      },
      MuiGrid: {
        defaultProps: {
            spacing: 0.3
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundImage: "none"
          }
        }
      },
    },
    typography: {
      button: {
        fontSize: cssConfig.fonts.defaultSize,
      },
      body1: {
        fontSize: cssConfig.fonts.defaultSize,
      },
      body2: {
        fontSize: cssConfig.fonts.defaultSize,
      },
      allVariants: {
        fontFamily: cssConfig.fonts.defaultFont,
      },
      subtitle1: {
        fontSize: cssConfig.subtitle1.defaultFont,
      },
      h6: {
        fontSize: '1.125rem',
        fontWeight: 500,
        fontFamily: "Segoe UI"
      }
    },
  });
}
export default createCustomTheme;
