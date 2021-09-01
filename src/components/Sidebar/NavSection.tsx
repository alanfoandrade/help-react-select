import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface INavSectionProps {
  title: string;
  children: ReactNode;
}

export const NavSection: React.FC<INavSectionProps> = ({ title, children }) => (
  <Box>
    <Text fontWeight="bold" color="gray.500" fontSize="sm">
      {title}
    </Text>
    <Stack spacing="4" mt="8" align="stretch">
      {children}
    </Stack>
  </Box>
);
