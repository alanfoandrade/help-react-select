import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { PropertyDetails } from '../pages/App/Ownership/Properties/PropertyDetails';
import { HandleProperty } from '../pages/App/Ownership/Properties/HandleProperty';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/properties/details" component={PropertyDetails} />
    <Route path="/properties/register" component={HandleProperty} />
    <Route path="/properties/update" component={HandleProperty} />
  </Switch>
);
