import {Page} from '@shopify/polaris';

import {mount} from './tests/utils/react-testing';
import {App} from './App';

describe('sample test', () => {
  // Sample test to demonstrate how you should test with react-testing & Polaris
  it('renders page', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toContainReactComponent(Page);
  });
});
