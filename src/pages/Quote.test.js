import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Quote />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
