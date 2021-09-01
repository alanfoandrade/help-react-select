import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

import fonts from './foundations/fonts';

const overrides = {
  styles,
  fonts,
};

export default extendTheme(overrides);
