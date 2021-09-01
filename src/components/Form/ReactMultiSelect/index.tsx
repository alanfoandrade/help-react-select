import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  useTheme,
} from '@chakra-ui/react';
import { Control, Controller, FieldError } from 'react-hook-form';
import Select, {
  OptionTypeBase,
  Props as SelectProps,
  StylesConfig,
} from 'react-select';

interface ISelectProps extends SelectProps<OptionTypeBase> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  error?: FieldError;
}

export const ReactMultiSelect = ({
  name,
  control,
  label,
  options,
  error,
  ...rest
}: ISelectProps): JSX.Element => {
  const theme = useTheme();

  const customStyles: StylesConfig<OptionTypeBase, true> = {
    menu: (provided) => ({
      ...provided,
      borderRadius: theme.radii.md,
      padding: 15,
    }),
    control: (provided, state) => {
      let shadow = provided.boxShadow;

      if (state.isFocused || state.menuIsOpen) {
        shadow = `0 0 0 1px ${theme.colors.blue[300]}`;
      } else if (error) {
        shadow = `0 0 0 1px ${theme.colors.red[500]}`;
      }

      let border = theme.colors.gray[300];

      if (state.isFocused || state.menuIsOpen) {
        border = `${theme.colors.blue[300]}`;
      } else if (error) {
        border = `${theme.colors.red[500]}`;
      }

      return {
        ...provided,
        backgroundColor: theme.colors.gray[100],
        borderRadius: theme.radii.md,
        borderColor: border,
        boxShadow: shadow,
        fontSize: '18px',
        height: 48,
        padding: '0 4px',
        ':hover': {
          borderColor: border,
        },
      };
    },
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme.colors.gray[700],
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided, state: { isSelected: boolean }) => ({
      ...provided,
      borderRadius: theme.radii.md,
      color: state.isSelected ? 'white' : theme.colors.gray[700],
      padding: '10px 20px',
      marginBottom: 4,
      cursor: 'pointer',
    }),
  };

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        {...rest}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            isMulti
            value={options?.find((c) => c.value === value)}
            onChange={(val) => onChange(val)}
            onBlur={onBlur}
            options={options}
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => option.label}
            styles={customStyles}
            placeholder=""
          />
        )}
      />

      {!!error && (
        <FormErrorMessage position="absolute">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};
