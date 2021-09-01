import { Flex } from '@chakra-ui/layout';
import { Sidebar } from '../../../../components/Sidebar';

export const DefaultLayout: React.FC = ({ children }) => (
  <Flex direction="column" minH="100vh">
    <Flex minH="100vh">
      <Sidebar />
      <Flex w="100%" my="6" px="6">
        {children}
      </Flex>
    </Flex>
  </Flex>
);
