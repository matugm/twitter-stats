
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from "prop-types"

import RefreshButton from './RefreshButton'
import TwitterUserInfo from './TwitterUserInfo'
import TopTweets from './TopTweets'

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

          <TwitterUserInfo
            user={this.props.user}
            followers_count={this.props.followers_count} />

          <TopTweets
            tweets={this.props.tweets} />

          <RefreshButton
            user={this.props.user}
            token={this.props.token} />
        </div>
      </MuiThemeProvider>
    );
  }
}

Results.propTypes = {
  token: PropTypes.string,
  user: PropTypes.string,
  tweets: PropTypes.array
};

export default Results
