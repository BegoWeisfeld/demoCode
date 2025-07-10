// src/App.tsx (demo)/ 1) GLOBAL STYLES
import './styles/css/global.css';
import './components/common/header/header.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

// 2) MUI THEME
import { ThemeProvider, CssBaseline } from '@mui/material';
import createCustomTheme from './styles/bego-theme';
import { COLOR_MODES } from './util/profile-utils';

// 3) ROUTER
import { MemoryRouter } from 'react-router-dom';

// 4) STUB KEYCLOAK CONTEXT
import { KeycloakContext } from '../.storybook/mocks/KeycloakContext';

// 5) YOUR COMPONENT
import { TopMenu } from './components/top-menu';

const theme = createCustomTheme(COLOR_MODES.LIGHT);

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* fake “logged in” user with every role */}
            <KeycloakContext.Provider
                value={{
                    auth: true,
                    keycloak: { token: 'fake-jwt' },
                    dispatch: () => {},
                    hasRole: () => true,
                }}
            >
                {/* start at / so no submenu open; change this array to ['/administration'] to demo open */}
                <MemoryRouter initialEntries={['/']}>
                    <TopMenu />
                </MemoryRouter>
            </KeycloakContext.Provider>
        </ThemeProvider>
    );
}
