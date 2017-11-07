
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

    if (this.state.user.length < 1) {
      this.setState({input_error: "Please enter a valid user name."})
    } else {
      document.getElementById("form").submit();
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="homepage-form">
        <h2>Please enter the twitter user you would like to analyze</h2>

        <form action="/analyze" method="post" onSubmit={this.validate} id="form">
          <TextField
            name="user"
            floatingLabelText="Twitter user"
            inputStyle={{color: "white"}}
            floatingLabelStyle={{color: "white"}}
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
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  token: PropTypes.string
};

export default App
