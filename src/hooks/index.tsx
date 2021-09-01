import React from 'react';

import { SidebarDrawerProvider } from './sidebarDrawer';

const AppProvider: React.FC = ({ children }) => (
  <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
);

export default AppProvider;
