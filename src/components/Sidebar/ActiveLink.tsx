import { Link as ChakraLink } from '@chakra-ui/react';
import React, { cloneElement, ReactElement } from 'react';
import { useLocation } from 'react-router';
import { Link, LinkProps } from 'react-router-dom';

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export const ActiveLink: React.FC<IActiveLinkProps> = ({
  children,
  shouldMatchExactHref = false,
  to,
  ...rest
}) => {
  const { pathname } = useLocation();

  let isActive = false;

  if (shouldMatchExactHref && pathname === to) {
    isActive = true;
  }

  if (!shouldMatchExactHref && pathname.startsWith(String(to))) {
    isActive = true;
  }

  return (
    <ChakraLink as={Link} to={to} display="flex" alignItems="center" {...rest}>
      {cloneElement(children, {
        color: isActive ? 'blue.500' : 'gray.700',
      })}
    </ChakraLink>
  );
};
