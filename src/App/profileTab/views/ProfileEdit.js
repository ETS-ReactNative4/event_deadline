/**
 * Created by Raphael Karanja on 2019-03-03.
 */
/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Item,
    Label,
    Input,
    Picker,
    Form
} from 'native-base';
import {connect} from 'react-redux';

class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: this.props.auth.userId,
            firstName: '',
            lastName: '',
            phone: '',
            gender: '',
            bio: '',
            errors: {}
        }
        this.update = this.update.bind(this);
    };

    userIsValid() {
        let isValid = true;
        const {firstName, lastName, phone, gender, bio, errors} = this.state;

        if (firstName.length < 3) {
            errors.firstName = 'First Name is too short.';
            isValid = false;
        } else {
            errors.firstName = ''
        }

        if (lastName.length < 3) {
            errors.lastName = 'Last Name is too short.';
            isValid = false;
        } else {
            errors.lastName = ''
        }

        if (phone.length < 10) {
            errors.lastName = 'Phone is too short.';
            isValid = false;
        } else {
            errors.lastName = ''
        }

        if (gender) {
            errors.gender = 'Gender is required.';
            isValid = false;
        } else {
            errors.gender = ''
        }


        return isValid;
    }

    update() {
        if (!this.userIsValid()) {
            return;
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Edit User</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='more'/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        <View>
                            <Item floatingLabel>
                                <Label>First Name </Label>
                                <Input
                                    onChangeText={(firstName) => this.setState({firstName})}
                                    autoCorrect={false}
                                    autoCapitalize="none"/>
                            </Item>
                            <Text style={styles.errorMessage}>{errors.firstName} </Text>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Last Name </Label>
                                <Input
                                    onChangeText={(lastName) => this.setState({lastName})}
                                    autoCorrect={false}
                                    autoCapitalize="none"/>
                            </Item>
                            <Text style={styles.errorMessage}>{errors.lastName} </Text>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Phone </Label>
                                <Input
                                    onChangeText={(phone) => this.setState({phone})}
                                    autoCorrect={false}
                                    autoCapitalize="none"/>
                            </Item>
                            <Text style={styles.errorMessage}>{errors.phone} </Text>
                        </View>

                        <View>
                            <Item>
                                <Label>Gender</Label>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down"/>}
                                    style={{alignSelf: 'stretch', flex: 1}}
                                    placeholder="Select your Gender"
                                    placeholderStyle={{color: "#bfc6ea"}}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.gender}
                                    onValueChange={(gender) => this.setState({gender})}
                                >
                                    <Picker.Item label="Female" value="female"/>
                                    <Picker.Item label="Male" value="male"/>

                                </Picker>
                            </Item>
                            <Text style={styles.errorMessage}>{errors.gender} </Text>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Bio </Label>
                                <Input
                                    onChangeText={(bio) => this.setState({bio})}
                                    autoCorrect={false}
                                    autoCapitalize="none"/>
                            </Item>
                            <Text style={styles.errorMessage}>{errors.bio} </Text>
                        </View>

                        <Button
                            style={{marginTop: 15}}
                            full
                            rounded
                            success
                            onPress={() => this.update()}>
                            <Text style={{color: '#fff'}}>Update User</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 10
    }
});
const mapStateToProps = ({auth}) => {
    return {auth}
};

const mapDispatchToProp = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProp)(ProfileEdit);