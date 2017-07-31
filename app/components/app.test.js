import React from 'react';
import { shallow } from 'enzyme';
import App from './app.jsx';

describe('App Component Testing', () => {
  it('should render correct component when it mounts', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app-container')).toHaveLength(1);
  });
});
