
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from "prop-types"

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state    = {user: "", input_error: ""};
    this.validate = this.validate.bind(this);
  }

  validate(e) {
    e.preventDefault();

    if (this.state.user.length < 1) {
      this.setState({input_error: "Please enter a valid user name."})
    } else {
      document.getElementById("form").submit();
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <form action="/analyze" method="post" onSubmit={this.validate} id="form">
          <TextField
            name="user"
            floatingLabelText="Twitter user"
            onChange={(e) => this.setState({user: e.target.value})}
            errorText={this.state.input_error}
          />

          <br />

          <RaisedButton
            label="Analyze!"
            primary={true}
            type="submit"
          />
          <input type='hidden' name='authenticity_token' value={this.props.token} />
        </form>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  state: PropTypes.object
};

export default App
