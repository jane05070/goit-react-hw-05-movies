import {
  NavigationList,
  NavigationListItem,
  NavigationLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </NavigationListItem>
      </NavigationList>
    </nav>
  );
};
