import { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import { AsyncSelect } from '../../../../../../components/Form/AsyncSelect';
import { ReactSelect } from '../../../../../../components/Form/ReactSelect';

type SelectOption = {
  label: string;
  value: string;
};

type PropertyOwner = {
  id: string;
  name: string;
};

export type PropertyFormData = {
  businessType: 'rent' | 'sell' | 'sellAndRent';
  propertyOwnerId: string;
  propertyOwner: PropertyOwner;
};

interface IPropertyProps {
  onSubmit(propertyData: PropertyFormData): void;
  property?: PropertyFormData;
}

const propertyRegisterFormSchema = Yup.object().shape({
  businessType: Yup.string().nullable().required('Requerido'),
  propertyOwnerId: Yup.string().uuid().required('Requerido'),
});

export const Property = ({
  onSubmit,
  property,
}: IPropertyProps): JSX.Element => {
  const { goBack } = useHistory();
  const { control, handleSubmit, formState, reset, getValues, watch } = useForm(
    {
      resolver: yupResolver(propertyRegisterFormSchema),
      defaultValues: property,
    },
  );

  const mockedOwnwers = useMemo(
    () => [
      { id: 'd92f198b-a50b-46e6-bfd2-c75f9ac117d1', name: 'Jose maria' },
      { id: 'b2199a08-e89f-4606-8d5c-ee16fb6960d9', name: 'Pedro' },
      { id: '56d43f08-070e-4889-92d6-a50c1baff112', name: 'Eduardo' },
    ],
    [],
  );

  const { errors } = formState;

  const loadPropertyOwner = useCallback(
    async (name?: string): Promise<PropertyOwner[]> => {
      if (name) {
        return mockedOwnwers.filter((owner) =>
          owner.name.toLowerCase().includes(name.toLowerCase()),
        );
      }

      return mockedOwnwers;
    },
    // API FETCH...
    // async (name?: string): Promise<PropertyOwner[]> =>
    //   const filter = name
    //   ? {
    //       params: {
    //         name,
    //       },
    //     }
    //   : undefined;

    // const { data } = await api.get<PropertyOwner[]>(
    //   '/property-owners',
    //   filter,
    // );
    [mockedOwnwers],
  );

  const handleLoadPropertyOwnerSelectOption = useCallback(
    async (name?: string): Promise<SelectOption[]> => {
      const propertyOwners = await loadPropertyOwner(name);

      const parsedPropertyOwnersSelectOption = propertyOwners.map(
        (propertyOnwer) => ({
          label: propertyOnwer.name,
          value: propertyOnwer.id,
        }),
      );

      return parsedPropertyOwnersSelectOption;
    },
    [loadPropertyOwner],
  );

  useEffect(() => {
    reset(property);
  }, [reset, property]);

  const businessTypeSelectOptions = useMemo<SelectOption[]>(
    () => [
      { label: 'Locação', value: 'rent' },
      { label: 'Venda', value: 'sell' },
      { label: 'Venda e locação', value: 'sellAndRent' },
    ],
    [],
  );

  const handleNewProperty: SubmitHandler<PropertyFormData> = useCallback(
    (propertyData) => {
      console.log('PropertyFormData', propertyData);

      onSubmit(propertyData);
    },
    [onSubmit],
  );

  return (
    <Box as="form" onSubmit={handleSubmit(handleNewProperty)}>
      <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
        <Box>
          <AsyncSelect
            label="Proprietário"
            name="propertyOwnerId"
            loadOptions={handleLoadPropertyOwnerSelectOption}
            control={control}
            error={errors.propertyOwnerId}
          />

          <Text>
            selected:
            {watch('propertyOwnerId')}
          </Text>
        </Box>

        <Box>
          <ReactSelect
            label="Tipo de negócio"
            name="businessType"
            control={control}
            error={errors.businessType}
            options={businessTypeSelectOptions}
          />
          <Text>
            selected:
            {watch('businessType')}
          </Text>
        </Box>
      </SimpleGrid>

      <Flex mt="12" justify="flex-end">
        <ButtonGroup>
          <Button colorScheme="blackAlpha" onClick={goBack}>
            Cancelar
          </Button>

          <Button
            type="submit"
            colorScheme="green"
            isLoading={formState.isSubmitting}
          >
            Preencher endereço
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
