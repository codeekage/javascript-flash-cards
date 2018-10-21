
import { createSwitchNavigator } from 'react-navigation'
import DrawerNavigator from './DrawerNavigator'

export default RootStack = createSwitchNavigator(
    {
        Main : DrawerNavigator
    },
    {
        initialRouteName: 'Main'
    }
)