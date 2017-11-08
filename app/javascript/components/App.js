
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from "prop-types"

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state    = {user: "", input_error: ""};
    this.validate = this.validate.bind(this);
  }

  validate(e) {
    e.preventDefault();

    if (this.state.user.length == 0) {
      this.setState({input_error: "Please enter a valid user name."})
    } else {
      document.getElementById("form").submit();
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="homepage_form">
        <h2 className="header">Get Stats for Any Twitter User</h2>

        <form action="/analyze" method="post" onSubmit={this.validate} id="form">
          <TextField
            name="user"
            floatingLabelText="Twitter user"
            inputStyle={{color: "white"}}
            floatingLabelStyle={{color: "white"}}
            onChange={(e) => this.setState({user: e.target.value})}
            errorText={this.state.input_error}
            fullWidth={true}
          />

          <br />

          <RaisedButton
            label="Analyze!"
            primary={true}
            type="submit"
            fullWidth={true}
          />
          <input type='hidden' name='authenticity_token' value={this.props.token} />
        </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  token: PropTypes.string
};

export default App
