import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { ListItem } from '../../cf-component-list/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<ListItem>ListItem</ListItem>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
