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
        exact
        path="/favorites"
        component={FavoritesScreen}
      />
      <Route
        path="*"
        component={NotFoundScreen}
      />

    </Switch>
  );
};
