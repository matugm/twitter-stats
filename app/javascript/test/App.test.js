
import React from 'react';
import RefreshButton from '../components/RefreshButton'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
     <RefreshButton />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
