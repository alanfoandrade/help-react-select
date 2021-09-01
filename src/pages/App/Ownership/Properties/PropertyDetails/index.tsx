import { Box, ButtonGroup } from '@chakra-ui/react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import { DefaultLayout } from '../../../_layout/DefaultLayout';
import LinkButton from '../../../../../components/LinkButton';

export const PropertyDetails = (): JSX.Element => (
  <DefaultLayout>
    <Box flex="1" borderRadius={8} bg="white" p="8">
      <ButtonGroup>
        <LinkButton
          colorScheme="green"
          icon={RiAddLine}
          to="/properties/register"
        >
          Cadastrar
        </LinkButton>

        <LinkButton
          colorScheme="yellow"
          color="white"
          icon={RiEditLine}
          to={{
            pathname: '/properties/update',
            state: {
              propertyId: '123123123',
            },
          }}
        >
          Editar
        </LinkButton>
      </ButtonGroup>
    </Box>
  </DefaultLayout>
);
