/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import { createStackNavigator } from 'react-navigation';

//SCREENS
import ProfileDetails from './views/ProfileDetails';
import EditProfile from  './views/ProfileEdit'
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import UpdateDetails from "../authTab/views/UpdateUser";

const routeConfiguration = {
    ProfileDetails: { screen: ProfileDetails },
    EditProfile: { screen: EditProfile }
}
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'ProfileDetails',
    tabBarLabel: 'Profile',
    UpdateDetails: {screen: UpdateDetails},
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
};


export const ProfileTabNavigator = createStackNavigator(routeConfiguration,stackNavigatorConfiguration)