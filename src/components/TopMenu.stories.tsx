// src/components/TopMenu/TopMenu.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopMenu } from './top-menu';
import { MemoryRouter } from 'react-router-dom';
import { KeycloakContext } from '../context/KeycloakContext';
import { ThemeProvider } from '@mui/material/styles';
import createCustomTheme from '../styles/bego-theme';
import { COLOR_MODES } from '../util/profile-utils';
import CssBaseline from '@mui/material/CssBaseline';
import {userEvent, within} from "storybook/test";

// A fake KeycloakProvider that says “yes” to every role
const AllRolesProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <KeycloakContext.Provider
    value={{
      auth: true,
      keycloak: { token: 'fake' },
      dispatch: () => {},
      hasRole: () => true,
    } as any}
  >
    {children}
  </KeycloakContext.Provider>
);
const theme = createCustomTheme(COLOR_MODES.LIGHT);

const meta: Meta<typeof TopMenu> = {
  title: 'Navigation/TopMenu',
  component: TopMenu,
  decorators: [
    (Story, context) => {
      // Look for `parameters.initialEntries`, default to ['/']
      const initialEntries: string[] = context.parameters.initialEntries ?? ['/'];

      return (
        <MemoryRouter initialEntries={initialEntries}>
          <AllRolesProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Story/>
            </ThemeProvider>
          </AllRolesProvider>
        </MemoryRouter>
      );
    },
  ],
  parameters: {
    initialEntries: ['/'],
  },
};
export default meta;

type Story = StoryObj<typeof TopMenu>;

// The default “top-level” menu
export const Default: Story = {};

// Show the menu with one of its submenus open by default
export const WithSubmenuOpen: Story = {
  parameters: {
    // switch to the real "/administration" route so that Admin is highlighted
    initialEntries: ['/administration'],
  },
  play: async ({ canvasElement }) => {
    // find the rendered Tree, click the "Administration" button to open its submenu
    const canvas = within(canvasElement);
    const adminBtn = await canvas.getByRole('button', { name: /Administration/i });
    await userEvent.click(adminBtn);
  },
};

export const DashboardActive: Story = {
  parameters: { initialEntries: ['/dashboard'] },
};

export const ClientTradesActive: Story = {
  parameters: { initialEntries: ['/client-trades'] },
};
