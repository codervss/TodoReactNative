import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home'
import Todo from '../components/ToDo'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HeaderLeftComp from '../components/common/HeaderLeft';
import HeaderRightComp from '../components/common/HeaderRight';
import colors from '../globals/colors'

const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
    <Stack.Navigator 
        initialRouteName="Home"
        headerMode='float'
        screenOptions={{
            title : '',
            headerStyle : {backgroundColor : colors.primary, elevation: 0},
            headerLeftContainerStyle : { paddingLeft : 20},
            headerRightContainerStyle : { paddingRight : 20},
            headerRight : (props) =>(
                <HeaderRightComp />
              )
        }}
    >
      <Stack.Screen name="Home" component={Home}
       options={ ({navigation, route}) => ({
            headerLeft : (props) => <HeaderLeftComp navigation={navigation} route={route} />
        })}
         />
      <Stack.Screen name="Todo" component={Todo} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack