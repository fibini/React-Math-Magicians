import React from 'react';
import renderer from 'react-test-renderer';
import Calcu from '../pages/Calcu';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Calcu />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
