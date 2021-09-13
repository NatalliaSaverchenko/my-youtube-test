import { Switch,Route } from 'react-router-dom';
import { LoginScreen,SearchScreen,FavoritesScreen, NotFoundScreen } from '../screens';
import { useRouteGuard } from './useRouteGuard';
export const RouterView = () => {
  useRouteGuard();

  return (
    <Switch>
      <Route
        exact
        path="/login"
        component={LoginScreen}
      />
      <Route
        exact
        path="/"
        component={SearchScreen}
      />
      <Route
        path="/favorites"
        component={FavoritesScreen}
      />
      <Route
        exact
        path="*"
        component={NotFoundScreen}
      />

    </Switch>
  );
};
