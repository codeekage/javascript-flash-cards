import DrawerNavigator from './DrawerNavigation'
import { createSwitchNavigator } from 'react-navigation'


export default RootStack = createSwitchNavigator(
    {
        Main : DrawerNavigator
    },
    {
        initialRouteName: 'Main'
    }
)