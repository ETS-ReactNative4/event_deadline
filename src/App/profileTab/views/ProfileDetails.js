/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';
import {Container} from "native-base";
import {Icon} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import ProfileItem from './components/ProfileItem'

class ProfileDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'raphynje@gmail.com'

        }    }

    componentDidMount() {

    }

    render() {
        const {firstName, lastName, phone, gender, bio}=this.props.auth.userDetails;
        const {email}=this.props.auth.user;
        return (
            <Container>
                <View>
                    <ImageBackground
                        style={styles.headerBackgroundImage}
                        blurRadius={10}
                        source={
                            require('../../../../assets/banner.jpeg')}>
                        <View style={styles.headerColumn}>
                            <Image
                                style={styles.userImage}
                                source={require('../../../../assets/avatar.jpg')}
                            />
                            <Text style={styles.userNameText}>{firstName} {lastName}</Text>
                            <View style={styles.userAddressRow}>
                                <View>
                                    <Icon
                                        name="place"
                                        underlayColor="transparent"
                                        iconStyle={styles.placeIcon}
                                    />
                                </View>
                                <View style={styles.userCityRow}>
                                    <Text style={styles.userCityText}>
                                        Nairobi, Kenya
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.userBioRow}>
                        <Text style={styles.userBioText}>
                            {bio}
                        </Text>
                    </View>

                </View>

                <View style={styles.profileItemsRow}>
                    <ProfileItem field={email} name='Personal Email' icon='email'/>

                    <ProfileItem field={phone} name='Mobile' icon='call' rightIcon="textsms"/>

                    <ProfileItem field={gender} name='Gender' icon='wc' rightIcon="textsms"/>
                </View>

                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Edit profile"
                                       onPress={() => this.props.navigation.navigate('EditProfile')}>
                        <IonIcon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerColumn: {
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    userImage: {
        borderColor: '#148F77',
        borderWidth: 3,
        borderRadius: 60,
        height: 120,
        marginBottom: 10,
        width: 120,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userBioRow: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    userBioText: {
        color: 'gray',
        fontSize: 13.5,
        textAlign: 'center',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    profileItemsRow: {
        marginTop: 20
    }
});

const mapStateToProps = ({auth}) => {
    return {
        auth
    }
};
export default connect(mapStateToProps)(ProfileDetails);