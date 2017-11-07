
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
    <form action="/analyze" method="post">
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

    <input type='hidden' name='authenticity_token' value={123} />
    </form>
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
