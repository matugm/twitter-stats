
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';

const RefreshButton = (props) => {
  return (
    <MuiThemeProvider>
    <div style={{marginTop: 20}}>
      <form action="/analyze" method="post" id="form">
        <RaisedButton
        label="Refresh!"
        primary={true}
        type="submit"
        />

        <input type='hidden' name='authenticity_token' value={props.token} />
        <input type='hidden' name='user' value={props.user} />
      </form>
    </div>
    </MuiThemeProvider>
  )
}

export default RefreshButton
