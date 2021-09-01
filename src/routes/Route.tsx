import { ComponentType } from 'react';

import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: IRouteProps): JSX.Element => (
  <ReactDOMRoute
    {...rest}
    render={({ location }) =>
      !isPrivate ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: isPrivate ? '/' : '/properties/details"',
            state: { from: location },
          }}
        />
      )
    }
  />
);
