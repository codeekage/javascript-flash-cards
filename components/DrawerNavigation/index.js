import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from 'react-navigation';
import { Icon } from "native-base";


export default  drawerNavigation = createDrawerNavigator({
    Home : {
        screen : HomeScreen,
        navigationOptions : () => ({
            tabBarIcon: ({tintColor}) => (
             <Icon name="md-home" size={32} color={tintColor} />
             )
          })
    },
    
}, 
    {
        tabBarOptions: {
            activeTintColor: "pink ",
            inactiveTintColor: "gray",
            showLabel: false,
            showIcon: true
        },
    }
);