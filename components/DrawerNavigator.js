import * as React from 'react'
import Introduction from './Introduction';
import Arrays from './Arrays';
import GrammarTypes from './GrammarTypes';
import Functions from './Functions';
import { createDrawerNavigator } from 'react-navigation';
import { Icon } from "native-base";
import ControlFlow from './ControlFlow';
import ExpressionsOperators from './ExpressionOperators';
import LoopsIteration from './LoopsIteration';
import {Ionicons} from '@expo/vector-icons'


export default  drawerNavigation = createDrawerNavigator({
    Intro : {
        screen : Introduction,
        navigationOptions : () => ({
            drawerLabel : 'Introduction',
        })
    },   
    Grammar : {
        screen : GrammarTypes,
        navigationOptions : () => ({
            drawerLabel : 'Grammar and types',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-home" size={32} color={tintColor} />
             )
        })
    },
    Control: {
        screen : ControlFlow,
        navigationOptions : () => ({
            drawerLabel : 'Control flow and error handling',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-home" size={32} color={tintColor} />
             )
        })
    },
    Loops : {
        screen : LoopsIteration,
        navigationOptions : () => ({
            drawerLabel : 'Loops and Iteration',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-home" size={32} color={tintColor} />
             )
            })
    },
    Function : {
        screen : Functions,
        navigationOptions : () => ({
            drawerLabel : 'Functions',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-home" size={32} color={tintColor} />
             )
        })
    }, 
    ExpressOps: {
        screen : ExpressionsOperators,
        navigationOptions : () => ({
            drawerLabel : 'Expression and Operators',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-home" size={32} color={tintColor} />
             )
        })
    }
  
}, 
{
    contentOptions: {
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1
        },
      }
}
);