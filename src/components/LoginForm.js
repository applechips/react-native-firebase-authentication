import React, { Component } from 'React';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={ email => this.setState({ email })} />
        </CardSection>

{/* PASSWORD */}
        <CardSection>
          <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={ password => this.setState({ password })} />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

// TextInput --> User types text --> onChangeText event called --> 'setState' with new text --> Component renders --> When TextInput renders, we will tell it that its value is 'this.state.text' --> goes back to TextInput & process happens all over again
