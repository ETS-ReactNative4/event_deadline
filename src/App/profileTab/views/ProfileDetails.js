/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';
import {Container} from "native-base";
import { Card, Icon } from 'react-native-elements'
export default class ProfileDetails extends React.Component {
    render() {
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
                            <Text style={styles.userNameText}>John Doe</Text>
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
                </View>
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
        borderColor: '#fff',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
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
})