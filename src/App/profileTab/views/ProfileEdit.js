/**
 * Created by Raphael Karanja on 2019-03-03.
 */
/**
 * Created by Raphael Karanja on 2019-03-03.
 */

import React from 'react'
import {View, Text} from 'react-native';
import {Container, Content, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import {connect} from 'react-redux';

class ProfileEdit extends React.Component {
    render() {
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

                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps)(ProfileEdit);