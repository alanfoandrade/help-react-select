import React from 'react';
import {
  Button,
  ButtonProps,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

type To = {
  pathname: string;
  state: {
    [key: string]: unknown;
  };
};

interface ILinkButtonProps extends ButtonProps {
  children: string;
  icon?: IconType;
  to: string | To;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  icon,
  to,
  ...rest
}) => (
  <ChakraLink
    as={Link}
    to={to}
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Button
      size="sm"
      fontSize="sm"
      colorScheme="blue"
      leftIcon={icon && <Icon as={icon} fontSize="16" />}
      {...rest}
    >
      {children}
    </Button>
  </ChakraLink>
);

export default LinkButton;
