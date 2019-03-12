/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import {EventsTabNavigator} from '../eventsTab';
import {ProfileTabNavigator} from '../profileTab';
import {AuthTabNavigator} from "../authTab";
import React, {Component} from "react";
import {connect} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import {bindActionCreators} from "redux";
import {fetchUser} from '../../Redux/actions/Auth'

const routeConfiguration = {
    Events: {
        screen: EventsTabNavigator,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon size={20} name={'calendar'} color={tintColor}/>
        }
    },

    Profile: {
        screen: ProfileTabNavigator,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon size={20} name={'user'} color={tintColor}/>
        }
    }
}

const tabBarConfiguration = {
    navigationOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white'
    }
};

const TabBar = createBottomTabNavigator(routeConfiguration, tabBarConfiguration);

const TabBarNavigation = createAppContainer(TabBar);

//auth
const authRouteConfiguration = {
    Auth: {
        screen: AuthTabNavigator,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon size={20} name={'users'} color={tintColor}/>
        }
    }
}

const AuthTab = createBottomTabNavigator(authRouteConfiguration, tabBarConfiguration);
const AuthTabBarNavigation = createAppContainer(AuthTab);


class TabBarMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.auth.isLoggedIn && JSON.stringify(prevProps.auth.userDetails.firstName) === JSON.stringify(this.props.auth.userDetails.firstName)) {
            this.props.fetchUser(this.props.auth.userId);
        }
    }

    render() {
        const {isLoggedIn} = this.props.auth;
        if (!isLoggedIn) {
            return (
                <AuthTabBarNavigation/>
            )
        } else {
            return (
                <TabBarNavigation/>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: bindActionCreators(fetchUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBarMain)