
import React from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';

const RefreshButton = (props) => {
  return (
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
  )
}

export default RefreshButton
