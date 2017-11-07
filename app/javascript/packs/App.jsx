
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

const App = () => (
  <MuiThemeProvider>
    <TextField
      name="user"
      floatingLabelText="Twitter user"
    />

    <RaisedButton
     label="Analyze!"
     primary={true}
     style={style}
     type="submit"
    />
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
