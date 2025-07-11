import * as React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createCustomTheme from '../src/styles/bego-theme';
import { COLOR_MODES } from '../src/util/profile-utils';

// If your TopMenu needs header.css or other globals:
import '../src/components/common/header.css';
import '../src/styles/css/global.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

if (typeof globalThis.location === 'undefined') {
    globalThis.location = {
        href: '',
        origin: '',
        protocol: 'http:',
        host: 'localhost',
        hostname: 'localhost',
        port: '',
        pathname: '',
        search: '',
        hash: '',
    } as Location;
}

const lightTheme = createCustomTheme(COLOR_MODES.LIGHT);

export const decorators = [
    (Story) => (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    ),
];

export const parameters: Preview['parameters'] = {
    viewport: { defaultViewport: 'responsive' },
    controls: { matchers: { color: /(background|color)$/i } },

};
