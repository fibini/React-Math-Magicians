import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Home />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
