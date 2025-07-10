// .storybook/mocks/KeycloakContext.tsx
import * as React from 'react';

export interface KeycloakContextValue {
    auth: boolean;
    keycloak: { token: string };
    dispatch: (v: any) => void;
    hasRole: (roles: string[]) => boolean;
}

export const KeycloakContext = React.createContext<KeycloakContextValue>({
    auth: true,
    keycloak: { token: '' },
    dispatch: () => {},
    hasRole: () => true,
});

export const useKeycloak = () => React.useContext(KeycloakContext);
