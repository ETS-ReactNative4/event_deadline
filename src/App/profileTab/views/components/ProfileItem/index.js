/**
 * Created by Raphael Karanja on 2019-03-07.
 */
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
    },
    smsIcon: {
        color: 'gray',
        fontSize: 30,
    },
    smsRow: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    emailIcon: {
        color: '#01C89E',
        fontSize: 30,
    },
    emailNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    emailNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    emailRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailText: {
        fontSize: 16,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
})

const Email = ({containerStyle, name, icon, email, rightIcon}) => (
    <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Icon
                    name={icon}
                    underlayColor="transparent"
                    iconStyle={styles.emailIcon}
                />
            </View>
            <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                    <Text style={styles.emailText}>{email}</Text>
                </View>
                <View style={styles.emailNameColumn}>
                    <Text style={styles.emailNameText}>{name}</Text>
                </View>
            </View>

            { rightIcon.length > 0 ?
                <View style={styles.smsRow}>
                    <Icon
                        name={rightIcon}
                        underlayColor="transparent"
                        iconStyle={styles.smsIcon}
                    />
                </View> : ''
            }
        </View>
    </TouchableOpacity>
)


export default Email