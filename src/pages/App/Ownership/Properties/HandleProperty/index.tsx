import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { DefaultLayout } from '../../../_layout/DefaultLayout';
import { PropertyFormData, Property } from './Property';
import { PropertyAddress } from './PropertyAddress';

import 'react-datepicker/dist/react-datepicker.css';

interface ILocationState {
  propertyId?: string;
}

interface IProperty extends PropertyFormData {
  id?: string;
}

export const HandleProperty = (): JSX.Element => {
  const { state } = useLocation<ILocationState>();

  const [tabIndex, setTabIndex] = useState(0);
  const [property, setProperty] = useState<IProperty>();

  useEffect(() => {
    async function loadProperty(): Promise<void> {
      // API FETCH...

      setProperty({
        id: state?.propertyId,
        businessType: 'sell',
        propertyOwnerId: 'd92f198b-a50b-46e6-bfd2-c75f9ac117d1',
        propertyOwner: {
          id: 'd92f198b-a50b-46e6-bfd2-c75f9ac117d1',
          name: 'owner1',
        },
      });
    }

    // carrega dados se tiver editando
    if (state?.propertyId) {
      loadProperty();
    }
  }, [state?.propertyId]);

  const handleTabChange = useCallback((index: number) => {
    setTabIndex(index);
  }, []);

  const handleNewProperty = useCallback((propertyData: PropertyFormData) => {
    setProperty(propertyData);
    setTabIndex(1);
  }, []);

  return (
    <DefaultLayout>
      <Box flex="1" borderRadius={8} bg="white" p="8">
        <Tabs
          index={tabIndex}
          onChange={handleTabChange}
          variant="enclosed-colored"
        >
          <TabList>
            <Tab>Imóvel</Tab>
            <Tab isDisabled={!property}>Endereço</Tab>
          </TabList>

          <TabPanels>
            <TabPanel mt="4">
              <Property property={property} onSubmit={handleNewProperty} />
            </TabPanel>

            <TabPanel mt="4">
              <PropertyAddress />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </DefaultLayout>
  );
};
