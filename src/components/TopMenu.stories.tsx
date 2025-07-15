// src/components/TopMenu/TopMenu.stories.tsx
import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {TopMenu} from './top-menu';
import {MemoryRouter} from 'react-router-dom';
import {KeycloakContext, KeycloakContextValue} from '../context/KeycloakContext';
import {ThemeProvider} from '@mui/material/styles';
import createCustomTheme from '../styles/bego-theme';
import {COLOR_MODES} from '../util/profile-utils';
import CssBaseline from '@mui/material/CssBaseline';
import {Environment} from '../config';
import { userEvent, within } from '@storybook/testing-library';

// build a flat list of all possible roles from your Environment
const allRoles = Object.values(Environment.role).flat() as string[];

// default Keycloak context factory
const makeContext = (allowed: string[]): KeycloakContextValue => ({
    auth: true,
    keycloak: {token: 'fake'},
    dispatch: () => {
    },
    hasRole: (required: string[]) => required.every(r => allowed.includes(r)),
});

const meta: Meta<typeof TopMenu> = {
    title: 'Navigation/TopMenu',
    component: TopMenu,
    argTypes: {
        // let user choose light vs dark
        colorMode: {
            control: {type: 'radio'},
            options: Object.values(COLOR_MODES),
        },
        // let user pick which roles are granted
        roles: {
            control: {
                type: 'inline-check',
                // each checkbox will correspond to one unique role
                options: allRoles,
            },
            description: 'Which user roles are granted',
        },
        // let user pick the starting route
        initialEntries: {
            control: 'array',
            description: 'React-Router start path',
        },
    },
    args: {
        colorMode: COLOR_MODES.LIGHT,
        roles: allRoles,
        initialEntries: ['/dashboard'],
    },
    decorators: [
        (Story, {args}) => (
            <MemoryRouter initialEntries={args.initialEntries}>
                <KeycloakContext.Provider value={makeContext(args.roles)}>
                    <ThemeProvider theme={createCustomTheme(args.colorMode)}>
                        <CssBaseline/>
                        <Story/>
                    </ThemeProvider>
                </KeycloakContext.Provider>
            </MemoryRouter>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof TopMenu>;

// basic default
export const Default: Story = {};

// submenu already expanded via route+play
export const WithSubmenuOpen: Story = {
    args: {initialEntries: ['/administration']},
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const adminBtn = await canvas.getByRole('button', {name: /Administration/i});
        await userEvent.click(adminBtn);
    },
};

// highlight Dashboard tab
export const DashboardActive: Story = {
    args: {initialEntries: ['/dashboard']},
};

// highlight Client Trades tab
export const ClientTradesActive: Story = {
    args: {initialEntries: ['/client-trades']},
};

export const CatchingClickMatchingBooks: Story = {
    // start on Dashboard so MatchingBooks is NOT active
    parameters: { initialEntries: ['/dashboard'] },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // find the <a> (not a <button>!) by its accessible name
        const link = await canvas.getByRole('link', { name: /Matching Books/i });

        // hover it — this will light it up in primary.main (orange)
        await userEvent.click(link);

        // pause briefly so you can actually *see* the hover
        await new Promise((r) => setTimeout(r, 250));
    },
};

export const ClickActions: Story = {
    name: '🖱️ Click actions',
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        // click a few items to see them pop in the Actions panel
        await userEvent.click(await canvas.getByRole('link', { name: /Dashboard/i }));
        await userEvent.click(await canvas.getByRole('link', { name: /Matching Books/i }));
        await userEvent.click(await canvas.findByRole('button', { name: /Administration/i }));
    },
};
