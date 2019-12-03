import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './../screens/SearchScreen.js';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Bussiness Search',
    },
  },
);

export default createAppContainer(navigator);
