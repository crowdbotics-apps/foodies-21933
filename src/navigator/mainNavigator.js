import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps160989Navigator from '../features/Maps160989/navigator';
import Add-Item160988Navigator from '../features/Add-Item160988/navigator';
import Maps160984Navigator from '../features/Maps160984/navigator';
import UserProfile160980Navigator from '../features/UserProfile160980/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps160989: { screen: Maps160989Navigator },
Add-Item160988: { screen: Add-Item160988Navigator },
Maps160984: { screen: Maps160984Navigator },
UserProfile160980: { screen: UserProfile160980Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
