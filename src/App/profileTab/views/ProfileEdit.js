/**
 * Created by Raphael Karanja on 2019-03-03.
 */
/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {View, Text} from 'react-native';
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
    Form
} from 'native-base';
import {connect} from 'react-redux';

class ProfileEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            gender: '',
            bio: '',
            errors: {
            }
        }

        this.update = this.update.bind(this);
    }
    update(){

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
                            <Item floatingLabel>
                                <Label>Gender </Label>
                                <Input
                                    onChangeText={(gender) => this.setState({gender})}
                                    autoCorrect={false}
                                    autoCapitalize="none"/>
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

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProp = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProp)(ProfileEdit);