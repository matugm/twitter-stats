import React from 'react';
import ReactDOM from 'react-dom';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TopTweets extends React.Component {
  render() {
    return (
      <div>
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
          <TableRow key={tweet.id}>
            <TableRowColumn>{tweet.favorite_count}</TableRowColumn>
            <TableRowColumn>{tweet.text}</TableRowColumn>
          </TableRow>
        )}
        </TableBody>
      </Table>
      </div>
    )
  }
}

export default TopTweets
