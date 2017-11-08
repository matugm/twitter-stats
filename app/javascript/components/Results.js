
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from "prop-types"

import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Results extends React.Component {
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
        <div className="results_page">
          <h2 className="header">Here Are Your Results!</h2>

          <div className="white_box">
            <p style={{fontWeight: "bold"}}>User name:</p>
            {this.props.user}

            <br />

            <p style={{fontWeight: "bold"}}>Follower count:</p>
            {this.props.followers_count}
          </div>

          <h2 style={{marginTop: 20, textAlign: "center"}}>Top 10 Tweets</h2>

          <Table fixedHeader={false} style={{ tableLayout: 'auto' }}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Favorites</TableHeaderColumn>
                <TableHeaderColumn>Tweet</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false}>
              {this.props.tweets.map((tweet) =>
                <TableRow>
                  <TableRowColumn>{tweet.favorite_count}</TableRowColumn>
                  <TableRowColumn>{tweet.text}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <form action="/analyze" method="post" id="form">
            <br />
            <RaisedButton
              label="Refresh!"
              primary={true}
              type="submit"
            />

            <input type='hidden' name='authenticity_token' value={this.props.token} />
            <input type='hidden' name='user' value={this.props.user} />
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

Results.propTypes = {
  token: PropTypes.string,
  user: PropTypes.string,
  tweets: PropTypes.object
};

export default Results
