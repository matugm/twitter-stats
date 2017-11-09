
import React from 'react';
import Results from '../components/Results'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
     <Results tweets={[
       {"id": 1, "text": "testing", "favorite_count": 10},
       {"id": 2, "text": "abc", "favorite_count": 20},
       {"id": 3, "text": "something", "favorite_count": 30}
     ]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
