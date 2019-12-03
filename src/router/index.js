import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './../screens/SearchScreen.js';
import ResultShowScreen from './../screens/ResultShowScreen.js';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Bussiness Search',
    },
  },
);

export default createAppContainer(navigator);
