import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ISidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext<ISidebarDrawerContextData>(
  {} as ISidebarDrawerContextData,
);

export const SidebarDrawerProvider: React.FC = ({ children }) => {
  const disclosure = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = (): ISidebarDrawerContextData =>
  useContext(SidebarDrawerContext);
