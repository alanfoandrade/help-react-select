import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from './ActiveLink';

interface INavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  shouldMatchExactHref?: boolean;
  to: string;
}

export const NavLink: React.FC<INavLinkProps> = ({
  icon,
  children,
  shouldMatchExactHref,
  to,
  ...rest
}) => (
  <ActiveLink to={to} shouldMatchExactHref={shouldMatchExactHref}>
    <ChakraLink display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </ActiveLink>
);
