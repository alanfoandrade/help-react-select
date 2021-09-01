import { Stack } from '@chakra-ui/react';
import { RiBuilding4Line } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export const SidebarNav = (): JSX.Element => (
  <Stack spacing="12" align="flex-start" minWidth="170px">
    <NavSection title="PROPRIEDADES">
      <NavLink icon={RiBuilding4Line} to="/properties">
        Imóveis
      </NavLink>
    </NavSection>
  </Stack>
);
